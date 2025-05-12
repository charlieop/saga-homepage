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
    path: "/appreciation/volunteers",
    name: "VolunteersApplicationPage",
    component: () => import("@/views/VolunteerApplicationFinished.vue"),
    // path had been updated for the finished application page
  },
  {
    path: "/appreciation/volunteers/upload-writing-task",
    name: "VolunteersUploadWritingTaskPage",
    component: () => import("@/views/VolunteersUploadWritingTaskPage.vue"),
  },
  {
    path: "/gifts-exchange",
    name: "GiftsExchangePage",
    component: () => import("@/views/GiftsExchangePage.vue"),
  },
  {
    path: "/partnerliststar/partnerActivities",
    name: "ActivitiesMobileVersion",
    component: () => import("@/views/ActivitiesMobileVersion.vue"),
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
