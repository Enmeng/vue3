import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/provide',
        name: 'provide',
        component: () => import('../views/provide.vue')
    }
];

export const router = createRouter({
   history: createWebHistory(),
   routes,
})