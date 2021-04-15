import { post } from "../utils/request";

//获得每日推荐歌单 ( 需要登录 )
export const reqDailyRec = () => post("/recommend/resource");