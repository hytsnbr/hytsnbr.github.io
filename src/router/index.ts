import NotFoundPage from "@/pages/NotFoundPage.vue";
import TopPage from "@/pages/TopPage.vue";
import TestPage from "@/pages/TestPage.vue";

import * as VueRouter from "vue-router";

const routes = [
  // Common
  {
    path: "/",
    name: "top",
    component: TopPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFoundPage,
  },
  // Custom
  {
    path: "/test",
    name: "test-page",
    component: TestPage,
  },
];

export const createRouter = (type: "memory" | "history") => {
  const history = type === "memory" ? VueRouter.createMemoryHistory() : VueRouter.createWebHistory();
  return VueRouter.createRouter({ history, routes });
};
