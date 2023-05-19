<script lang="ts">
	export let data: import('./$types').PageData;

	$: ({ session } = data);
</script>

{#if session}
	<h1>{session.user.user_metadata.name}'s protected route</h1>
{/if}
