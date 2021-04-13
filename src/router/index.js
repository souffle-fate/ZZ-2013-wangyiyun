import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/list/List.vue"),
    children: [
      {
        path: "music",
        name: "Music",
        component: () => import('../views/list/music/music')
      },
      {
        path: "dongtai",
        name: "Dongtai",
        component: () => import('../views/list/dongtai/dongtai')
      },
      {
        path: "mine",
        name: "Mine",
        component: () => import('../views/list/mine/mine')
      },
    ]
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      showTabbar: false, //不显示底部导航
    }
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  // MusicList
  {
    path: "/musiclist",
    name: "MusicList",
    component: () => import("../views/MusicList.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
