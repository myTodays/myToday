import axios from "axios";
import { ElMessage } from "element-plus";
const service = axios.create({
    // 请求接口地址
    baseURL: "http://127.0.0.1:8888",
    // baseURL: "https://www.melikui.com",
    // 设置延迟时间
    timeout: 3000,
});

service.interceptors.request.use(
    (config: any) => {
        console.log("请求头:", config);
        config.headers.options = "likui";
        return config;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);

service.interceptors.response.use(
    (res) => {
        console.log("响应结果:", res);
        if (res.status === 200) {
            return res.data;
        } else {
            ElMessage.error(res.status.toString());
        }
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);
export default service;
