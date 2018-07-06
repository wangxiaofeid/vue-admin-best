<template>
  <div class="Home">
    {{ message }}
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "Home",
  data() {
    return {
      message: "这里是首页"
    };
  },
  methods: {}
};
</script>

<style lang="less">
</style>