import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/test",
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
            // test -- 测试
            {
                path: "/test",
                component: () => import("@/views/test/test.vue"),
                meta: { title: "测试" },
            },
            {
                path: "/target",
                component: () => import("@/views/target/target.vue"),
                meta: { title: "目标" },
            },
            // 扫雷游戏
            {
                path: "/saolei",
                component: () =>
                    import("@/views/game/saolei.vue"),
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
