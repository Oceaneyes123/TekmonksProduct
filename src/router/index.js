import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import API400 from '../views/API400'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/api400",
    name: "API400",
    component: () =>
      import("../views/API400.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
