import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";

const routes = [{ path: "/", name: "HomePage", component: HomePage }];

const router = createRouter({
  // replace with this when run npm run build
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
