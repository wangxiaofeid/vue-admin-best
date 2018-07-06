import EmptyComponent from "@/components/EmptyComponent";

export default {
  path: 'user',
  meta: { title: '用户管理', url: '/user/list' },
  component: EmptyComponent,
  children: [{
    path: 'list',
    meta: { title: '用户列表' },
    component: () => import(/* webpackChunkName: "user" */ './index')
  }, {
    path: 'detail/:id',
    meta: { title: '用户详情' },
    component: () => import(/* webpackChunkName: "userDetail" */ './detail')
  }]
}