import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";
import Status from "./views/Status.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";

const routes = [
  { path: "/", redirect: "/chat" },
  { path: "/chat", name:'home', component: Home },
  { path: "/status", name:'status', component: Home },
  { path: "/login", name:'login', component: Login},
  { path: "/signup", name:'signup', component: Signup},
  { path: "/chat/:id", name:'chat', component: Chat },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
