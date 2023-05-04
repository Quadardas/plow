<template>
  <div class="wrapper">
    <Header />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}
</style>
