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
        @update="loadData"
      />
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
          @ok="loadData()"
        />
        <button @click="onTaskSpread">Распределить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import api from "../axios";
import { ETreeResult } from "../enums/treeCriteria.enum";
import type { ITask } from "../models/task.model";
import type { IWorkerInfo } from "../models/worker.model";
import { DecideTree } from "../services/decideTree.service";
import CreateTask from "@/components/modals/CreateTask.vue";
import Modal from "../components/modals/Modal.vue";
import TaskCard from "../components/TaskCard.vue";

const props = defineProps<{
  workers: Array<IWorkerInfo>;
}>();

const route = useRoute();
const isDataLoading = ref(false);
const firstActive = ref(true);
const showModal = ref(false);
const tasks = ref<Array<ITask>>([]);
const spreadedTasks = computed(() =>
  tasks.value?.filter((task, index) => task.worker)
);
const unspreadedTasks = computed(() =>
  tasks.value?.filter((task) => !task.worker)
);
const dt = new DecideTree();

async function createTask(Event) {
  await api.post("/addTask", {
    ...Event,
  });
  showModal.value = false;
  await loadData();
}

async function onTaskSpread() {
  await Promise.all(
    tasks.value.map(async (task) => {
      const worker = dt.startMethod(task, props.workers ?? []);

      if (worker !== ETreeResult.Uncalculated) {
        await api.post("/connectRoleTask", {
          taskKey: task.TaskKey,
          roleKey: worker.RoleKey,
        });
      }
    })
  );
  await loadData();
}

async function loadData() {
  isDataLoading.value = true;
  await api.get("/getDictionary/duty");

  tasks.value = await api
    .get(`/getNodeTasks/${route.params.id}`)
    .then((res) => res.data);

  isDataLoading.value = false;
}

onBeforeMount(async () => {
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