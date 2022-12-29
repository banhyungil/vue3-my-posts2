// typescript 3.8 import 문법, type import, typescript가 compile하며 runtime에서 제거된다.
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory, type RouterOptions } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const routerOption: RouterOptions = {
  history: createWebHistory(),
  routes,
};

const router = createRouter(routerOption);

export default router;
