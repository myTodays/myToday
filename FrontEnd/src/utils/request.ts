import axios from "axios";

const service = axios.create({
    // 请求接口地址
    //   baseURL: 'http://127.0.0.1:8888',
    baseURL: "https://www.melikui.com",
    // 设置延迟时间
    timeout: 3000,
});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);

service.interceptors.response.use(
    (res) => {
        if (res.status === 200) {
            return res.data;
        } else {
            return Promise.reject();
        }
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);
export default service;
