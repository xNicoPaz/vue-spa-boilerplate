<template>
	<v-breadcrumbs divider="/">
		<v-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled" :to="item.href !== undefined ? item.href : '#'">{{ item.text }}</v-breadcrumbs-item>
	</v-breadcrumbs>
</template>
<script>
export default{
	name: 'breadcrumbs',
	props: [
		"items",
	],
};
</script>