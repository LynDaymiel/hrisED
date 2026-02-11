<script setup>
	import Header from "./Header.vue";
	import Form from "./Form.vue";
</script>

<template>
	<Header />
	<div class="home-view">
		<Form />
	</div>
</template>

<style scoped>
	.home-view {
		background: oklch(98.4% 0.003 247.858);
		min-height: 100vh; /* or 100% if html/body/#app are 100% */
	}
</style>
