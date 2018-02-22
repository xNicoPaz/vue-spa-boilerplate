<template>
	<v-footer app fixed>
		<span>&copy; 2018 Nicolás Paz</span>
	</v-footer>
</template>

<script>
export default{
	name: 'foot',
	data(){
		return {
			shared: window.sharedData,
		};
	},
};
</script>