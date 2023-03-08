import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import("../views/List.vue")
  }, 
  {
    path: '/cart',
    name: 'Cart',
    component: () => import("../views/Cart.vue")
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import("../views/Archive.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
