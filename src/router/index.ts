import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";
import PostUpdateView from "@/views/PostUpdateView.vue";
// typescript 3.8 import 문법, type import, typescript가 compile하며 runtime에서 제거된다.
import { createRouter, createWebHistory, type RouterOptions } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/post/:id",
    component: PostView,
  },
  {
    path: "/post/:id/update",
    component: PostUpdateView,
  },
];

const routerOption: RouterOptions = {
  history: createWebHistory(),
  routes,
};

const router = createRouter(routerOption);

export default router;
