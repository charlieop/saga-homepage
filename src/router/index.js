import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  {
    path: "/acknowledgment",
    name: "AcknowledgementsPage",
    component: () => import("@/views/AcknowledgmentsPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  // replace with this when run npm run build
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
