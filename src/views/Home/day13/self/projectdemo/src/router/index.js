import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
            meta: { showtab: true }
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../views/home'),
            meta: { showtab: true }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/login'),
            meta: { showtab: false }
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/register'),
            meta: { showtab: false }
        },
        {
            path: '/category',
            name: 'Category',
            component: () => import('../views/category'),
            meta: { showtab: true }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('../views/cart'),
            meta: { showtab: true }
        },
        {
            path: '/mine',
            name: 'Mine',
            component: () => import('../views/mine'),
            meta: { showtab: true }
        },
        // 加插槽可返回
        {
            path: '/detail/:id',
            name: 'Detail',
            component: () => import('../views/detail'),
            meta: { showtab: false }
        },
    ]
})

export default router