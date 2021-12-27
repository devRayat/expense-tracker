<script lang="ts">
	import AddTransaction from '$lib/components/AddTransaction.svelte'
	import Balance from '$lib/components/Balance.svelte'
	import IncomeExpenses from '$lib/components/IncomeExpenses.svelte'
	import TransactionList from '$lib/components/TransactionList.svelte'
</script>

<div class="my-8 mx-auto w-96">
	<Balance />
	<IncomeExpenses />
	<TransactionList />
	<AddTransaction />
</div>
