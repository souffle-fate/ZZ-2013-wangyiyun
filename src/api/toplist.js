import { get } from "../utils/request";

//可获取所有榜单
export const reqToplist = () => get("/toplist")
// 获取榜单内容摘要
export const reqToplistInfo = () => get('/toplist/detail')






