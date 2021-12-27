<script lang="ts">
	import { transactionStore } from '$lib/stores/transaction'

	let text: string | null = null
	let amount: number | null = null

	const addTransaction = () => {
		transactionStore.add({
			text: text!,
			amount: amount!
		})
		text = null
		amount = null
	}
</script>

<h3>Add new transaction</h3>
<hr />
<form on:submit|preventDefault={addTransaction}>
	<div class="form-control">
		<label for="text">Text</label>
		<input type="text" id="text" required bind:value={text} placeholder="Enter text..." />
	</div>
	<div class="form-control">
		<label for="amount"
			>Amount <br />
			(negative - expense, positive - income)</label
		>
		<input type="number" id="amount" required bind:value={amount} placeholder="Enter amount..." />
	</div>
	<button
		class="cursor-pointer bg-[#9c88ff] shadow-primary text-white border-0 block 
      text-base mt-3 mb-8 mx-0 p-3 w-full focus:outline-0
      disabled:bg-gray-300 disabled:cursor-default"
		disabled={!text || !amount}>Add transaction</button
	>
</form>
