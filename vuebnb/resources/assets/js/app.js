import Vue from 'vue';
import sample from './data';

var app = new Vue({
  el: '#app',
  data: {
    title: sample.title,
    address: sample.address,
    about: sample.about,
    amenities: sample.amenities,
    prices: sample.prices,
    headerImageStyle: {
      'background-image': 'url(/images/header.jpg)'
    },
    opened: false,
    modalOpen: false,
    message: 'Hello world'
  },
  methods: {
    escapeKeyListener: function(e) {
      if (e.keyCode === 27 && this.modalOpen) {
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

// Studying by page 60
