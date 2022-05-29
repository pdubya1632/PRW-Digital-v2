<script>
	import TwitterIcon from './twitter-icon.svelte';
</script>

<footer class="footer p-10 bg-neutral text-neutral-content">
	<div>
		<!-- insert logo here -->
		<p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
		<p>
			Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved by Patrick Richardson Wright
		</p>
	</div>
	<div>
		<span class="footer-title">Social</span>
		<div class="grid grid-flow-col gap-4">
			<a href="https://twitter.com">
				<TwitterIcon />
			</a>
			<a href="https://github.com">
				Add Github icon
			</a>
		</div>
	</div>
</footer>
