import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import PDS from "../components/PDSPage1.vue";
import Register from "../views/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/pds",
      component: PDS,
    },
    {
      path: "/register",
      component: Register,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");

  // If not logged in, force login
  if (!token && to.path !== "/login") {
    return next("/login");
  }

  next();
});

export default router;
