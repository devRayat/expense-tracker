<script>
	import { transactionStore } from '$lib/stores/transaction'

	$: total = $transactionStore
		.map(trx => trx.amount)
		.reduce((acc, curr) => acc + curr, 0)
		.toFixed(2)
</script>

<h4>Your balance</h4>
<h1>${total}</h1>
