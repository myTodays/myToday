import { createRouter, createWebHistory } from "vue-router";
const routerHistorys = createWebHistory();

const router = createRouter({
    history: routerHistorys,
    routes: [
        {
            path: "/",
            component: () => import("@/layout/login.vue"),
        },
        //   {
        //     path: '/login',
        //     component: ()=>import('@/views/login')
        //   }
    ],
});

export default router;
