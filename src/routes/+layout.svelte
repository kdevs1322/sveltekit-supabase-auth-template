<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import './style.css';
	import { supabaseClient } from '$lib/database/supabase';
	import { invalidate } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<header>
	<nav>
		<div class="logo">AUTH</div>
		<ul>
			<li><a href="/">Home</a></li>
			{#if session}
				<li><a href="/protected">Protected</a></li>
				<li>
					<form action="/auth/signout" method="POST">
						<Button type="submit" dark={true} mode="filled" color="danger">Sgin Out</Button>
					</form>
				</li>
			{:else}
				<li>
					<Button dark={true} mode="outlined" link={true} href="/auth/signin">Sgin In</Button>
				</li>
				<li>
					<Button dark={true} mode="filled" color="success" link={true} href="/auth/signup"
						>Sgin Up</Button
					>
				</li>
			{/if}
		</ul>
	</nav>
</header>
<main>
	<slot />
	<div class="gradient-1" />
	<div class="gradient-2" />
</main>

<style>
	header {
		height: 80px;
		background: black;
		color: white;
		padding: 10px 80px;
	}

	nav {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 2.5rem;
		font-weight: 700;
	}

	ul {
		display: flex;
		gap: 24px;
		align-items: center;
		list-style: none;
	}

	a {
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: white;
		padding: 10px 10px;
		font-size: 1.2rem;
	}

	a:hover {
		cursor: pointer;
		border-bottom: 1px solid grey;
	}
	main {
		/* width: min(90%, 1200px); */
		/* margin: auto; */
		position: relative;
		width: 100%;
		min-height: 100vh;
		/* background: rgb(7, 6, 25); */
		background: rgb(217, 217, 217);
		padding: 20px 80px;
		z-index: 1;
		color: rgb(0, 0, 0);
		/* color: rgb(243, 243, 243); */
		overflow: hidden;
	}
</style>
