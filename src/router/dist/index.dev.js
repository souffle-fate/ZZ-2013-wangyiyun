"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [// 首页Home
{
  path: "/",
  name: "Home",
  component: _Home["default"],
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // 音乐详情列表页面
{
  path: "/musiclist",
  name: "MusicList",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Home/MusicList.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // 音乐搜索页面
{
  path: "/search",
  name: "Search",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Home/Search.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // 歌曲详情页面
{
  path: "/detail",
  name: "Detail",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Geqxiangqing/Detail.vue"));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, // 歌曲评论页面
{
  path: "/musiccomment",
  name: "Musiccomment",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Geqxiangqing/MusicComment.vue"));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, // 第四个模块 云村页面
{
  path: "/yuncun/index",
  name: "Index",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/YunCun/index.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // 第五个模块，个人中心
{
  path: "/user",
  name: "User",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Mine/User.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // 第三个模块，个人中心
{
  path: "/list",
  name: "List",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/MypPaylist/List.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // 第二个模块  排行榜
{
  path: "/paihangbang/index",
  name: "/Paihangbang/Index",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Paihangbang/index.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // Enter
// 登录页面
{
  path: "/login",
  name: "Login",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Enter/Login.vue"));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, ///enter/index
{
  path: "/enter/index",
  name: "index",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Enter/index.vue"));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, {
  path: "/diantai",
  name: "Diantai",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/User/diantai'));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, {
  path: "/bendi",
  name: "Bendi",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/User/bendi'));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, {
  path: "/shocang",
  name: "Shocang",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/User/shocang'));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, {
  path: "/xiazai",
  name: "Xiazai",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/User/xiazai'));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, {
  path: "/zueijin",
  name: "Zueijin",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/User/zueijin'));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, // 音乐播放的组件
{
  path: "/musicplay",
  name: "MusicPlay",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/MusicPlay"));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;