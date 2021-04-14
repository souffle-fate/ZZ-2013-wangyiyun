// import { post } from "../utils/request";
import { get } from "../utils/request";

// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);

// 登录
// export const reqLogin = (data) => post("/login/cellphone", data);
// 获取用户动态/user/event
export const reqEvent = (data) => get("/user/event", data);
// 获取用户历史评论
export const reqHistory = (data) => get("/user/comment/history", data);
// 更新用户信息
export const reqUpdate = (data) => get("/user/update", data);


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
// 电台详情
export const reqUserprogram = (data) => get("/dj/program", data);

