/**
 *@文件描述：接口目录
 *@创建人：f(x)
 *@创建日期：2020/6/2
 */
import {request} from "../util";

const test = request("/test", {}, "GET")

export default {
    test
}