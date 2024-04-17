<template>
  <div id="app" ref="app">
    <el-scrollbar style="height: 100%" ref="scroll">
      <router-view />
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    //监听路由跳转将页面调回最顶部
    $route() {
      this.$refs.scroll.wrap.scrollTop = 0;
    },
  },
};
</script>

<style>
</style>
