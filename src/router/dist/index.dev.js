"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Home",
  component: _Home["default"],
  meta: {
    showTabbar: true // false删除底部导航

  }
}, {
  path: "/about",
  name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/About.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, {
  path: "/cart",
  name: "Cart",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Cart.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, {
  path: "/list",
  name: "List",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/List.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, {
  path: "/user",
  name: "User",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/User.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, {
  path: "/search",
  name: "Search",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Search.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, // MusicList
{
  path: "/musiclist",
  name: "MusicList",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/MusicList.vue"));
    });
  },
  meta: {
    showTabbar: true // false删除底部导航

  }
}, {
  path: "/login",
  name: "Login",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Login.vue"));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, {
  path: "/enter",
  name: "Enter",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/Enter"));
    });
  },
  meta: {
    showTabbar: false // false删除底部导航

  }
}, {
  path: '/diantai',
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
  path: '/bendi',
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
  path: '/shocang',
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
  path: '/xiazai',
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
  path: '/zueijin',
  name: "Zueijin",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/User/zueijin'));
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