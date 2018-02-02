import "core-js/fn/object/assign";
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue({
  el: '#app',
  data: Object.assign(model, {
    headerImageStyle: {
      'background-image': `url(${model.images[0]})`
    },
    opened: false,
    modalOpen: false,
    message: 'Hello world'
  }),
  methods: {
    escapeKeyListener(evt) {
      if (evt.keyCode === 27 && this.modalOpen) {
        this.modalOpen = false;
      }
    }
  },
  watch: {
    message: function(newVal, oldVal) {
      console.log(oldVal, ', ', newVal);
    },
    modalOpen: function() {
      var className = 'modal-open';
      if (this.modalOpen) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  },
  created: function() {
    document.addEventListener('keyup', this.escapeKeyListener);
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
});

// document.addEventListener('keyup', function(e){
//   if (e.keyCode === 27 && app.modalOpen) {
//     app.modalOpen = false;
//   }
// });

setTimeout(function() {
  app.message = 'Goodbye world';
  // Output: "Hello world, Goodbye world";
}, 2000);

