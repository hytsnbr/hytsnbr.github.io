import NotFoundPage from "@/pages/NotFoundPage.vue";
import TopPages from "@/pages/TopPages.vue";
import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "top",
    component: TopPages,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFoundPage,
  },
];

export const createRouter = (type: "memory" | "history") => {
  const history = type === "memory" ? VueRouter.createMemoryHistory() : VueRouter.createWebHistory();
  return VueRouter.createRouter({ history, routes });
};
