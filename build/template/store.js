import createBaseModule from "@/store/modules/createBaseModule";

let {
  state,
  getters,
  actions,
  mutations
} = createBaseModule({
  searchUrl: '/api/__pageName__/list', // 列表接口
  deleteUrl: '/api/__pageName__/delete', // 删除
  addUrl: '/api/__pageName__/add', // 添加
  editUrl: '/api/__pageName__/edit', // 编辑
  defaultSearch: {}, // 查询列表默认参数
  rowKey: 'id' // 列表唯一ID
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  name: '__pageName__'
}
