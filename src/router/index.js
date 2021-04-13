import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name: "Home",
    redirect:'/home',
    meta: {
      showTabbar: true  // false删除底部导航
  },
},
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      showTabbar: true  // false删除底部导航
    },
    children:[
      {
        path:"fm",
        name:"Fm",
        component:() => import("../views/home/fm"),
      },
    ]
    
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
      showTabbar: true  // false删除底部导航
    }
  },
  {
    path: "/cart/",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      showTabbar: true  // false删除底部导航
    }
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List.vue"),
    meta: {
      showTabbar: true  // false删除底部导航
    }
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      showTabbar: true  // false删除底部导航
    }
  },
  {
    path: "/search/",
    name: "Search",
    component: () => import("../views/Search.vue"),
    meta: {
      showTabbar: true  // false删除底部导航
    }
  },

  // MusicList
  {
    path: "/musiclist/:id",
    name: "MusicList",
    component: () => import("../views/MusicList.vue"),
    meta: {
      showTabbar: true  // false删除底部导航
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      showTabbar: false  // false删除底部导航
    }
  },
  {
    path: "/enter",
    name: "Enter",
    component: () => import("../views/Enter"),
    meta: {
      showTabbar: false  // false删除底部导航
    }
  },
];

const router = new VueRouter({
  routes
});

export default router;
