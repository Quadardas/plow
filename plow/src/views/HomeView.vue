<template>
  <div>
    <Header />
    <TaskCard :tasks="tasks" />
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import TaskCard from "@/components/TaskCard.vue";
import { ref } from "vue";
import type { ITask } from "@/models/task.model";

const tasks = ref<Array<ITask>>([
  {
    id: 0,
    name: "sas",
    description: "sus",
  },
]);
</script>
