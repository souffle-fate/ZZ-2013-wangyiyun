import { post } from "../utils/request";

//获取推荐歌单
export const reqLiveFM = () => post("/personalized/djprogram")