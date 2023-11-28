import axios from "axios";


const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api',
});

myAxios.defaults.withCredentials = true;

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    console.log('要发送请求前发送了+', config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    console.log('收到后端响应+', response)
    // 对响应数据做点什么
    //未登录则跳转至登录页
    // if (response?.data?.code === 40100) {
    //     const redirectUrl = window.location.href;
    //     window.location.href = `/user/login?redirect=${redirectUrl}`;
    // }

    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;