<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let mode: 'outlined' | 'filled' = 'outlined';
	export let color: 'primary' | 'success' | 'danger' | 'shadow' | null = null;
	export let link: boolean = false;
	export let href: string = '';
	export let dark: boolean = false;
	export let width: 'full' | 'auto' = 'auto';
	export let formAction: string = '';
</script>

{#if link}
	<button>
		<a
			{href}
			class:full={width === 'full'}
			class="{mode} {mode === 'filled' && color} link"
			class:dark
		>
			<slot />
		</a>
	</button>
{:else if formAction}
	<button
		{type}
		class="btn {mode} {mode === 'filled' && color}"
		class:dark
		class:full={width === 'full'}
		formaction={formAction}
		on:click
	>
		<slot />
	</button>
{:else}
	<button
		{type}
		class="btn {mode} {mode === 'filled' && color}"
		class:dark
		class:full={width === 'full'}
		on:click
	>
		<slot />
	</button>
{/if}

<style>
	a {
		width: 100%;
		height: 100%;
		text-decoration: none;
	}
	button {
		padding: 0;
		margin: 0;
		border: none;
		background: none;
	}
	.btn,
	.link {
		padding: 0.5rem 1.2rem;
		font-size: 1.2rem;
		font-weight: 500;
		border-radius: 5px;
		border: 1px solid black;
		background: black;
		color: white;
	}

	.full {
		width: 100%;
	}

	.btn:hover,
	.link:hover {
		cursor: pointer;
		background: transparent;
		color: black;
	}

	.outlined {
		background: transparent;
		border: 1px solid black;
		color: black;
	}
	.outlined:hover {
		background: rgb(0, 0, 0);
		color: white;
	}

	.dark {
		border: 1px solid rgb(255, 255, 255);
		color: rgb(255, 255, 255);
	}

	.dark:hover {
		border: 1px solid rgb(255, 255, 255);
		background: white;
		color: black;
	}

	.primary {
		background-color: rgb(1, 73, 175);
		border: 1px solid rgb(1, 73, 175);
	}

	.success {
		background-color: rgb(1, 175, 1);
		border: 1px solid rgb(1, 175, 1);
	}

	.danger {
		background-color: rgb(251, 46, 46);
		border: 1px solid rgb(251, 46, 46);
	}

	.shadow {
		background-color: rgb(0, 0, 0);
		border: 1px solid black;
	}
</style>
