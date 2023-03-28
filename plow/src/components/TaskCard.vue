<template>
  <div class="tasks">
    <div class="task-card my-style">
      <!-- <h4>{{ task?.id }}</h4> -->
      <p>{{ task?.name }}</p>
      <p>{{ task?.description }}</p>
      <p>Исполнитель:{{ task?.worker }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ITask } from "@/models/task.model";
import type { IWorker } from "@/models/worker.model";
import { ref } from "vue";

defineProps<{
  task: ITask;
  worker: IWorker;
}>();
const choseTasks = ref(false);
</script>

<style lang="scss" scoped>
.tasks {
  .task-card {
    height: fit-content;
    width: 500px;
    margin-top: 10px;
    margin-left: 20px;
    // display: flex;
    justify-content: space-between;
    align-content: center;
    border: 1px solid;
    p {
      padding: 3px 5px;
    }
  }
}

button {
  height: fit-content;
}
</style>
