/**
 *@文件描述：接口目录
 *@创建人：f(x)
 *@创建日期：2020/6/2
 */
import axios from 'axios'
import {URI} from "../config"
// 创建 axios 实例
let service = axios.create({
    baseURL:URI,
    headers: {'Content-Type': 'application/json'},
    timeout: 60000
})

// 设置 post、put、delete默认 Content-Type
service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.put['Content-Type'] = 'application/json'
service.defaults.headers.delete['Content-Type'] = 'application/json'

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {

        // 请求发送前进行处理
        return config
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        let {data} = response
        return data
    },
    (error) => {
        let info = {},
            {status, statusText, data} = error.response

        if (!error.response) {
            info = {
                code: 5000,
                msg: 'Network Error'
            }
        } else {
            // 此处整理错误信息格式
            info = {
                code: status,
                data: data,
                msg: statusText
            }
        }
        console.log(info)
    }
)
let VueAxios = new Object();

VueAxios.install = function (Vue) {
    Vue.axios = service;
    window.axios = service;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return service;
            }
        },
        $axios: {
            get() {
                return service;
            }
        }
    });
};
//导出
export default VueAxios;