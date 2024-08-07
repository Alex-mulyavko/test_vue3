import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: 'AppLayoutHome',
    },
  },
  {
    path: '/blank',
    name: 'Blank',
    component: () => import('@/views/Blank.vue'),
    meta: {
      layout: 'AppLayoutBlank',
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue'),
    meta: {
      layout: 'AppLayoutProducts',
    },
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
