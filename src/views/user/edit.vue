<template>
  <el-dialog :title="title" :visible="editData.editVisable" @close="cancelEdit" width="600px">
    <el-form :model="editData.editRow" :rules="rules" ref="edit" label-width="100px" class="edit-from">
      <el-form-item label="名称" prop="name">
        <el-input v-model="editData.editRow.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="editData.editRow.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="cancelEdit">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import editMixin from "@/mixins/editMixin";
const pageName = "userList";

export default {
  mixins: [editMixin],
  data() {
    return {
      pageName,
      editList: ["phone", "name"]
    };
  },

  computed: {
    ...mapGetters({
      rowKey: `${pageName}/rowKey`,
      editData: `${pageName}/editData`
    }),
    title: function () {
      return this.editData.editType == "add" ? "新增" : "修改";
    }
  },
};
</script>

<style>
</style>
