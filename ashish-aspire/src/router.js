import { createRouter, createWebHistory } from "vue-router";
import CardManagement from "./module/cardManagement.vue"
const routes = [
    {
        path: "/",
        component: CardManagement,
        name: "CardManagement",
      }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;