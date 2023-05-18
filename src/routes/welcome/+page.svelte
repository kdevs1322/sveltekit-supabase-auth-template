<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome Mr. {data.session?.user['user_metadata']?.name || 'nada'}</h1>

<h3>E-mail : {data.session?.user?.email || 'somethings wrong'}</h3>

<style>
	h1 {
		text-align: center;
		font-size: 6rem;
		margin-top: 3rem;
	}
</style>
