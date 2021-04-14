import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  // 首页Home
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showTabbar: true, //不显示底部导航
    }
  },
  // 音乐详情列表页面
  {
    path: "/musiclist",
    name: "MusicList",
    component: () => import("../views/Home/MusicList.vue"),
    meta: {
      showTabbar: true, // false删除底部导航
    },
  },
  // 音乐搜索页面
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Home/Search.vue"),
    meta: {
      showTabbar: true, // false删除底部导航
    },
  },

  // 歌曲详情页面
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/Geqxiangqing/Detail.vue"),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },
  // 歌曲评论页面
  {
    path: "/list",
    name: "List",
    component: () => import("../views/list/List.vue"),
    redirect: "/list/music",
    meta: {
      showTabbar: true, //不显示底部导航
    },
    children: [
      {
        path: "music",
        name: "Music",
        component: () => import('../views/list/music/music'),
        meta: {
          showTabbar: true, //不显示底部导航
        },
      },
      {
        path: "dongtai",
        name: "Dongtai",
        component: () => import('../views/list/dongtai/dongtai'),
        meta: {
          showTabbar: true, //不显示底部导航
        },
      },
      {
        path: "mine",
        name: "Mine",
        component: () => import('../views/list/mine/mine'),
        meta: {
          showTabbar: true, //不显示底部导航
        },
      },
    ]
  },

  {
    path: "/musiccomment",
    name: "Musiccomment",
    component: () => import("../views/Geqxiangqing/MusicComment.vue"),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },
  // 第四个模块 云村页面
  {
    path: "/yuncun/index",
    name: "Index",
    component: () => import("../views/YunCun/index.vue"),
    meta: {
      showTabbar: true, // false删除底部导航
    },
  },
  // 第五个模块，个人中心
  {
    path: "/user",
    name: "User",
    component: () => import("../views/Mine/User.vue"),
    meta: {
      showTabbar: true, // false删除底部导航
    },
  },

  // 第三个模块，个人中心
  {
    path: "/list",
    name: "List",
    component: () => import("../views/MypPaylist/List.vue"),
    meta: {
      showTabbar: true, // false删除底部导航
    },
  },

  // 第二个模块  排行榜
  {
    path: "/paihangbang/index",
    name: "/Paihangbang/Index",
    component: () => import("../views/Paihangbang/index.vue"),
    meta: {
      showTabbar: true, // false删除底部导航
    },
  },

  // Enter
  // 登录页面
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Enter/Login.vue"),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },

  ///enter/index
  {
    path: "/enter/index",
    name: "index",
    component: () => import("../views/Enter/index.vue"),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },

  {
    path: "/diantai",
    name: "Diantai",
    component: () => import('../views/User/diantai'),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },
  {
    path: "/bendi",
    name: "Bendi",
    component: () => import('../views/User/bendi'),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },
  {
    path: "/shocang",
    name: "Shocang",
    component: () => import('../views/User/shocang'),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },
  {
    path: "/xiazai",
    name: "Xiazai",
    component: () => import('../views/User/xiazai'),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },
  {
    path: "/zueijin",
    name: "Zueijin",
    component: () => import('../views/User/zueijin'),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },

  // 音乐播放的组件
  {
    path: "/musicplay",
    name: "MusicPlay",
    component: () => import("../views/MusicPlay"),
    meta: {
      showTabbar: false, // false删除底部导航
    },
  },
  {
    path: "/gedan/:Id",
    name: "Gedan",
    component: () => import("../views/gedan/index.vue"),
    meta: {
      showTabbar: true, //不显示底部导航
    }
  },
  {
    path: "/updateuser/:Id",
    name: "Updateuser",
    component: () => import("../views/updateuser/index.vue"),
    meta: {
      showTabbar: false, //不显示底部导航
    },
  },
  {
    path: "/backimg",
    name: "Backimg",
    component: () => import('../views/update/backimg/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },
  {
    path: "/daxue",
    name: "Daxue",
    component: () => import('../views/update/daxue/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },
  {
    path: "/headerimg",
    name: "Headerimg",
    component: () => import('../views/update/headerimg/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },
  {
    path: "/myshow",
    name: "Myshow",
    component: () => import('../views/update/myshow/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },
  {
    path: "/qianming",
    name: "ianming",
    component: () => import('../views/update/qianming/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },
  {
    path: "/zhanghao",
    name: "Zhanghao",
    component: () => import('../views/update/zhanghao/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },
  {
    path: "/nickname",
    name: "Nickname",
    component: () => import('../views/update/nickname/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },

];

const router = new VueRouter({
  routes,
});

export default router;
