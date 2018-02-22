<template>
	<v-btn color="yellow white--text" @click="$router.push(path)">
		editar
		<v-icon right>fa-edit</v-icon>
	</v-btn>
</template>

<script>
export default{
	name: 'edit-button',
	props: [
		"path"
	],
}
</script>