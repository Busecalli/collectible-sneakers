import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/landing",
    component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "/landing",
        name: "landing",
        component: () => import("../views/Landing.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
