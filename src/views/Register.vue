<script setup>
import Register from "../components/Register.vue";
import shrinersLogo from "../assets/logos/shriners.png";
import hrisLogos from "../assets/logos/hrisED.png";

const shrinerLogo = shrinersLogo;
const hrisLogo = hrisLogos;
</script>

<template>
  <div class="login-root">
    <Register :imageSrc="shrinerLogo" :imageSrc2="hrisLogo" />
  </div>
  <!-- <Header />
	<br />
	<Form /> -->
</template>

<style scoped>
.login-root {
  background: oklch(98.2% 0.018 155.826);
  min-height: 100vh; /* or 100% if html/body/#app are 100% */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
