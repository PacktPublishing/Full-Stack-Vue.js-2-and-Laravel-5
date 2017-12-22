import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import router from './router';

import axios from 'axios';
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.csrf_token
};

export default new Vuex.Store({
  state: {
    saved: [],
    listing_summaries: [],
    listings: [],
    auth: false
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
      if (data.auth) {
        state.auth = data.auth;
      }
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
  },
  actions: {
    toggleSaved({ commit, state }, id) {
      if (state.auth) {
        axios.post('/api/user/toggle_saved', { id }).then(
          () => commit('toggleSaved', id)
        );
      } else {
        router.push('/login');
      }
    }
  },
});
