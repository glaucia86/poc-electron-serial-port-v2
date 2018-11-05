/**
 * Arquivo: src/router/router.js
 * Data: 05/11/2018
 * Descrição: arquivo responsável por tratar a lógica das rotas em Vue.js
 * Author: Glaucia Lemos
 */

import Vue from 'vue';
import Router from 'vue-router';
import Skills from '../components/Skills.vue';
import About from '../components/About.vue';
import Home from '../components/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/skills', name: 'skills', component: Skills },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
