<template>
  <div class="home">
    <TaskCard v-for="(task, key) in taskList" :key="key" :task="task" />
    <button>Распределить</button>
  </div>
</template>

<script lang="ts" setup>
import TaskCard from "../components/TaskCard.vue";
import { computed, ref } from "vue";
import type { ITask } from "@/models/task.model";
import WorkerCard from "@/components/WorkerCard.vue";
import type { IWorker } from "@/models/worker.model";
import { WORKERS } from "@/constants/workers.const";
import RulesItem from "@/components/RulesItem.vue";
import type { ITreeRule } from "@/models/rule.model";
import { RULES } from "@/constants/rules.const";

const taskList = computed(() =>
  workers.value
    ?.map((worker) => ({
      ...worker,
      tasks: worker.tasks.map((task) => ({
        ...task,
        worker: worker.name,
      })),
    }))
    .reduce((acc, worker) => [...acc, ...worker.tasks], [])
);
const rules = ref<Array<ITreeRule>>(RULES);
const workers = ref<Array<IWorker>>(WORKERS);
const tasks = ref<Array<ITask>>(
  WORKERS.reduce((acc: Array<ITask>, worker) => {
    acc.push(...worker.tasks);
    return acc;
  }, [])
);
</script>

<style lang="scss" scoped>
button {
  margin: 10px 20px;
}
</style>
