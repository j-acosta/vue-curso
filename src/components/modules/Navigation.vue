<template>
    <v-navigation-drawer
    class="accent-4"
    dark
    permanent
	app
    >
      <v-list>
        <router-link
          class="text-decoration-none"
          v-for="item in items"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item link> 
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', path: '/Home', icon: 'mdi-view-dashboard' },
          { title: 'Formulario', path: '/Form', icon: 'mdi-account-box' },
          { title: 'Perfil', path: '/Perfil', icon: 'mdi-help-box' },
        ],
      }
    },
  }
</script>