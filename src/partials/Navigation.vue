<template>
	<v-navigation-drawer 
		clipped 
		fixed 
		v-model="shared.drawer" 
		app>
		<v-list dense>
			<router-link to="/members/create" exact>
				<v-list-tile @click="">
					<v-list-tile-action>
						<v-icon color="blue darken-3">account_circle</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Crear</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</router-link>
			<router-link to="/members" exact>
				<v-list-tile @click="">
					<v-list-tile-action>
						<v-icon color="blue darken-3">search</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Consultar</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>				
			</router-link>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default{
	name: 'navigation',
	data(){
		return{
			shared: window.sharedData,
		};
	}
};
</script>