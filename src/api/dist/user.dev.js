"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqListsZueijin = exports.reqList = exports.reqLogin = void 0;

var _request = require("../utils/request");

// import { post } from "../utils/request";
// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);
// 登录
var reqLogin = function reqLogin(aa) {
  return (0, _request.get)("/login/cellphone" + aa);
}; // 获取用户详情


exports.reqLogin = reqLogin;

var reqList = function reqList(uid) {
  return (0, _request.get)("/user/detail" + uid);
}; // 获取用户播放记录


exports.reqList = reqList;

var reqListsZueijin = function reqListsZueijin(uid) {
  return (0, _request.get)("/user/record" + uid);
};

exports.reqListsZueijin = reqListsZueijin;