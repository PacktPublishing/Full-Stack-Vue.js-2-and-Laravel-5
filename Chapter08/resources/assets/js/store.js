import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saved: [1, 15],
    listing_summaries: [],
    listings: []
  },
  mutations: {
    toggleSaved(state, id) {
      let index = state.saved.findIndex(saved => saved === id);
      if (index === -1) {
        state.saved.push(id);
      } else {
        state.saved.splice(index, 1);
      }
    },
    addData(state, { route, data }) {
      if (route === 'listing') {
        state.listings.push(data.listing);
      } else {
        state.listing_summaries = data.listings;
      }
    }
  },
  getters: {
    getListing(state) {
      return id => state.listings.find(listing => id == listing.id);
    }
  }
});
