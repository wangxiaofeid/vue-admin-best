import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import EmptyComponent from "@/components/EmptyComponent";

Vue.use(Router)

const req = require.context('../pages', true, /router$/);
const routerList = [];
req.keys().map(key => {
  const router = req(key).default;
  routerList.push(router);
});

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "home" */ '@/commonPages/home')
      }, ...routerList]
    }, {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/commonPages/login')
    }, {
      path: '*',
      component: () => import(/* webpackChunkName: "notFound" */ '@/commonPages/notFound')
    }
  ]
})
