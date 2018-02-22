import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import axios from 'axios';
import Url from './utils/Url.js';

/*
	Make this libraries globals
*/
window.Vue = Vue;
window.axios = axios;
window.Url = Url;

/*
	Enable vue router
*/
Vue.use(VueRouter);
/*
	Enable vuetify components	
*/
Vue.use(Vuetify);

/*
	Shared data object, for sharing data among the
	different vue components painlessly
*/

window.sharedData = {
	title: 'Soportify',
	drawer: false,
	dialog: false,
};

/*
	Render the root vue GUI component
*/
new Vue({
  el: '#app',
  render: h => h(App)
})
