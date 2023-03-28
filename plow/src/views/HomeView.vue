<template>
  <div class="home">
    <div class="select__tasks">
      <h2 @click="firstActive = true" :class="{ selected: firstActive }">
        Распределенные задачи
      </h2>
      <h2 @click="firstActive = false" :class="{ selected: !firstActive }">
        Нераспределенные задачи
      </h2>
    </div>
    <div v-if="firstActive">
      <TaskCard v-for="(task, key) in taskList" :key="key" :task="task" />
      <button @click="showModal = true">Создать задачу</button>
      <!-- use the modal component, pass in the prop -->
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Создание задачи</h3>
        </template>
        <template #body>
          <CreateTask />
        </template>
      </Modal>
      <button>Распределить</button>
    </div>
    <div v-else>sas</div>
  </div>
</template>
g

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
import Modal from "@/components/modals/Modal.vue";
import CreateTask from "@/components/modals/CreateTask.vue";

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
const showModal = ref(false);
const firstActive = ref(false);
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .select__tasks {
    width: 100%;
    display: flex;
    h2 {
      color: grey;
      margin: 5px 20px;
    }
    :hover {
      cursor: pointer;
    }
    .selected {
      color: #333;
    }
  }
  button {
    margin: 10px 20px;
  }
}
</style>
