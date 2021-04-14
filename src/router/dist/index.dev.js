"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("../views/Home/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [// 首页Home
{
  path: '/',
  name: "Home",
  redirect: '/home',
  meta: {
    showTabbar: true // false删除底部导航

  }
}, {
  path: "/home",
  name: "Home",
  component: _index["default"],
  meta: {
    showTabbar: true // false删除底部导航

  },
  children: [{
    path: "fm",
    name: "Fm",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../views/Home/fm"));
      });
    }
  }]
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
  path: "/list",
  name: "List",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/list/List.vue"));
    });
  },
  redirect: "/list/music",
  meta: {
    showTabbar: true //不显示底部导航

  },
  children: [{
    path: "music",
    name: "Music",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/list/music/music'));
      });
    },
    meta: {
      showTabbar: true //不显示底部导航

    }
  }, {
    path: "dongtai",
    name: "Dongtai",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/list/dongtai/dongtai'));
      });
    },
    meta: {
      showTabbar: true //不显示底部导航

    }
  }, {
    path: "mine",
    name: "Mine",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/list/mine/mine'));
      });
    },
    meta: {
      showTabbar: true //不显示底部导航

    }
  }]
}, {
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

  },
  children: [{
    path: "hottopic",
    name: 'HotTopic',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../views/YunCun/Yun/HotTopic.vue"));
      });
    },
    meta: {
      showTabbar: true // false删除底部导航

    }
  }, {
    path: "mv",
    name: 'Mv',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../views/YunCun/Yun/Mv.vue"));
      });
    },
    meta: {
      showTabbar: true // false删除底部导航

    }
  }]
}, {
  path: "/mvid/:id",
  name: "Mvid",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/YunCun/Yun/Mvid'));
    });
  },
  meta: {
    showTabbar: false //不显示底部导航

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
}, // 第二个模块  排行榜
{
  path: "/rank",
  name: "Rank",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Rank"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, //音乐列表模块
{
  path: "/musiclist/:id",
  name: "MusicList",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Home/MusicList.vue"));
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
  path: "/enter",
  name: "Enter",
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
  path: "/toplist",
  name: "Toplist",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Toplist"));
    });
  } // meta:{
  //   showTabbar:false,
  // }

}, {
  path: "/dailyrec",
  name: "Dailyrec",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Dailyrec"));
    });
  }
}, {
  path: '/listdetail/:id',
  name: 'Listdetail',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Home/Listdetail'));
    });
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
}, {
  path: "/gedan/:Id",
  name: "Gedan",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/gedan/index.vue"));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/updateuser/:Id",
  name: "Updateuser",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/updateuser/index.vue"));
    });
  },
  meta: {
    showTabbar: false //不显示底部导航

  }
}, {
  path: "/backimg",
  name: "Backimg",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/backimg/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/birthday",
  name: "Birthday",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/birthday/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/city",
  name: "City",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/city/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/daxue",
  name: "Daxue",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/daxue/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/headerimg",
  name: "Headerimg",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/headerimg/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/myshow",
  name: "Myshow",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/myshow/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/qianming",
  name: "ianming",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/qianming/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/zhanghao",
  name: "Zhanghao",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/zhanghao/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}, {
  path: "/nickname",
  name: "Nickname",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/update/nickname/index.vue'));
    });
  },
  meta: {
    showTabbar: true //不显示底部导航

  }
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;