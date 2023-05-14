<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section>
	<header>
		<h1>Supabase and SvelteKit Authentication Template.</h1>
	</header>
	<main>
		<dl>
			<dt><h3>This template includes :</h3></dt>
			<dd>
				<p>* E-mail and Password authentication</p>
			</dd>
			<dd>
				<p>* And social authentications (oAuth)</p>
			</dd>
		</dl>

		<h1>Give it a Test Go</h1>
		<div class="actions">
			<span>
				<Button mode="outlined" color="danger">SignIn</Button>
			</span>

			<span class="ml">
				<Button mode="filled" color="shadow">Register</Button>
			</span>
		</div>
	</main>
</section>

<style>
	header h1 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
	}
	p {
		margin: 0.7rem 2rem;
		/* font-size: 1rem; */
	}

	main h1 {
		margin-top: 1.5rem;
	}
	.actions {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 1rem;
	}

	.ml {
		margin-left: 1rem;
	}
</style>
