<template>
  <div action="">
    <input
      v-model="taskInstance.Name"
      type="text"
      placeholder="Название задачи"
    />
    <input
      v-model="taskInstance.Description"
      type="text"
      placeholder="Описание задачи"
    />
    <select v-model="selectedPriority">
      <option
        v-for="priority in priorityOptions"
        :key="priority.Key"
        :value="priority.Name"
      >
        {{ priority.Name }}
      </option>
    </select>
    <select v-model="selectedType">
      <option v-for="types in typeOptions" :key="types.Key" :value="types.Name">
        {{ types.Name }}
      </option>
    </select>
    <span
      >Дата открытия задачи:
      {{ new Date(taskInstance.OpenDate).toLocaleDateString("ru-RU") }}
    </span>
    <span
      >Планируемая дата закрытия задачи:
      {{
        new Date(taskInstance.PlannedCloseDate).toLocaleDateString("ru-RU")
      }}</span
    >
    <p>Тип: {{ taskInstance.type.Name }}</p>
    <div v-if="taskInstance.worker">
      Информация о работнике <br />
      <span
        >ФИО: {{ taskInstance.worker?.Surname }}
        {{ taskInstance.worker?.Name }} {{ taskInstance.worker?.Patron }}</span
      >
      <p>Стаж: {{ taskInstance.worker?.ExpName }}</p>
    </div>
    <div>
      <input class="time" v-model="taskTime" type="text" />
      <button @click="regTime">hjsorfligh</button>
    </div>
    <div>
      <select v-model="directTask">
        <option v-for="user in userList" :key="user.Key" :value="user.RoleKey">
          {{ user.Name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, watch } from "vue";
import api from "../../axios";
import type { ITask } from "../../models/task.model";
import type { IDictionary } from "../../models/dictionary.model";
import { useUserStore } from "../../stores/user";
import type { IWorkerInfo } from "../../models/worker.model";
import { getNodeWorkers } from "../../utils/getWorkers.util";
import { useRoute } from "vue-router";

const props = defineProps<{
  task: ITask;
}>();

const emits = defineEmits<{
  (e: "update"): void;
}>();

const store = useUserStore();
const selectedPriority = ref(props.task.PriorityName);
const taskInstance = ref(props.task);
const priorityOptions = ref<Array<IDictionary>>();
const typeOptions = ref<Array<IDictionary>>();
const selectedType = ref(props.task.type.Name);
const taskTime = ref();
const date = new Date(taskInstance.value.OpenDate).toLocaleDateString("ru-RU");
const directTask = ref(taskInstance.value?.worker?.RoleKey);
const userList = ref<Array<IWorkerInfo>>([]);
const route = useRoute();

const regTime = async () => {
  await api
    .post("addTimetrack", {
      taskKey: taskInstance.value.TaskKey,
      roleKey: store.user.Role_Key,
      time: taskTime.value,
    })
    .then((res) => res.data);
};

watch(
  () => directTask.value,
  async (newValue) => {
    await api.patch("/updateRoleTask", {
      taskKey: taskInstance.value.TaskKey,
      roleKey: newValue,
    });
    emits("update");
  }
);

onBeforeMount(async () => {
  priorityOptions.value = await api
    .get("/getDictionary/priority")
    .then((res) => res.data);
  typeOptions.value = await api
    .get("/getDictionary/task_type")
    .then((res) => res.data);
  userList.value = await getNodeWorkers(+route.params.id);
});
</script>
<style lang="scss">
form {
  max-width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  height: 60%;
  input {
    height: 30px;
  }
  .time {
    max-height: 20px;
    max-width: 100px;
  }
  select {
    max-width: 110px;
    .placeholder {
      display: none;
    }
  }
  p {
    margin: 0;
  }
}
</style>
