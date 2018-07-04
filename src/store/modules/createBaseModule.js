import { Message } from "element-ui";
import _ from "lodash";
import Ajax from "../../ajax";

export default function createBaseModule({
    searchUrl,
    deleteUrl,
    saveUrl,
    defaultSearch,
    rowKey = 'id'
}) {
    const state = {
        pageSize: 10,
        currentPage: 1,
        total: 0,
        dataList: [],
        searchForm: {},
        defaultSearchForm: {},

        editRow: {},
        editType: '',
        editVisable: false,
        isSave: false
    }

    const getters = {
        tableData: state => {
            const { dataList, currentPage, pageSize, total } = state;
            return {
                dataList,
                currentPage,
                pageSize,
                total
            }
        },
        editData: state => {
            const { editRow, editType, editVisable } = state;
            return {
                editRow,
                editType,
                editVisable
            }
        }
    }

    const actions = {
        search({ commit, state, rootState }, obj) {
            if (rootState.loading) {
                return
            }
            const { searchForm = {}, currentPage, pageSize, check = false, defaultSearchForm } = obj;
            if (check && obj.currentPage != state.currentPage) {
                commit('changeData', {
                    searchForm,
                    pageSize,
                    currentPage
                });
                return
            }
            if (defaultSearchForm) {
                state.defaultSearchForm = defaultSearchForm;
            }
            commit('setLoading', true, { root: true });
            Ajax({
                url: searchUrl,
                data: Object.assign({
                    currentPage,
                    perPage: pageSize
                }, searchForm, defaultSearch, state.defaultSearchForm),
                success: function(result) {
                    const data = {
                        currentPage,
                        pageSize,
                        searchForm,
                        dataList: result.list,
                        total: result.totalCount
                    };
                    commit('changeData', data);
                    commit('setLoading', false, { root: true });
                },
                error: function(error) {
                    Message.error(error || '请求失败');
                    commit('setLoading', false, { root: true });
                }
            });
        },

        delete({ commit, state, rootState }, id) {
            // commit('setLoading', true, { root: true });
            Ajax({
                url: deleteUrl,
                data: {
                    [rowKey]: id
                },
                success: function(result) {
                    commit('deleteById', id);
                    // commit('setLoading', false, { root: true });
                    Message.success('删除成功');
                },
                error: function(error) {
                    Message.error(error || '请求失败');
                    // commit('setLoading', false, { root: true });
                }
            });
        },

        save({ commit, state, dispatch }, options) {
            commit('changeData', { isSave: true });
            Ajax({
                url: saveUrl,
                data: options,
                success: function(result) {
                    if (state.editType == 'add') {
                        if (state.currentPage == 1) {
                            dispatch('search', {
                                searchForm: state.searchForm,
                                pageSize: state.pageSize,
                                currentPage: state.currentPage
                            })
                        } else {
                            commit('changeData', { currentPage: 1 });
                        }
                        Message.success('新增成功');
                    } else {
                        commit('changeRowData', options);
                        Message.success('修改成功');
                    }
                    commit('changeData', { isSave: false, editVisable: false });
                },
                error: function(error) {
                    Message.error(error || '请求失败');
                    commit('changeData', { isSave: false });
                }
            });
        },

        edit({ commit, state }, options) {
            const { editType, editRow } = options;
            if (editType == 'add') {
                commit('changeData', {
                    editType,
                    editVisable: true
                });
            } else {
                commit('changeData', {
                    editType,
                    editRow: _.clone(editRow),
                    editVisable: true
                });
            }
        },

        cancelEdit({ commit }) {
            commit('changeData', {
                editType: '',
                editRow: {},
                editVisable: false
            });
        }
    }

    const mutations = {
        changeData(state, data) {
            for (let key in data) {
                state[key] = data[key]
            }
        },
        deleteById(state, id) {
            _.remove(state.dataList, item => item[rowKey] == id);
            state.dataList = _.cloneDeep(state.dataList);
        },
        changeRowData(state, options) {
            const index = _.findIndex(state.dataList, item => item[rowKey] == options[rowKey]);
            state.dataList[index] = Object.assign({}, state.dataList[index], options);
            state.dataList = _.cloneDeep(state.dataList);
        }
    }

    return {
        state,
        getters,
        actions,
        mutations
    }
}