/*
 * @Author: LikSeven
 * @Date: 2023-05-30 09:35:40
 * @LastEditTime: 2023-06-05 16:28:58
 * @LastEditors: LikSeven
 * @Description: 
 * @FilePath: \vue3-admin\src\router\index.ts
 */
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
    }, 
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import("@/views/login/index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes,
});
 
export default router;