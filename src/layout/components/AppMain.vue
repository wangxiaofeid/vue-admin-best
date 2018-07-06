<template>
  <section class="app-main">
    <el-breadcrumb v-if="breadcrumbList.length > 0" separator="/" class="app-main-breadcrumb">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.title" :to="{ path: item.url }">{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      breadcrumbList: []
    }
  },
  created() {
    this.getBreadcrumbList(this.$route.matched);
  },
  watch: {
    $route(val, oldVal) {
      this.getBreadcrumbList(val.matched);
    }
  },
  methods: {
    getBreadcrumbList(matched = []) {
      this.breadcrumbList = matched.map(i => i.meta&&i.meta.title? i.meta : '').filter(j => !!j);
    }
  }
};
</script>

<style lang="less" scoped>
.app-main{
  padding: 20px;
  &-breadcrumb{
    margin-bottom: 20px;
  }
}
</style>

