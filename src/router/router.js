/**
 * Arquivo: src/router/router.js
 * Data: 05/11/2018
 * Descrição: arquivo responsável por tratar a lógica das rotas em Vue.js
 * Author: Glaucia Lemos
 */

import Vue from "vue";
import Router from "vue-router";
import About from "../components/About.vue";
import Checkin from "../components/Checkin.vue";
import ContactUs from "../components/ContactUs.vue";
import Home from "../components/Home.vue";
import Registration from "../components/Registration.vue";
import Webcam from "../components/Webcam.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/home", redirect: "/" },
    { path: "/checkin", name: "checkin", component: Checkin },
    { path: "/webcam", name: "webcam", component: Webcam },
    { path: "/about", name: "about", component: About },
    { path: "/contactus", name: "contactus", component: ContactUs },
    { path: "/registration", name: "registration", component: Registration }
  ]
});
