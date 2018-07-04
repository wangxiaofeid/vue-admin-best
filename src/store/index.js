import Vue from 'vue'
import Vuex from 'vuex'

import modules from "./modules";

Vue.use(Vuex)

export default function createStore(name) {
    return new Vuex.Store({
        state: {
            loading: false,
            
            menus: [{
                title: '用户管理',
                key: 'user',
                icon: require('@/assets/username.png'),
                children: [{
                    title: '用户列表',
                    url: '/user/list'
                }]
            }]
        },
        actions: {
            setLoading: ({ commit }, loading) => {
                commit('setLoading', loading)
            }
        },
        mutations: {
            setLoading: (state, loading) => {
                state.loading = loading
            }
        },
        getters: {
            loading: state => state.loading
        },
        modules
    })
}