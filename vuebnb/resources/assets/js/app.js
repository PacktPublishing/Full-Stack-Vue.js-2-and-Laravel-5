import Vue from 'vue';
import "core-js/features/object/assign";
import ListingPage from "../components/ListingPage";

var app = new Vue({
    el: '#app',
    render: h => h(ListingPage)
});

