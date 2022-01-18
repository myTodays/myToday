import { createRouter, createWebHistory } from "vue-router";
const routerHistorys = createWebHistory();

const router = createRouter({
    history: routerHistorys,
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
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
    ],
});

export default router;
