import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Nprogress from 'nprogress';

Nprogress.configure({ parent: '#app' });

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: '',
    component: () => import('../views/admin/Index.vue'),
    children: [
      {
        path: '/',
        name: 'Admin.Index',
        component: () => import('../views/admin/Dashboard.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  Nprogress.start();

  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
