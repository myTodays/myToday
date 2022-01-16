import { createApp } from "vue";
import App from "./App.vue";

// 引入element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 引入数据仓库
import store from "./store/index";
// 引入路由
import router from "./routers/index";

const app = createApp(App);

import vMofang from "@/components/Plugins/v-mofang.vue";
import vLoading from "@/components/Plugins/v-loading.vue";
import vLogo from "@/components/common/v-logo.vue";
app.component("v-mofang", vMofang);
app.component("v-loading", vLoading);
app.component("v-logo", vLogo);

app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");

document.title = "myCenter";
