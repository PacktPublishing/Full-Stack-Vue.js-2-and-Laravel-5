import "core-js/fn/object/assign";
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

import HeaderImage from '../components/HeaderImage.vue';
import FeatureList from '../components/FeatureList.vue';
import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow from '../components/ModalWindow.vue';

var app = new Vue({
  el: '#app',
  data: Object.assign(model, {
    opened: false,
    message: 'Hello world',
    contracted: true
  }),
  watch: {
    message: function(newVal, oldVal) {
      console.log(oldVal, ', ', newVal);
    }
  },
  components: {
    HeaderImage,
    FeatureList,
    ImageCarousel,
    ModalWindow
  },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    }
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

