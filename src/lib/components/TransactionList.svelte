<script lang="ts">
	import { transactionStore } from '$lib/stores/transaction'
	import { slide } from 'svelte/transition'
</script>

<h3>History</h3>
<hr />
<ul id="list" class="list-none p-0 mb-10">
	{#each $transactionStore as { id, text, amount } (id)}
		<li
			class="group bg-white shadow-primary text-gray-700 flex justify-between relative p-3 my-3 mx-0 border-r-8 border-solid"
			class:border-income={amount >= 0}
			class:border-expense={amount < 0}
			transition:slide={{ duration: 200 }}
		>
			{text} <span>{amount >= 0 ? '+' : '-'}${Math.abs(amount).toFixed(2)}</span>
			<button
				class="cursor-pointer bg-[#e74c3c] border-0 text-white text-xl leading-5 py-1 px-2 absolute top-1/2 left-0 -translate-x-full 
	-translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ease duration-300 focus:outline-0"
				on:click={() => transactionStore.remove(id)}>x</button
			>
		</li>
	{/each}
</ul>
