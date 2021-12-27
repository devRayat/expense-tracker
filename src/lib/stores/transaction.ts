import type { Transaction } from '$lib/types/transaction'
import { nanoid } from '$lib/utils/nanoid'
import { writable } from 'svelte/store'

const dummyTransactions = [
	{ id: '1', text: 'Flower', amount: -20 },
	{ id: '2', text: 'Salary', amount: 300 },
	{ id: '3', text: 'Book', amount: -10 },
	{ id: '4', text: 'Camera', amount: 150 }
]

// export const transaction = writable<Transaction[]>(dummyTransactions)

export function createTransactionStore(transactions: Transaction[]) {
	const { set, update, subscribe } = writable(transactions)

	function add(transaction: Omit<Transaction, 'id'>) {
		update(trxs => [...trxs, { ...transaction, id: nanoid(6) }])
	}

	function remove(id: string) {
		update(trxs => trxs.filter(trx => trx.id !== id))
	}

	return { set, update, subscribe, add, remove }
}

export const transactionStore = createTransactionStore(dummyTransactions)
