<script lang="ts">
	import { total } from '$lib/stores/transaction'

	const moneyClass = 'text-xl tracking-wider my-1 mx-0'
	const divClass = 'flex-1 text-center'
</script>

<div
	class="bg-white shadow-primary p-5 flex justify-between my-5 mx-0 divide-x divide-gray-300 divide-solid"
>
	<div class={divClass}>
		<h4>Income</h4>
		<p class="{moneyClass} text-income">{$total.income}</p>
	</div>
	<div class={divClass}>
		<h4>Expense</h4>
		<p class="{moneyClass} text-expense">{$total.expense}</p>
	</div>
</div>
