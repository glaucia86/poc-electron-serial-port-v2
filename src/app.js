/**
 * Arquivo: src/app.js
 * Data: 05/11/2018
 * Descrição: arquivo responsável por executar Vuejs
 * Author: Glaucia Lemos
 */

import Vue from 'vue';
import router from './router/router';
import App from './App.vue';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
