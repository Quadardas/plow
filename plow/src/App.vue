<template>
  <div class="wrapper">
    <Header />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import { DecideTree } from "@/services/decideTree.service";
import { onMounted } from "vue";
import { ETaskPriorities, ETypeWorker } from "./enums/treeCriteria.enum";
import Header from "@/components/Header.vue";
import Modal from "@/components/modals/Modal.vue";
import { ref } from "vue";

onMounted(() => {
  const decideTree = new DecideTree();
  console.log(
    decideTree.startMethod({
      id: 0,
      name: "sadsads",
      description: "sasdasd",
      type: ETypeWorker.Backend,
      priority: ETaskPriorities.Highest,
    })
  );
});
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}
</style>
