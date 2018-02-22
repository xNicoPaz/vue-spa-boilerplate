<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-media src="/src/assets/beach.jpeg" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">GP Summer de Jovenes Mayores</h3>
          <div>Se lleva a cabo normalmente los viernes a las 17:00hs, pero en realidad arranca al menos una hora mas tarde tipo 18:00hs...</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange" @click="$router.push({ path: 'members/create' })">Unirme al GP</v-btn>
        <v-btn flat color="orange" @click="$router.push({ path: 'members'})">Ver quien va</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default{
  name: 'welcome-card',
}
</script>