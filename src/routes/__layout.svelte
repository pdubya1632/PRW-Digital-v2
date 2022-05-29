<script>
	import Navbar from '$lib/components/navbar.svelte'
	import Footer from '$lib/components/footer.svelte'
	import '../app.css'
  </script>

<!-- src/routes/__layout.svelte -->

<!-- <nav>
	<div class="nav-container">
		<a href="/" class="nav-logo" title="Back to Home">Patrick Richardson Wright</a>
		<div class="nav-links">
			<a href="/about" class="link">About</a>
			<a href="/projects" class="link">Projects</a>
			<a href="/contact" class="link">Contact</a>
		</div>
	</div>
</nav> -->

<Navbar />

<main class="container max-w-3xl mx-auto px-4 mb-20">
	<slot />
</main>

<Footer />