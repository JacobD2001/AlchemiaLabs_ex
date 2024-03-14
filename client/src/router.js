import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import EasyFunction from "./views/EasyFunction.vue";
import Fibo from "./views/Fibo.vue";
import QuickSort from "./views/QuickSort.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: '/home', 
    name: 'Home',
    component: Home, 
  },
  {
    path: "/easyFunction",
    name: "EasyFunction",
    component: EasyFunction,
  },
  {
    path: "/fibo",
    name: "Fibo",
    component: Fibo,
  },
  {
    path: "/quickSort",
    name: "QuickSort",
    component: QuickSort,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
