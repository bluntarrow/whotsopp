import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";
import Status from "./views/Status.vue";

const routes = [
  { path: "/", redirect: "/chat" },
  { path: "/chat", name:'home', component: Home },
  { path: "/status", name:'status', component: Home },
  { path: "/chat/:id", name:'chat', component: Chat },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
