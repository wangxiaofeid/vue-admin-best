import Vue from 'vue'
import Vuex from 'vuex'

import modules from "./modules"

import menus from './menuConfig'

Vue.use(Vuex)

export default function createStore(name) {
  return new Vuex.Store({
    state: {
      loading: false,
      menus,
      breadcrumbList: []
    },
    actions: {
      setLoading: ({
        commit
      }, loading) => {
        commit('setLoading', loading)
      },
      setBreadcrumbList: ({
        commit
      }, breadcrumbList) => {
        commit('setBreadcrumbList', breadcrumbList)
      }
    },
    mutations: {
      setLoading: (state, loading) => {
        state.loading = loading
      },
      setBreadcrumbList: (state, breadcrumbList) => {
        state.breadcrumbList = breadcrumbList
      }
    },
    getters: {
      loading: state => state.loading,
      menus: state => state.menus,
      breadcrumbList: state => state.breadcrumbList,
    },
    modules
  })
}
