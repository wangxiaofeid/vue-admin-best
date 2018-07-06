import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const EmptyComponent = Vue.component('EmptyComponent', {
  template: '<router-view></router-view>'
})

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "home" */ '@/views/home')
      }, {
        path: 'user',
        meta: { title: '用户管理', url: '/user/list' },
        component: EmptyComponent,
        children: [{
          path: 'list',
          meta: { title: '用户列表' },
          component: () => import(/* webpackChunkName: "user" */ '@/views/user')
        }, {
          path: 'detail/:id',
          meta: { title: '用户详情' },
          component: () => import(/* webpackChunkName: "userDetail" */ '@/views/user/detail')
        }]
      }]
    }, {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login')
    }, {
      path: '*',
      component: () => import(/* webpackChunkName: "notFound" */ '@/views/notFound')
    }
  ]
})
