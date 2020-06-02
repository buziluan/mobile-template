/**
 *@文件描述：工具类
 *@创建人：f(x)
 *@创建日期：2020/6/2
 */
import clone from "./clone";
import Vue from "vue"

/**
 * 深度拷贝
 * @param object  需要拷贝的对象
 * @returns {any | Function | null} 返回一个新对象
 */
export const deepCopy = (object) => clone(object)


/**
 * 网络请求
 * @param url 地址
 * @param data  参数
 * @param type  请求方式
 * @param config 配置
 * @returns {Promise<*|AxiosInstance>}  返回一个promise对象
 */
export const request = async (url = "", data = {}, type = "GET", config = {}) => {
    type = type.toUpperCase();
    if (type == "GET") {
        return Vue.prototype.$axios.get(url, {
            params: data,
            ...config
        });
    } else if (type == "POST") {
        return Vue.prototype.$axios.post(url, data, config);
    }
}