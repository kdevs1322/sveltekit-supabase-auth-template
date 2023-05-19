<script lang="ts">
	export let data: import('./$types').PageData;

	$: ({ session } = data);
	$: console.log(session?.user);
</script>

{#if session}
	<h1>
		{session.user.user_metadata.name || session.user.user_metadata.user_name}'s protected route
	</h1>
{/if}
