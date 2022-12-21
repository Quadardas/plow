<template>
  <div>
    <Header />
    <TaskCard :tasks="tasks" />
    <!-- <WorkerCard v-for="worker in workers" :work="worker" :key="worker.id" /> -->
    <RulesItem v-for="rule in rules" :rule="rule" :key="rule.id" />
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import TaskCard from "@/components/TaskCard.vue";
import { ref } from "vue";
import type { ITask } from "@/models/task.model";
import WorkerCard from "@/components/WorkerCard.vue";
import type { IWorker } from "@/models/worker.model";
import { WORKERS } from "@/constants/workers.const";
import RulesItem from "@/components/RulesItem.vue";
import type { ITreeRule } from "@/models/rule.model";
import { RULES } from "@/constants/rules.const";

const rules = ref<Array<ITreeRule>>(RULES);
const workers = ref<Array<IWorker>>(WORKERS);
const tasks = ref<Array<ITask>>(
  WORKERS.reduce((acc: Array<ITask>, worker) => {
    acc.push(...worker.tasks);
    return acc;
  }, [])
);
</script>
