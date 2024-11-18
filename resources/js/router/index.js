import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
const routes = [
    {
        path: '/',
        component: MainLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/Home.vue'),
            },
            {
                path: 'meeteng/create',
                name: 'meetingCreate',
                component: () => import('@/views/MeetingCreate.vue'),
            },
            {
                path: 'documents/list/:id',
                name: 'documentsList',
                component: () => import('@/views/DocumentsList.vue'),
            },
        ],
    },
    {
        path: '/login',
        component: AuthLayout,
        meta: { requiresAuth: false },
        children: [],
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
