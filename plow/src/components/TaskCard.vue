<template>
  <div
    v-for="task in tasks"
    class="task-card my-style"
  >
    <h4>{{ task?.id }}</h4>
    <p>{{ task?.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { ITask } from "@/models/task.model";

defineProps<{
  tasks: Array<ITask>;
}>();
</script>

<style>
.task-card {
  max-width: 500px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: 1px solid;
}
</style>
