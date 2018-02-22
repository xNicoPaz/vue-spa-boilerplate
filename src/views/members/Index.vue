<template>
	<v-flex xs-12 fill-height>
		<h3 class="headline">Consultar miembros registrados en el GP</h3>
		<breadcrumbs :items="breadcrumbItems"></breadcrumbs>

		<v-card>
		    <v-card-title>
		      Nutrition
		      <v-spacer></v-spacer>
		      <v-text-field
		        append-icon="search"
		        label="Buscar"
		        single-line
		        hide-details
		        v-model="search"
		      ></v-text-field>
		    </v-card-title>
			<v-data-table class="elevation-1" :headers="headers" :items="members" :search="search" :loading="isLoading" hide-actions>
			    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
				<template slot="items" slot-scope="props">
					<tr @click="props.expanded = !props.expanded">
						<td>{{ props.item.first_name }}</td>
						<td class="text-xs-right">{{ props.item.last_name }}</td>
						<td class="text-xs-right">{{ props.item.age }}</td>
						<td class="text-xs-right">{{ props.item.sex === 1 ? 'Hombre' : 'Mujer' }}</td>						
					</tr>
				</template>
				<template slot="expand" slot-scope="props">
					<div class="text-xs-center">
						<details-button :path="window.Url.memberDetailsPath(props.item.id)"></details-button>
						<edit-button :path="window.Url.memberEditPath(props.item.id)"></edit-button>
						<delete-button :url="window.Url.memberDeleteUrl(props.item.id)"></delete-button>	
					</div>
				</template>
				<template slot="no-data">
					<h3 class="body-2">No hay miembros registrados</h3>
				</template>
			</v-data-table>
				
		</v-card>
	</v-flex>
</template>

<script>
import Breadcrumbs from '../../partials/Breadcrumbs';
import DetailsButton from '../../partials/DetailsButton';
import EditButton from '../../partials/EditButton';
import DeleteButton from '../../partials/DeleteButton';

export default{
	name: 'members-index',
	components: { Breadcrumbs, DetailsButton, EditButton, DeleteButton },
	data(){
		return{
			window: window,
			isLoading: true,
			search: '',
			breadcrumbItems: [
				{
					text: 'Miembros',
					disabled: false,
				},
				{
					text: 'Consultar',
					disabled: true,
				},
			],
			headers: [
				{
					text: "Nombre",
					align: 'left',
					value: 'firstName',
					sortable: false,
				},
				{
					text: "Apellido",
					value: 'lastName',
					sortable: false,
				},
				{
					text: "Edad",
					value: 'age',
				},
				{
					text: "Sexo",
					value: 'sex',
				},
			],
			members: [],
		};
	},
	created(){
		window.axios.get(window.Url.apiBaseUrl() + '/members').then((response) => {
			this.members = response.data;
			this.isLoading = false;
		});
		window.indexVue = this;
	}
}
</script>