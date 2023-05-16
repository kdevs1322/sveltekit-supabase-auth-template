<script>
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="form-container">
	<h1 class="form-title">Sign-up</h1>

	<form action="" method="POST">
		<div class="form-input">
			<label for="name"> Name </label>
			<input id="name" name="name" type="name" />
		</div>

		<div class="form-input">
			<label for="email"> Email </label>
			<input id="email" name="email" type="email" />
		</div>

		<div class="form-input">
			<label for="password" aria-hidden="true"> Password </label>
			<input id="password" name="Password" type="password" />
		</div>

		<div class="form-actions">
			<Button dark={true} type="submit" mode="filled" color="success">sign in</Button>
		</div>
	</form>

	<div class="socials-container">
		<form method="POST">
			<h3>Continue with:</h3>
			<div class="socials-actions-container">
				<Button dark={true} type="submit" mode="outlined" width="full">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-github.svg" />
						</span>
						<span class="button-caption"> GitHub </span>
					</span>
				</Button>
				<Button dark={true} type="submit" mode="outlined" width="full">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-google.svg" />
						</span>
						<span class="button-caption"> Google </span>
					</span>
				</Button>
				<Button dark={true} type="submit" mode="outlined" width="full">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-discord.svg" />
						</span>
						<span class="button-caption"> Discord </span>
					</span>
				</Button>

				<Button dark={true} type="submit" mode="outlined" width="full">
					<span class="button-content">
						<span class="button-icon">
							<Icon href="/icons/icons8-facebook.svg" />
						</span>
						<span class="button-caption"> FaceBook </span>
					</span>
				</Button>
			</div>
		</form>
	</div>
</div>

<style>
	h3 {
		font-weight: 800;
		text-transform: capitalize;
	}
	.form-container {
		width: min(80%, 500px);
		margin: 2rem auto;
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
