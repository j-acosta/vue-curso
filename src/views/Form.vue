<template>
  <div>
    <titulo msj="Agregar usuario"> </titulo>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required"
        >
          <v-text-field
            v-model="name"
            :error-messages="errors"
            label="Nombre"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
        >
          Guardar
        </v-btn>
        <v-btn @click="clear">
          Limpiar
        </v-btn>
      </form>
    </validation-observer>
  </div>
</template>

<script>
  import { required, email } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
  import Titulo from "../components/Titulo";

  extend('required', {
    ...required,
    message: 'El {_field_} no puede ser un espacio en blanco',
  })

  extend('email', {
    ...email,
    message: 'Debe ser un Email',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
      Titulo,
    },
    data: () => ({
      name: '',
      email: '',
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
        localStorage.setItem('user', this.name);
        localStorage.setItem('email', this.email);
        const user = {
          username: this.name,
          email: this.email
        };
        this.$store.dispatch("modificarUser", user);
      },
      clear () {
        this.name = ''
        this.email = ''
        this.$refs.observer.reset()
      },
    },
  };
</script>