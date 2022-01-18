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

// 引入组件
import {tplConfig} from "./components/config";
tplConfig(app);
// console.log('publicPath',process.env)

app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(store);
app.use(router);
app.mount("#app");

document.title = "myToday";
