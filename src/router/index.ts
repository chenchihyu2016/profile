import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/api',
        name: 'api',
        component: () => import('@/views/User.vue')
    },
    {
        path: '/',
        name: 'profile',
        component: () => import('@/views/Profile.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: () => import('@/views/Error.vue')
    },
    {
        path: '/css',
        name: 'css',
        component: () => import('@/views/Animation.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
