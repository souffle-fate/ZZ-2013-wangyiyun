// import { post } from "../utils/request";
import { get } from "../utils/request";

// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);

// 登录
export const reqLogin = (aa) => get("/login/cellphone" + aa);




// 获取用户详情
export const reqList = (uid) => get("/user/detail" + uid);
// 获取用户播放记录
export const reqListsZueijin = (uid) => get("/user/record" + uid);