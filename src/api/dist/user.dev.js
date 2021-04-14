"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqUserMV = exports.reqUserBofangJL = exports.reqUserDiantaiYX = exports.reqUserYonghuDiantai = exports.reqUserPer = exports.reqUserZueijin = exports.reqUser = exports.reqLogin = exports.reqUpdate = exports.reqHistory = exports.reqEvent = void 0;

var _request = require("../utils/request");

// import { post } from "../utils/request";
// 注册
// export const reqRegister = (data) => post("/api/v1/auth/reg", data);
// 登录
// export const reqLogin = (data) => post("/login/cellphone", data);
// 获取用户动态/user/event
var reqEvent = function reqEvent(data) {
  return (0, _request.get)("/user/event", data);
}; // 获取用户历史评论


exports.reqEvent = reqEvent;

var reqHistory = function reqHistory(data) {
  return (0, _request.get)("/user/comment/history", data);
}; // 更新用户信息


exports.reqHistory = reqHistory;

var reqUpdate = function reqUpdate(data) {
  return (0, _request.get)("/user/update", data);
};

exports.reqUpdate = reqUpdate;

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
}; //收藏的MV列表


exports.reqUserBofangJL = reqUserBofangJL;

var reqUserMV = function reqUserMV() {
  return (0, _request.get)("/mv/sublist");
}; //收藏的歌手列表
// 收藏视频
//专栏


exports.reqUserMV = reqUserMV;