import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name:'home', component: Home },
  { path: "/chat/:id", name:'chat', component: Chat },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
