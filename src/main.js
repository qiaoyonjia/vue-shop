import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 公共css文件
import './assets/css/common.css'
//淘宝无线适配文件
import './assets/js/flexible.js' 

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");