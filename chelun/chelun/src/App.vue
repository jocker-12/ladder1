<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Loading from "./components/loading";
export default {
  name: "App"
};
</script>

<style lang='scss'>
@import "./css/_base.scss";
</style>
