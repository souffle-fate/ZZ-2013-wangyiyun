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
      showTabbar: true,
    },
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
      showTabbar: true,
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
    meta: {
      showTabbar: true,
    },
  },
  // MusicList
  {
    path: "/musiclist",
    name: "MusicList",
    component: () => import("../views/MusicList.vue"),
    meta: {
      showTabbar: true,
    },
  },
  // MusicComment歌曲评论
  {
    path: "/musiccomment",
    name: "MusicComment",
    component: () => import("../views/MusicComment.vue"),
    meta: {
      showTabbar: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
