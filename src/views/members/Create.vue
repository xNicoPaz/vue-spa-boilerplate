<template>    
	<v-flex xs12 sm6 offset-sm3>
		<v-alert color="success" icon="check_circle" v-model="successfullCreation">Miembro registrado exitosamente</v-alert>
		<breadcrumbs :items="breadcrumbItems"></breadcrumbs>
		<v-card>
			<v-card-media
			class="white--text"
			height="200px"
			src="/src/assets/inside.jpeg"
			>
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="display-1 blue--text lighten-4">Registrar miembro</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-media>
			<v-card-title>
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<v-text-field md8 label="Nombre" v-model="form.firstName" :rules="firstNameRules" required ></v-text-field>
							<v-text-field label="Apellido" v-model="form.lastName" required :rules="lastNameRules"></v-text-field>
							<v-text-field label="Edad" v-model="form.age" type="number" required :rules="ageRules"></v-text-field>
							<v-select :items="sexOptions" 
							v-model="form.sex" label="Sexo" :rules="sexRules" bottom ></v-select>
							<v-checkbox label="Aceptas los terminos y condiciones del GP?" v-model="form.accepts" required ></v-checkbox>	
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-title>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="amber darken-3 white--text" @click="onSubmit">registrar<v-icon right>fa-plus-square</v-icon></v-btn>
				<v-btn color="primary" @click="form.reset">borrar<v-icon right>fa-trash</v-icon></v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
</template>

<script>
import Form from '../../utils/Form';
import Breadcrumbs from '../../partials/Breadcrumbs';

export default{
	name: 'members-create',
	components: { Breadcrumbs },
	data(){
		return {
			breadcrumbItems: 				
				[
					{
						text: "Miembros",
						disabled: false,
					},
					{
						text: "Crear",
						disabled: true,
					}
				],
			successfullCreation: false,
			form: new Form({
				firstName: 'Nico',
				lastName: 'Paz',
				age: 22,
				sex: 1,
				accepts: true,
			}),
			sexOptions: [
			{value: 1, text: 'Hombre'}, 
			{value: 2, text:'Mujer'},
			],
			firstNameRules: [
			(v) =>  !form.errors.has('firstName') || 'Debe ingresar un nombre de hasta 100 caracteres alfabeticos'
			],
			lastNameRules: [
			(v) =>  !form.errors.has('lastName') || 'Debe ingresar un apellido de hasta 100 caracteres alfabeticos'
			],
			ageRules: [
			(v) =>  !form.errors.has('age') || 'Debe ingresar la edad'
			],
			sexRules: [
			(v) =>  !form.errors.has('firstName') || 'Debe especificar el sexo'
			],
		};
	},
	methods: {
		onSubmit(){
			//window.axios.post('http://api.gp.local', this.form.data());
			this.form.post('http://api.gp.local/members').then((data) => {
				this.successfullCreation = true;
			})
		},
	},
	created(){
		window.form = this.form;
	}
}
</script>

<style>
	.red-text{
		color: red;
	}
</style>