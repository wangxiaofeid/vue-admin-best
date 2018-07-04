import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [{
        path: '/home',
        name: 'home',
        component: () => import('@/views/home') /* webpackChunkName: "home" */
      }, {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user') /* webpackChunkName: "user" */
      }]
    }, {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login') /* webpackChunkName: "login" */
    }
  ]
})
