<script>
	import { onMount } from "svelte";
	import { each } from "svelte/internal";
	import { baseURL, movies } from "./store/generalStore";

	onMount(async () => {
		const resp = await fetch($baseURL + "/movies");
		const respData = await resp.json();
		movies.set([respData]);

	});
</script>

<main>
	<table>
		<thead>
			<th>Id</th>
			<th>Title</th>
		</thead>
		
		{#each $movies as movie (movie.id)}
		<tbody>
			<td>{movie.id}</td>
			<td>{movie.title}</td>
		</tbody>
		{/each}
	</table>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>