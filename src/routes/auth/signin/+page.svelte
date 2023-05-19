<script>
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let form;
</script>

<div class="form-container">
	<h1 class="form-title">Sign In</h1>

	<form action="?/signin" method="POST">
		<div class="form-input">
			<label for="email"> Email </label>
			<input id="email" name="email" type="email" />
		</div>

		<div class="form-input">
			<label for="password" aria-hidden="true"> Password </label>
			<input id="password" name="password" type="password" />
		</div>

		{#if form?.message}
			<pre>{form?.message}</pre>
		{/if}

		<div class="form-actions">
			<Button dark={true} type="submit" mode="filled" color="success">sign in</Button>
		</div>
	</form>

	<div class="socials-container">
		<form method="POST">
			<h3>Continue with:</h3>
			<div class="socials-actions-container">
				<button class="btn btn-outlined btn-dark" formAction="?/signin&provider=github">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-github.svg" />
						</span>
						<span class="button-caption"> GitHub </span>
					</span>
				</button>
				<button class="btn btn-outlined btn-dark" formAction="?/signin&provider=google">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-google.svg" />
						</span>
						<span class="button-caption"> Google </span>
					</span>
				</button>
				<button class="btn btn-outlined btn-dark" formAction="?/signin&provider=discord">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-discord.svg" />
						</span>
						<span class="button-caption"> Discord </span>
					</span>
				</button>

				<button class="btn btn-outlined btn-dark" formAction="?/signin&provider=facebook">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-facebook.svg" />
						</span>
						<span class="button-caption"> FaceBook </span>
					</span>
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	.form-container {
		width: min(80%, 600px);
		margin: 0rem auto;
		background: black;
		padding: 3rem 3rem;
		color: white;
		border-radius: 10px;
		box-shadow: 2px 2px 5px black;
	}

	.form-title {
		text-transform: capitalize;
		font-weight: bold;
		margin-bottom: 2rem;
	}

	label {
		font-size: 1.2rem;
	}
	.form-input {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 1.2rem 0;
	}
	.form-input input {
		font-size: 1rem;
		margin-top: 0.25rem;
		padding: 0.7rem 0.5rem;
		background: rgb(28, 28, 28);
		color: white;
		outline: none;
		border: none;
		border-left: 1px solid white;
	}

	.form-container input:focus {
		outline: none;
		background: white;
		color: black;
	}

	.form-actions {
		margin-top: 2.5rem;
		text-align: right;
	}

	.btn {
		padding: 0;
		margin: 0;
		border: none;
		background: none;
		padding: 0.5rem 1.2rem;
		font-size: 1.2rem;
		font-weight: 500;
		border-radius: 5px;
		border: 1px solid black;
		background: black;
		color: white;
	}

	.btn-outlined {
		background: transparent;
		border: 1px solid black;
		color: black;
	}
	.btn-outlined:hover {
		background: rgb(0, 0, 0);
		color: white;
	}

	.btn-dark {
		border: 1px solid rgb(255, 255, 255);
		color: rgb(255, 255, 255);
	}

	.btn-dark:hover {
		border: 1px solid rgb(255, 255, 255);
		background: white;
		color: black;
	}

	.socials-container {
		margin-top: 1.2rem;
	}

	.socials-actions-container {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.button-content {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}
</style>
