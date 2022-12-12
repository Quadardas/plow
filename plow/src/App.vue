<template>
  <div>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import { DecideTree } from '@/services/decideTree.service';
import { onMounted } from "vue";
import { ETaskPriorities, ETypeWorker } from "./enums/treeCriteria.enum";

onMounted(() => {
  const decideTree = new DecideTree();
  console.log(decideTree.startMethod({
    id: 0,
    name: 'sadsads',
    description: 'sasdasd',
    type: ETypeWorker.Frontend,
    priority: ETaskPriorities.Highest,
  }))
})
</script>

<style scoped></style>
