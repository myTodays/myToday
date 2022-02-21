import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
            //扫雷游戏
            {
                path: "/saolei",
                component: () =>
                    import("@/views/likui/pages/saolei/saolei.vue"),
                meta: { title: "扫雷游戏" },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
