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
        <div>
          <button @click="showModal = true">Добавить пользователя</button>
          <Modal
            :show="showModal"
            :modalComponent="AddUserToProject"
            @close="showModal = false"
            hideOkButton
          >
            <template #header>
              <h3>Добавление пользователя к проекту</h3>
            </template>
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskCard from "../components/TaskCard.vue";
import { computed, onBeforeMount, ref } from "vue";
import type { ITask } from "@/models/task.model";
import type { ITreeRule } from "@/models/rule.model";
import { RULES } from "@/constants/rules.const";
import Modal from "../components/modals/Modal.vue";
import CreateTask from "@/components/modals/CreateTask.vue";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";
import { useRoute } from "vue-router";
import api from "../axios";
import { DecideTree } from "../services/decideTree.service";
import { getNodeWorkers } from "../utils/getWorkers.util";
import type { IWorkerInfo } from "../models/worker.model";
import { ETreeResult } from "../enums/treeCriteria.enum";
import AddUserToProject from "..//components/modals/AddUserToProject.vue";

const rules = ref<Array<ITreeRule>>(RULES);
const tasks = ref<Array<ITask>>([]);
const showModal = ref(false);
const workers = ref<Array<IWorkerInfo>>();
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

async function onTaskSpread() {
  await Promise.all(
    tasks.value.map(async (task) => {
      const worker = dt.startMethod(task, workers.value ?? []);

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
  await api.get("/getDictionary/duty");

  tasks.value = await api
    .get(`/getNodeTasks/${route.params.id}`)
    .then((res) => res.data);

  workers.value = await getNodeWorkers(+route.params.id);
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
