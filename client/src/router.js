import { createRouter, createWebHistory } from 'vue-router';
import EasyFunction from './components/EasyFunction.vue';
import Fibo from './components/Fibo.vue';
import QuickSort from './components/QuickSort.vue';

//to do: add error handling on front end
//to do: add css to frontend
//to do: test all functions
//to do: check structure of the project(remember about cors)
//to do: add unit tests

const routes = [
  {
    path: '/easyFunction',
    name: 'EasyFunction',
    component: EasyFunction,
  },
  {
    path: '/fibo',
    name: 'Fibo',
    component: Fibo,
  },
  {
    path: '/quickSort',
    name: 'QuickSort',
    component: QuickSort,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
