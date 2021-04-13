import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showTabbar: true, //不显示底部导航
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      showTabbar: true, //不显示底部导航
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      showTabbar: true, //不显示底部导航
    }
  },
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
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      showTabbar: true, //不显示底部导航
    }
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
    meta: {
      showTabbar: true, //不显示底部导航
    }
  },
  // MusicList
  {
    path: "/musiclist",
    name: "MusicList",
    component: () => import("../views/MusicList.vue"),
    meta: {
      showTabbar: true, //不显示底部导航
    }
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
    path: "/birthday",
    name: "Birthday",
    component: () => import('../views/update/birthday/index.vue'),
    meta: {
      showTabbar: true, //不显示底部导航
    },
  },
  {
    path: "/city",
    name: "City",
    component: () => import('../views/update/city/index.vue'),
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
