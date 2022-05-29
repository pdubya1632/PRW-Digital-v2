<script>
	import Navbar from '$lib/components/navbar.svelte'
	import Footer from '$lib/components/footer.svelte'
	import '../app.css'
  </script>

<!-- src/routes/__layout.svelte -->

<Navbar />

<main class="container mx-auto px-4 mb-20">
	<slot />
</main>

<Footer />