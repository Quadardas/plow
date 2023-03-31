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
      <TaskCard
        v-for="(task, key) in spreadedTasks"
        :key="key"
        :task="task"
        @click="onTaskClick(task)"
      />
      <Modal :show="showTask" @close="showTask = false">
        <template #header>
          <h3>Просмотр задачи</h3>
        </template>
        <template #body>
          <EditTask :task="selectedTask" />
        </template>
      </Modal>
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
    </div>
    <div v-else>
      <div v-if="!unSpreadedTasks">нет задач</div>
      <div v-else>
        <TaskCard
          v-for="(task, key) in unSpreadedTasks"
          :key="key"
          :task="task"
        />
        <button>Распределить</button>
      </div>
    </div>
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
import Modal from "@/components/modals/Modal.vue";
import CreateTask from "@/components/modals/CreateTask.vue";
import { TASKS } from "@/constants/tasks.const";
import EditTask from "@/components/modals/EditTask.vue";

// const taskList = computed(() =>
//   workers.value
//     ?.map((worker) =>
//     ({
//       ...worker,
//       tasks: worker.tasks.map((task) => ({
//         ...task,
//         worker: worker.name,
//       })),
//     }))
//     .reduce((acc, worker) => [...acc, ...worker.tasks], [])
// );

const rules = ref<Array<ITreeRule>>(RULES);
const workers = ref<Array<IWorker>>(WORKERS);
const tasks = ref<Array<ITask>>(TASKS);
const showModal = ref(false);
const showTask = ref(false);
const firstActive = ref(true);
const taskList = computed(() => tasks.value);
const selectedTask = ref();
const spreadedTasks = computed(() =>
  tasks.value.filter((task, index) => task.worker)
);
const unSpreadedTasks = computed(() =>
  tasks.value.filter((task) => !task.worker)
);

function onTaskClick(task) {
  selectedTask.value = task;
  showTask.value = true;
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .select__tasks {
    margin-top: 15px;
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
