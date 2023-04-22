<script>
	import {
		RANDOM_EPISODE_BOOKMARKLET,
		ANOTHER_RANDOM_EPISODE_BOOKMARKLET
	} from '$lib/utils/bookmarklet.helper';
</script>

<svelte:head>
	<title>Random Episodes</title>
	<meta name="description" content="Random Episodes on your favorite streaming services!" />
</svelte:head>

<section>
	<p>
		Sometimes you just want to watch a random episode of your favorite show, either because the
		storyline isn't that deep or it's your 23rd rewatch and you're just looking for the right
		background noise during dinner.<br />Well, that's where this little tool comes in!
	</p>
	<p>
		I've created a little tool that, when on the episode overview of a specific show, will randomly
		select a season followed by a random epsiode! Right now, the tool works for:
	</p>
	<ul>
		<li>Disney+</li>
		<li>Netflix</li>
		<li>HBO Max</li>
	</ul>
</section>

<section>
	<p>
		To start using this little tool, simple drag-and-drop the following button to your bookmark bar.<br
		/>
		Then, simply go to one of the streaming sites mentioned above, open the details of the show you want
		to watch and click the bookmark!
	</p>
	<a class="button" href={RANDOM_EPISODE_BOOKMARKLET}>Random episode!</a>
</section>

<section>
	<p>
		Want to watch another episode of the same series when you've reached the credits? Don't worry,
		I've made a bookmark for that as well!<br />Simply drag and drop the following button to your
		bookmark bar and click it when your episode is running the credits.
	</p>
	<a class="button" href={ANOTHER_RANDOM_EPISODE_BOOKMARKLET}>Another random episode!</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		background-color: rgb(23, 26, 33);
		color: #e3e3e3;
		box-sizing: border-box;
		padding: 2rem;
		border-radius: 12px;
	}

	section > *:not(:first-child) {
		margin-top: 1rem;
	}

	section:first-child {
		grid-column: 1 / span 2;
	}

	.button {
		background-color: #226ce0;
		color: #e0fff1;
		padding: 0.5rem 1rem;
		border-radius: 2px;
	}

	.button:hover,
	.button:focus {
		background-color: #2e5faa;
		color: #e0fff1;
		text-decoration: none;
	}

	@media (max-width: 720px) {
		section:first-child {
			grid-column: 1;
		}
	}
</style>
