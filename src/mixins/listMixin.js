import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchForm: {},
      defaultSearchForm: {},
      defaultDownForm: {},
      pageName: 'xxx',
      rowKey: 'id'
    }
  },

  created() {
    this.$store.dispatch(`${this.pageName}/search`, {
      defaultSearchForm: this.defaultSearchForm || {},
      currentPage: 1,
      pageSize: 10
    })
  },

  methods: {
    onSubmit() {
      console.log('onSubmit');
      this.$store.dispatch(`${this.pageName}/search`, {
        searchForm: this.searchForm,
        currentPage: 1,
        pageSize: 10,
        check: true
      });
    },
    currentChange(currentPage) {
      this.$store.dispatch(`${this.pageName}/search`, {
        searchForm: this.searchForm,
        currentPage: currentPage,
        pageSize: 10
      });
    },
    onAdd() {
      this.$store.dispatch(`${this.pageName}/edit`, {
        editType: 'add'
      });
    },
    handleEdit(row) {
      this.$store.dispatch(`${this.pageName}/edit`, {
        editType: 'edit',
        editRow: row
      });
    },
    handleDelete(row) {
      this.$store.dispatch(`${this.pageName}/delete`, row[this.rowKey]);
    },
    //查看详情 这个后面可以公用一个 通过参数区分
    handleDetail(index, row) {
      this.$store.dispatch(`${this.pageName}/changeDetialVisable`, {
        detailVisable: true,
      });
    },
    cancelEdit() {
      this.$store.dispatch(`${this.pageName}/cancelEdit`);
    }
  }
}
