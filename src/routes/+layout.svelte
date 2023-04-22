<script>
	import './styles.css';
</script>

<div class="app">
	<header>
		<h1>Not sure what to watch?</h1>
		<h2>Try a random episode!</h2>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>
			Built by <a href="https://dympy.dev">Dymion Fritz</a>, view the source @
			<a href="https://github.com/DympyDev/random-episodes">GitHub</a>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		min-height: 100vh;
		max-width: 64rem;
		margin: 0 auto;
		padding: 1rem;
	}

	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		width: 100%;
	}

	header {
		padding: 0 1rem;
	}

	header,
	footer {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	footer {
		background-color: rgb(23, 26, 33);
		color: #e3e3e3;
		box-sizing: border-box;
		padding: 1rem 2rem;
		border-radius: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (max-width: 720px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>
