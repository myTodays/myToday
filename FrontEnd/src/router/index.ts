import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/",
        component: () => import("@/layout/home.vue"),
        meta: { title: "首页" },
        children: [
            {
                path: "/login",
                component: () => import("@/layout/login.vue"),
                meta: { title: "登录" },
            },
        ],
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
