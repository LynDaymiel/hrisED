import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Login from "./components/Login.vue";
import LoginView from "./components/LoginView.vue";
import HomeView from "./components/HomeView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: LoginView,
		},
		{
			path: "/home",
			component: HomeView,
		},
	],
});

createApp(App).use(router).mount("#app");
