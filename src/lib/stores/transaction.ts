import type { Transaction } from '$lib/types/transaction'
import { nanoid } from '$lib/utils/nanoid'
import { derived, Writable, writable } from 'svelte/store'

const dummyTransactions = [
	{ id: '1', text: 'Flower', amount: -20 },
	{ id: '2', text: 'Salary', amount: 300 },
	{ id: '3', text: 'Book', amount: -10 },
	{ id: '4', text: 'Camera', amount: 150 }
]

// export const transaction = writable<Transaction[]>(dummyTransactions)

export function createTransactionStore(transactions: Transaction[]): TransactionStore {
	const { set, update, subscribe } = writable(transactions)

	function add(transaction: Omit<Transaction, 'id'>) {
		update(trxs => [...trxs, { ...transaction, id: nanoid(6) }])
	}

	function remove(id: string) {
		update(trxs => trxs.filter(trx => trx.id !== id))
	}

	return { set, update, subscribe, add, remove }
}

interface TransactionStore extends Writable<Transaction[]> {
	add(transaction: Omit<Transaction, 'id'>): void
	remove(id: string): void
}

export const transactionStore = createTransactionStore(dummyTransactions)

export const total = derived(transactionStore, trxs => {
	const amounts = trxs.map(trx => trx.amount)

	const balance = amounts.reduce((acc, curr) => acc + curr, 0).toFixed(2)

	const income = amounts
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2)

	const expense = amounts
		.filter(item => item < 0)
		.reduce((acc, item) => (acc -= item), 0)
		.toFixed(2)

	return { income, expense, balance }
})
