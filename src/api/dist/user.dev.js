"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqLogin = void 0;

var _request = require("../utils/request");

// import { post } from "../utils/request";
// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);
// 登录
// export const reqLogin = (data) => post("/login/cellphone", data);
var reqLogin = function reqLogin(aa) {
  return (0, _request.get)("/login/cellphone" + aa);
};

exports.reqLogin = reqLogin;