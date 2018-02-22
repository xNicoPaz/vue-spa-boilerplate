<template>
	<div id="app">
		<title>{{ sharedData.title }}</title>
		<router-view></router-view>
	</div>
</template>

<script>
import router from './Router.js';

export default {
	name: 'app',
	router,
	data () {
		return {
			sharedData: window.sharedData,
		}
	}
}
</script>