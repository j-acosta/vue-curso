<template>
	<div>
		<titulo msj="Home"></titulo>
		<br />

		<v-row>
			<v-col cols="10">
				<v-text-field label="Pelicula" v-model="inputPelicula"></v-text-field>
			</v-col>
			<v-col cols="2">
				<v-btn
					@click="listarPeliculas()"
					class="ma-2"
					outlined
					color="black"
				>
					Buscar
				</v-btn>
			</v-col>
		</v-row>

		<v-row>
			<movie
				v-for="pelicula in this.peliculas"
				:key="pelicula.imdbID"
				:pelicula="pelicula"
			></movie>
		</v-row>
	</div>
</template>
<script>
	import axios from "axios";
	import Titulo from "../components/Titulo";
	import Movie from "../components/Movie";

	export default {
		components: {
			Titulo,
			Movie,
		},
		props: {},
		data() {
			return {
				inputPelicula: '',
				peliculas: [],
			};
		},
		mounted() {
			this.inputPelicula = "Back to the future";
		},
		methods: {
			listarPeliculas() {
				const options = {
					method: "GET",
					url: `http://www.omdbapi.com/?apikey=9a6b1e95&s=${encodeURI(this.inputPelicula)}`,
				};
				axios
					.request(options)
						.then( (response) => {
						this.peliculas = response.data.Search;
					})
					.catch( (error) => {
						console.error(error);
				});
			},
		},
		computed: {
		},
		watch: {
		},
	};
</script>
<style></style>
