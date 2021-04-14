import { post } from "../utils/request";

//获取最新专辑
export const reqNewestAl = () => post("/album/newest")


//获取歌单详情
// export const reqListDetail = (data) => get("/playlist/detail", data)

