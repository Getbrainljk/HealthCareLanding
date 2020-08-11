import Vue from 'vue';
import Vuex from 'vuex';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Vuex);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCK6c38Sr3VhX1ghwA9KAqZWkTqiyM8BrY",
    libraries: "places" // necessary for places input
  }
});
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
});
