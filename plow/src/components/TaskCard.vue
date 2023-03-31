<template>
  <div class="tasks">
    <div class="task-card my-style">
      <!-- <h4>{{ task?.id }}</h4> -->
      <p>{{ task?.name }}</p>
      <p>{{ task?.description }}</p>
      <p>Исполнитель: {{ workerName ?? " Нет" }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ITask } from "@/models/task.model";
import type { IWorker } from "@/models/worker.model";
import { computed, ref } from "vue";
import { TASKS } from "@/constants/tasks.const";
import { WORKERS } from "@/constants/workers.const";

const props = defineProps<{
  task: ITask;
  worker: IWorker;
}>();
const workers = ref<Array<IWorker>>(WORKERS);
const tasks = ref<Array<ITask>>(TASKS);
const workerName = workers.value.find(
  (el: IWorker) => el.id === props.task.worker
)?.name;
const choseTasks = ref(false);
</script>

<style lang="scss" scoped>
.tasks {
  width: fit-content;

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
