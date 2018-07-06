<template>
  <div>用户ID：{{id}}</div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style>
</style>
