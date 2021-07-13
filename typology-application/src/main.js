import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import i18n from "./i18n";
import VueCarousel from "vue-carousel";
import VueMeta from "vue-meta";

Vue.use(VueCarousel);
Vue.use(VueRouter);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
