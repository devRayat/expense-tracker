<script lang="ts">
	import { transactionStore } from '$lib/stores/transaction'

	const moneyClass = 'text-xl tracking-wider my-1 mx-0'
	const divClass = 'flex-1 text-center'

	$: amounts = $transactionStore.map(trx => trx.amount)

	$: income = amounts
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2)

	$: expense = amounts
		.filter(item => item < 0)
		.reduce((acc, item) => (acc -= item), 0)
		.toFixed(2)
</script>

<div
	class="bg-white shadow-primary p-5 flex justify-between my-5 mx-0 divide-x divide-gray-300 divide-solid"
>
	<div class={divClass}>
		<h4>Income</h4>
		<p id="money-plus" class="{moneyClass} text-[#2ecc71]">{income}</p>
	</div>
	<div class={divClass}>
		<h4>Expense</h4>
		<p id="money-minus" class="{moneyClass} text-[#c0392b]">{expense}</p>
	</div>
</div>
