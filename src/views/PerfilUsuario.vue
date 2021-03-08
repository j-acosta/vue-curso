<template>
  <div>
    <titulo msj="Perfil"></titulo>

    <v-banner two-line>
      <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        size="40"
      >
        <v-icon
          icon="mdi-lock"
          color="white"
        >
          mdi-lock
        </v-icon>
      </v-avatar>
      <h4>{{this.$store.getters.username}}</h4>
      <p>{{this.$store.getters.email}}</p>
      <template v-slot:actions >
        <v-btn
          text
          v-if="poseeUsuario"
          color="deep-purple accent-4"
          @click="borrarUsuario()"
        >
          Borrar
        </v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script>
  import Titulo from "../components/Titulo";

	export default {
    components: {
			Titulo,
		},
		props: {},
		data() {
			return {
			};
		},
		mounted() {
      console.log(localStorage.getItem("user"));
      console.log(localStorage.getItem("email"));

		},
		methods: {
			borrarUsuario() {
        localStorage.removeItem("user");
        localStorage.removeItem("email");

        this.$store.dispatch("borrarUser");
      },
		},
		computed: {
       poseeUsuario() {
        return this.$store.getters.username !== '' && this.$store.getters.email !== '';
      }
		},
		watch: {
		},
	};
</script>
<style></style>