<template>
  <div id="app">
    <router-view></router-view>
    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from './components/content/mainbar/MainBar.vue'

export default {
  name: "app",
  components: {
    MainBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
