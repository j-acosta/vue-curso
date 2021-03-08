<template>
    <v-card
        class="mx-auto m-3 mt-3 mb-3"
        max-width="194"
    >
        <v-img
            :src="pelicula.Poster"
            height="301"
            width="194"
        ></v-img>
        <v-card-title>
            {{pelicula.Title}}
        </v-card-title>
        <v-card-subtitle>{{pelicula.Year}} - {{pelicula.Type}}</v-card-subtitle>
    </v-card>
</template>
<script>
	export default {
		props: ["pelicula"],
	};
</script>