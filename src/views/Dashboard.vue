<script setup>
	import Sidebar from "../components/Sidebar.vue";
	import Form from "../components/Form.vue";
	import hrisLogos from "../assets/logos/hrisED.png";
	const hrisLogo = hrisLogos;
</script>

<template>
	<div class="flex min-h-screen bg-gray-50">
		<Sidebar :imageSrc="hrisLogo" />
		<main class="flex-1 p-6 overflow-auto">
			<Form />
		</main>
	</div>
</template>

<style scoped></style>
