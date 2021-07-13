import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "About",
    component: About,
  },
  {
    path: "/product/:name",
    name: "About",
    component: Product,
  },
  {
    path: "/product/:breed/:image",
    name: "About",
    component: Product,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
