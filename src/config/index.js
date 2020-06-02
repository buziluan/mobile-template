/**
 *@文件描述：配置文件
 *@创建人：f(x)
 *@创建日期：2020/6/2
 */
/**
 * 请求路径
 * @type {string}
 */
const URI = process.env.NODE_ENV === 'production' ? '' : ""

export default {
    URI
}
