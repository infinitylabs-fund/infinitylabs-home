<template>
  <div class="container">
    <nav-Top />
    <router-view />
    <nav-Bottom />
  </div>
</template>

<script>
import navTop from "@/components/navTop";
import navBottom from "@/components/navBottom";
export default {
  name: "container",
  components: { navTop, navBottom },
};
</script>
<style scoped>
.container {
  position: relative;
}
</style>

