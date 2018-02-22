<template>
	<v-btn color="green white--text" @click="$router.push(path)">
		detalles
		<v-icon right>fa-search</v-icon>
	</v-btn>	
</template>

<script>
export default{
	name: 'details-button',
	props: [
		"path"
	],
}
</script>