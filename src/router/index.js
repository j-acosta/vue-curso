import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Form from '../views/Form';
import PerfilUsuario from '../views/PerfilUsuario';

Vue.use(VueRouter);

const routes = [
    {path: '/Home', name: 'Home', component: Home },
    {path: '/Form', name: 'Form', component: Form},
    {path: '/Perfil', name: 'Perfil', component: PerfilUsuario},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
