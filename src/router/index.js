import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import PDS from "../components/PDSPage1.vue";

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
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/pds",
      component: PDS,
    },
  ],
});

export default router;
