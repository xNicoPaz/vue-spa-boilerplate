<template>
	<v-app id="inspire">
		<navigation></navigation>
		<toolbar></toolbar>
		<v-content>
			<v-container fluid fill-height>
				<v-layout justify-center align-center></v-layout>

			</v-container>
		</v-content>
		<v-btn fab bottom right color="pink" dark fixed @click.stop="sharedData.dialog = !sharedData.dialog">
			<v-icon>add</v-icon>
		</v-btn>
		<floating></floating>
	</v-app>
</template>

<script>
import Toolbar from '../partials/Toolbar.vue';
import Navigation from '../partials/Navigation.vue';
import Floating from '../partials/Floating.vue';

export default {
	components: { Toolbar, Navigation, Floating },
	data(){
		return {
			sharedData: window.sharedData,
		}
	},
	props: {
		source: String
	}
}
</script>