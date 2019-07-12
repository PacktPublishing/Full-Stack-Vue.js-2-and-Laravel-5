import Vue from 'vue';
import "core-js/features/object/assign";
import ListingPage from "../components/ListingPage";
import App from '../components/App.vue';
import router from './router';

var app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});

