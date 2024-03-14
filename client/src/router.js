import { createRouter, createWebHistory } from 'vue-router';
import EasyFunction from './components/EasyFunction.vue';
import Fibo from './components/Fibo.vue';

const routes = [
  {
    path: '/easy-function',
    name: 'EasyFunction',
    component: EasyFunction,
  },
  {
    path: '/fibo',
    name: 'Fibo',
    component: Fibo,
  }
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
