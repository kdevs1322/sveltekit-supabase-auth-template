<script lang="ts">
	export let href: string = '';
</script>

<div
	class="icon"
	style="
background-image: url({href});
background-size: cover;
background-position: center center;
"
/>

<style>
	.icon {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: white;
	}
</style>
