import createBaseModule from "../createBaseModule";

let {
  state,
  getters,
  actions,
  mutations
} = createBaseModule({
  searchUrl: '/api/user/list', // 列表接口
  deleteUrl: '/api/user/delete', // 删除
  addUrl: '/api/user/add', // 添加
  editUrl: '/api/user/edit', // 编辑
  defaultSearch: {}, // 查询列表默认参数
  rowKey: 'id' // 列表唯一ID
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  name: 'userList'
}
