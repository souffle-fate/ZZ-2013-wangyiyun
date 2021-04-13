import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";

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
    component: () => import("../views/List.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
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
  {
    path: "/toplist",
    name: "Toplist",
    component: () => import("../views/Toplist"),
    // meta:{
    //   showTabbar:false,
    // }
  },
  {
    path: "/dailyrec",
    name: "Dailyrec",
    component: () => import("../views/Dailyrec"),

  },
  {
    path: '/listdetail/:id',
    name: 'Listdetail',
    component: () => import('../views/Home/Listdetail')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
