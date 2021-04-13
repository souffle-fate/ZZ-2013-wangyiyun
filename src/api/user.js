// import { post } from "../utils/request";
import { get } from "../utils/request";

// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);

// 登录
export const reqLogin = (aa) => get("/login/cellphone" + aa);
// 获取用户详情
export const reqUser = (uid) => get("/user/detail" + uid);
// 获取用户播放记录
export const reqUserZueijin = (uid) => get("/user/record" + uid);
//推荐歌单
export const reqUserPer = (a) => get("/personalized?limit=" + a);
//获取用户电台
export const reqUserYonghuDiantai = () => get("/dj/sublist");
// 电台 - 今日优选
export const reqUserDiantaiYX = () => get("/dj/today/perfered");
// 获取用户播放记录
export const reqUserBofangJL = (a) => get("/user/record?uid=" + a);