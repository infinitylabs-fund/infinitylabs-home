<template>
  <div class="containers">
    
    <nav-Top />
    <router-view />
    <nav-Bottom />
  </div>
</template>

<script>
import navTop from "@/components/navTop";
import navBottom from "@/components/navBottom";
export default {
  name: "containers",
  components: { navTop, navBottom },
};
</script>
<style scoped>
.containers {
  position: relative;
}
</style>

