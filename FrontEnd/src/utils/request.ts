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
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);
export default service;
