import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const BASE_URL : string = import.meta.env.BASE_URL;
const routes: Array<RouteRecordRaw> = [
    { path: "/", redirect: "/index"},
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import("@/views/page-index/index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes,
});
 
export default router;