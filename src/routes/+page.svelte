<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: console.log(data.session?.user);
</script>

<section>
	<header>
		<h1>Supabase and SvelteKit Authentication Template.</h1>
	</header>
	<main>
		<dl>
			<dt><h3>This template includes :</h3></dt>
			<dd>
				<p>* E-mail Authentication</p>
			</dd>
			<dd>
				<p>* Social Authentications (oAuth)</p>
			</dd>
			<dd>
				<p>* And protected routes</p>
			</dd>
		</dl>

		{#if !data.session}
			<div class="cta-container">
				<h1>Give it a Test Go</h1>
				<div class="actions">
					<span>
						<Button mode="outlined" color="danger" link={true} href="/auth/signin">SignIn</Button>
					</span>

					<span class="ml">
						<Button mode="filled" color="shadow" link={true} href="/auth/signup">Register</Button>
					</span>
				</div>
			</div>
		{:else}
			<h1>
				Welcome Back {data.session.user.user_metadata.name ||
					data.session.user.user_metadata.user_name}!!!!
			</h1>
		{/if}
	</main>
</section>

<style>
	h1 {
		font-size: 3rem;
	}
	header h1 {
		font-size: 5rem;
		margin-bottom: 1.5rem;
	}
	h3 {
		font-size: 2rem;
	}
	p {
		margin: 0.7rem 2rem;
		font-size: 1.4rem;
	}

	.cta-container {
		margin-top: 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
	.actions {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 2.5rem;
	}

	.ml {
		margin-left: 6rem;
	}
</style>
