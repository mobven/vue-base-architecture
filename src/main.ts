import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosUtil from "./utils/axios-util";

Vue.prototype.$axios = axiosUtil;
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
