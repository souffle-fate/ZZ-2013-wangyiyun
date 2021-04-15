import { get, post } from "../utils/request";

//获取最新专辑
export const reqNewestAl = () => post("/album/newest")


//获取专辑详情
export const reqAlDetail = (data) => get("/playlist/detail", data)

