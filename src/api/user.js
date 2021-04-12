// import { post } from "../utils/request";
import { get } from "../utils/request";

// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);

// 登录
// export const reqLogin = (data) => post("/login/cellphone", data);
export const reqLogin = (aa) => get("/login/cellphone" + aa);