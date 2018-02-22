<template>
	<v-btn color="red white--text" @click="destroy()">
		<slot>
		eliminar	
		</slot>
		<v-icon right>fa-trash</v-icon>
	</v-btn>	
</template>

<script>
export default{
	name: 'delete-button',
	props: [
		'url'
	],
	methods: {
		destroy(){
			if(confirm('¿Esta seguro que desea borrar a este miembro?')){
				console.log('estoy en el verdadero');
				window.axios.post(this.url).then((response) => {
					alert('Miembro borrado exitosamente');
					this.$router.push({ path: '/' });
				});
			}
		}
	},
};
</script>