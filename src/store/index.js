import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        user: {
            username:'',
            email:''
        }
    },
    getters:{
        username(state){
            return state.user.username;
        },
        email(state){
            return state.user.email;
        },
    },
    mutations:{
        SET_USER(state, user){
            state.user = user;
        },
        RESET_USER(state){
            state.user = {
                username:'',
                email:''
            };
        },
    },
    actions:{
        modificarUser( {commit}, user ){
            commit('SET_USER', user);
        },
        borrarUser({commit}){
            commit('RESET_USER');
        }
    },
    modules:{

    }
})

export default store;