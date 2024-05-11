<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./cmps/AppHeader.vue";
import AppFooter from "./cmps/AppFooter.vue";

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<template>
  <div class="main-app">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style>
  .main-app {
    padding-inline: 20px;
    background-color: rgb(190 141 255);
  }
</style>
