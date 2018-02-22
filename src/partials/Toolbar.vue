<template>
	<v-toolbar app fixed clipped-left color="blue darken-3 white--text">
		<v-toolbar-side-icon color="white--text" @click.stop="shared.drawer = !shared.drawer"></v-toolbar-side-icon>
		<v-toolbar-title>{{ shared.title }}</v-toolbar-title>
	</v-toolbar>
</template>

<script>
export default{
	name: 'toolbar',
	data(){
		return{
			shared: window.sharedData,
		};
	}
};
</script>

<style>

</style>