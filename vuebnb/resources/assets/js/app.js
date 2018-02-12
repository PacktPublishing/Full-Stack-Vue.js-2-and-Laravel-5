import "core-js/fn/object/assign";
import Vue from 'vue';

import ListingPage from '../components/ListingPage.vue';

var app = new Vue({
  el: '#app',
  render: h => h(ListingPage)
});

// document.addEventListener('keyup', function(e){
//   if (e.keyCode === 27 && app.modalOpen) {
//     app.modalOpen = false;
//   }
// });

