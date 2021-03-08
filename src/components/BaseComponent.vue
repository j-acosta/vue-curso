<template>
	<v-app>
		<navigation></navigation>

		<bar></bar>

		<v-main>
			<v-container fluid>
				<router-view ></router-view>
			</v-container>
		</v-main>

		<Footer></Footer>
	</v-app>
</template>
<script>
	import Bar from "./modules/Bar";
	import Navigation from "./modules/Navigation";
	import Footer from "./modules/Footer";

	export default {
		components: {
			Bar,
			Navigation,
			Footer,
		},
	};
</script>
