<template>
  <div class="loading">
      <img src="../css/1.gif" alt="" style="display:block;margin:0 auto">
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
  width: 100%;
  height: 100%;
  padding: fixed;
  top: 0;
  left: 0;
  z-index: 9099;
  background: #ededed;
  padding-top: 50%;
  box-sizing: border-box;
}
</style>
