"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqUserBofangJL = exports.reqUserDiantaiYX = exports.reqUserYonghuDiantai = exports.reqUserPer = exports.reqUserZueijin = exports.reqUser = exports.reqLogin = void 0;

var _request = require("../utils/request");

// import { post } from "../utils/request";
// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);
// 登录
var reqLogin = function reqLogin(aa) {
  return (0, _request.get)("/login/cellphone" + aa);
}; // 获取用户详情


exports.reqLogin = reqLogin;

var reqUser = function reqUser(uid) {
  return (0, _request.get)("/user/detail" + uid);
}; // 获取用户播放记录


exports.reqUser = reqUser;

var reqUserZueijin = function reqUserZueijin(uid) {
  return (0, _request.get)("/user/record" + uid);
}; //推荐歌单


exports.reqUserZueijin = reqUserZueijin;

var reqUserPer = function reqUserPer(a) {
  return (0, _request.get)("/personalized?limit=" + a);
}; //获取用户电台


exports.reqUserPer = reqUserPer;

var reqUserYonghuDiantai = function reqUserYonghuDiantai() {
  return (0, _request.get)("/dj/sublist");
}; // 电台 - 今日优选


exports.reqUserYonghuDiantai = reqUserYonghuDiantai;

var reqUserDiantaiYX = function reqUserDiantaiYX() {
  return (0, _request.get)("/dj/today/perfered");
}; // 获取用户播放记录


exports.reqUserDiantaiYX = reqUserDiantaiYX;

var reqUserBofangJL = function reqUserBofangJL(a) {
  return (0, _request.get)("/user/record?uid=" + a);
};

exports.reqUserBofangJL = reqUserBofangJL;