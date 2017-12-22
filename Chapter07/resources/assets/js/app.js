import "core-js/fn/object/assign";
import Vue from 'vue';

import router from './router.js';
import App from '../components/App.vue';

var app = new Vue({
  el: '#app',
  render: h => h(App),
  router
});
