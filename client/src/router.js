import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import EasyFunction from "./views/EasyFunction.vue";
import Fibo from "./views/Fibo.vue";
import QuickSort from "./views/QuickSort.vue";

//to do: add unit tests
//to do: easyfunction - now sum of 2 ints but it could summarize 2 decimals 
//to do: add css to frontend

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
