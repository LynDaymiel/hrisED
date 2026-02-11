<script setup>
	import Login from "./Login.vue";
</script>

<template>
	<div class="login-root">
		<Login />
	</div>
	<!-- <Header />
	<br />
	<Form /> -->
</template>

<style scoped>
	.login-root {
		background: oklch(97.9% 0.021 166.113);
		min-height: 100vh; /* or 100% if html/body/#app are 100% */
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
