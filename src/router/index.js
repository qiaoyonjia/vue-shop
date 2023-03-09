import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue"

// 解决重复点击同一个路由报错问题
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function (location) {
//   return originalPush.call(this, location).catch(err => { })
// };

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/list',
    name: 'List',
    component: () => import("@/views/List.vue")
  }, 
  {
    path: '/cart',
    name: 'Cart',
    component: () => import("@/views/Cart.vue")
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import("@/views/Archive.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
