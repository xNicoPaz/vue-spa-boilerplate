import Vue from 'vue';
import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./views/Home.vue').default,
		props: true,
	},
	{
		path: '/members',
		component: require('./views/members/Index.vue').default,
		props: true,
	},
	{
		path: '/members/create',
		component: require('./views/members/Create.vue').default,
		props: true,
	},
	{
		path: '/members/:id',
		component: require('./views/members/Details.vue').default,
		props: {
			isEdit: false,
		}
	},
	{
		path: '/members/:id/edit',
		component: require('./views/members/Details.vue').default,
		props: {
			isEdit: true,
		}
	}
];

export default new VueRouter({
	routes,
});