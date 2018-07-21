import EmptyComponent from "@/components/EmptyComponent";

export default {
  path: '__pageName__',
  meta: { title: '__pageName__管理', url: '/__pageName__/list' },
  component: EmptyComponent,
  children: [{
    path: 'list',
    meta: { title: '__pageName__列表' },
    component: () => import(/* webpackChunkName: "__pageName__" */ './index')
  }]
}