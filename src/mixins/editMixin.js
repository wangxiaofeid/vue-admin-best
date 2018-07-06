

export default {
  data() {
    return {
      pageName: "xxx",
      editList: [],
      rules: {}
    }
  },

  methods: {
    cancelEdit() {
      this.$store.dispatch(`${this.pageName}/cancelEdit`);
    },
    onSubmit() {
      this.$refs.edit.validate((valid) => {
        if (valid) {
          let options = {};
          if (this.editData.editType !== 'add') {
            options[this.rowKey] = this.editData.editRow[this.rowKey];
          }
          this.editList.forEach(key => {
            options[key] = this.editData.editRow[key] || '';
          })
          this.$store.dispatch(`${this.pageName}/save`, options);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
