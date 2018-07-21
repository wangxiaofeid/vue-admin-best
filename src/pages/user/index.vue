<template>
  <div :class="pageName">
    <div class="list-form">
      <el-form :inline="true" :model="searchForm" ref="searchForm" class="list-form-inline">
        <el-form-item label="搜索信息" prop="searchStr">
          <el-input v-model="searchForm.searchStr" placeholder="请输入搜索信息"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button @click="resetForm('searchForm')">重置</el-button>
          <el-button type="primary" @click="onAdd()">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-body">
      <el-table :data="tableData.dataList" border style="width: 100%">
        <el-table-column prop="id" label="用户ID" width="70">
          <template slot-scope="scope">
            <router-link :to="'/user/detail/'+scope.row.id">{{scope.row.id}}</router-link>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="name" label="用户昵称">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="phone" label="电话">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
              <a class="page-edit" @click="handleEdit(scope.row)">编辑</a>
              <a class="page-edit" @click="handleDelete(scope.row)">删除</a>
            </template>
        </el-table-column>
      </el-table>
      <div class="clearfix pt15">
        <div class="fr">
          <el-pagination background layout="total, prev, pager, next" :total="tableData.total" :page-size="10" :current-page="tableData.currentPage" @current-change="currentChange">
          </el-pagination>
        </div>
      </div>
    </div>
    <Edit />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import listMixin from "@/mixins/listMixin";
import Edit from "./edit";

const pageName = "user";
export default {
  mixins: [listMixin],

  components: { Edit },

  data() {
    return {
      pageName,
      searchForm: {
        searchStr: ""
      }
    };
  },

  computed: {
    ...mapGetters({
      tableData: `${pageName}/tableData`
    })
  }
};
</script>

<style >
</style>