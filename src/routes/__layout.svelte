<script>
	import Navbar from '$lib/components/navbar.svelte'
	import Footer from '$lib/components/footer.svelte'
	import '../app.css'
  </script>

<!-- src/routes/__layout.svelte -->

<Navbar />

<main>
	<slot />
</main>

<Footer />