<script>
	import Navbar from '$lib/components/navbar.svelte'
	import Footer from '$lib/components/footer.svelte'
	import '../app.css'
  </script>

<!-- src/routes/__layout.svelte -->

<Navbar />

<main class="pt-14 w-full lg:w-11/12 mx-auto py-macro px-micro md:px-x-small lg:px-0">
	<slot />
</main>

<Footer />