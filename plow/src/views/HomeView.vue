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
      <TaskCard v-for="(task, key) in spreadedTasks" :key="key" :task="task" />
      <button @click="showModal = true">Создать задачу</button>
      <Modal
        :show="showModal"
        :modalComponent="CreateTask"
        @close="showModal = false"
        @ok="createTask"
      >
        <template #header>
          <h3>Создание задачи</h3>
        </template>
      </Modal>
      <!-- <button @click="postButton">dfgdsg</button> -->
    </div>
    <div v-else>
      <div v-if="!unspreadedTasks?.length">нет задач</div>
      <div v-else>
        <TaskCard
          v-for="(task, key) in unspreadedTasks"
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
import { computed, inject, onBeforeMount, ref } from "vue";
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
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";
import { useRoute } from "vue-router";
import api from "../axios";
import { DecideTree } from "../services/decideTree.service";

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
const tasks = ref<Array<ITask>>([]);
const showModal = ref(false);
const workers = ref();
const firstActive = ref(true);
const taskList = computed(() => tasks.value);
const selectedTask = ref();
const showTask = ref(false);
const store = useUserStore();
const route = useRoute();
const spreadedTasks = computed(() =>
  tasks.value?.filter((task, index) => task.worker)
);
const unspreadedTasks = computed(() =>
  tasks.value?.filter((task) => !task.worker)
);
const dt = new DecideTree();

// async function postButton() {
//   await api.post(`/addDictionary/task_type`, {
//     name: "Backend",
//     shName: "Bc",
//   });
// }

async function loadData() {
  tasks.value = await api
    .get(`/getNodeTasks/${route.params.id}`)
    .then((res) => res.data);
  workers.value = await api
    .get(`/getNodeUsers/${route.params.id}`)
    .then((res) => res.data);
  workers.value = await Promise.all(
    workers.value.map(async (el) => {
      const tasks = await api
        .get(`/getUserTasks/${el.PhysKey}?nodeKey=${route.params.id}`)
        .then((res) => res.data);
      const times = await api
        .get(`/getTimetrack/${el.RoleKey}`)
        .then((res) => res.data);
      const timesLength = times?.length;
      const avgTime =
        times?.reduce((acc, val) => (acc = acc + val.Time), 0) / timesLength;

      return {
        ...el,
        tasks,
        avgTime: dt.getAvgTimeValue(avgTime),
      };
    })
  );
}

async function createTask(Event) {
  await api.post("/addTask", {
    ...Event,
  });
  showModal.value = false;
  await loadData();
}
onBeforeMount(async () => {
  if (!store.isLogin) await Auth.refresh();
  await loadData();
});
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
