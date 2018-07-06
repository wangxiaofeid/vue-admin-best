// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import createStore from "./store"
import App from './App'
import router from './router'
import * as filters from './filters'

import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css';
import './styles/index.less'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.mixin({
  methods: {
    axios
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const store = createStore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
