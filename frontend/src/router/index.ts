import HomeView from "@/views/HomeView.vue";
import PostWriteView from "@/views/PostWriteView.vue";
import PostUpdateView from "@/views/PostUpdateView.vue";
import TestView from "@/views/TestView.vue";
import TestView2 from "@/views/TestView2.vue";
// typescript 3.8 import 문법, type import, typescript가 compile하며 runtime에서 제거된다.
import {
  createRouter,
  createWebHistory,
  type RouteParams,
  type RouteRecordRaw,
  type RouterOptions,
} from "vue-router";

import type { Post } from "@/types";

const routes: RouteRecordRaw[] = [
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
  {
    path: "/test",
    name: "Test",
    component: TestView,
  },
  {
    path: "/test2",
    name: "Test2",
    component: TestView2,
    props: true,
  },
];

const routerOption: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
};

const router = createRouter(routerOption);

router.beforeEach((to, from) => {
  console.log("to", to);
  console.log("from", from);
});

export default router;
