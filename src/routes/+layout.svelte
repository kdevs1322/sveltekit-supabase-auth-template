<script>
	import Button from '$lib/components/Button.svelte';
	import './style.css';
</script>

<header>
	<nav>
		<div class="logo">AUTH</div>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/protected">Protected</a></li>
			<li>
				<Button dark={true} mode="filled" color="danger" link={true} href="/auth/signin"
					>SginOut</Button
				>
			</li>
			<li>
				<Button dark={true} mode="outlined" link={true} href="/auth/signin">SginIn</Button>
			</li>
			<li>
				<Button dark={true} mode="filled" color="success" link={true} href="/auth/signup"
					>SginUp</Button
				>
			</li>
		</ul>
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	header {
		height: 80px;
		background: black;
		color: white;
		padding: 10px 40px;
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
		gap: 10px;
		align-items: center;
		list-style: none;
	}

	a {
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: white;
		padding: 10px 10px;
	}

	a:hover {
		cursor: pointer;
		border-bottom: 1px solid grey;
	}

	.btn {
		border-radius: 5px;
	}
	.btn:hover {
		background: rgb(36, 36, 36);
		border: none;
	}
	.btn-signout {
		background: rgb(251, 46, 46);
	}

	.btn-signin {
		border: 1px solid grey;
	}
	.btn-signup {
		background: rgb(1, 175, 1);
	}

	main {
		/* width: min(90%, 1200px); */
		/* margin: auto; */
		/* background: orangered; */
		padding: 20px 40px;
	}
</style>
