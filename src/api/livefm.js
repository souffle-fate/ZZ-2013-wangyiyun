import { post } from "../utils/request";

//获取推荐电台
export const reqLiveFM = () => post("/personalized/djprogram")

//电台 - 推荐类型
// export const reqLiveFM = () => post("/dj/category/recommend")