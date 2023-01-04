import HomeView from "@/views/HomeView.vue";
import PostWriteView from "@/views/PostWriteView.vue";
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
    name: "PostView",
    component: () => import("@/views/PostView.vue"),
  },
  {
    path: "/post/write",
    name: "PostWrite",
    component: PostWriteView,
  },
  {
    path: "/post/:id/update",
    name: "PostUpdate",
    component: PostUpdateView,
  },
];

const routerOption: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
};

const router = createRouter(routerOption);

export default router;
