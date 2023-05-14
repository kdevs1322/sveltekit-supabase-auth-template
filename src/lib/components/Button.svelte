<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let mode: 'outlined' | 'filled' = 'outlined';
	export let color: 'primary' | 'success' | 'danger' | 'shadow' | null = null;
</script>

<button {type} class="{mode} {mode === 'filled' && color}">
	<slot />
</button>

<style>
	button {
		margin-top: 0.5rem;
		padding: 0.5rem 1.2rem;
		font-size: 1rem;
		font-weight: 500;
		border-radius: 5px;
		border: none;
		background: black;
		color: white;
	}

	button:hover {
		cursor: pointer;
		background: transparent;
		color: black;
		border: 1px solid black;
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

	.primary {
		background-color: rgb(1, 73, 175);
	}

	.success {
		background-color: rgb(1, 175, 1);
	}

	.danger {
		background-color: rgb(251, 46, 46);
	}

	.primary {
		background-color: rgb(0, 0, 0);
	}
</style>
