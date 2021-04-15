"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqDailyRec = void 0;

var _request = require("../utils/request");

//获得每日推荐歌单 ( 需要登录 )
var reqDailyRec = function reqDailyRec() {
  return (0, _request.get)("/recommend/resource");
};

exports.reqDailyRec = reqDailyRec;