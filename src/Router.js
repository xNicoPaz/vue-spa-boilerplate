import Vue from 'vue';
import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./views/Login.vue').default,
		props: {
			//OAuth2
			clientId: '',
			clientSecret: ''
		},
	},
	{
		path: '/home',
		component: require('./views/Home.vue').default,
		props: true,
	}
];

export default new VueRouter({
	routes,
});