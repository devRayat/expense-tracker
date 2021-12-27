<script>
	import Header from '$lib/components/Header.svelte'
	import '../global.css'
</script>

<svelte:head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main
	class="prose max-w-none prose-h1:tracking-[1px] prose-h1:m-0 prose-h2:text-3xl 
	prose-h3:mx-0 prose-h3:mt-8 prose-h3:mb-2 prose-h3:pb-3
	prose-h4:m-0 prose-h4:uppercase
	prose-hr:h-[2px] prose-hr:bg-[#bbb] prose-hr:mb-0
	bg-gray-50 flex flex-col justify-center items-center min-h-screen m-0"
>
	<Header />
	<article>
		<slot />
	</article>
</main>
