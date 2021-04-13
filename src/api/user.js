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


