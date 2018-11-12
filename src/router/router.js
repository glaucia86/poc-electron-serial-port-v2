/**
 * Arquivo: src/router/router.js
 * Data: 05/11/2018
 * Descrição: arquivo responsável por tratar a lógica das rotas em Vue.js
 * Author: Glaucia Lemos
 */

import Vue from "vue";
import Router from "vue-router";
import About from "../components/pages/About/index.vue";
import Checkin from "../components/pages/Checkin/index.vue";
import ContactUs from "../components/pages/ContactUs/index.vue";
import Home from "../components/pages/Home/index.vue";
import Registration from "../components/pages/Registration/index.vue";
import WebCamera from "../components/pages/WebCamera/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/home", redirect: "/" },
    { path: "/checkin", name: "checkin", component: Checkin },
    { path: "/webcamera", name: "webcamera", component: WebCamera },
    { path: "/about", name: "about", component: About },
    { path: "/contactus", name: "contactus", component: ContactUs },
    { path: "/registration", name: "registration", component: Registration }
  ]
});
