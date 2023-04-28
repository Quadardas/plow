<template>
  <form action="">
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
      <option v-for="type in typeOptions" :key="type.Key" :value="type.Name">
        {{ type.Name }}
      </option>
    </select>
    <span
      >Дата открытия задачи:
      {{ new Date(taskInstance.OpenDate).toLocaleDateString("ru-RU") }}</span
    >
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
      <p>Стаж: {{ taskInstance.worker?.DutyName }}</p>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import api from "../../axios";
import type { ITask } from "../../models/task.model";
import type { IDictionary } from "../../models/dictionary.model";

const props = defineProps<{
  task: ITask;
}>();

const selectedPriority = ref(props.task.PriorityName);
const taskInstance = ref(props.task);
const priorityOptions = ref<Array<IDictionary>>();
const typeOptions = ref<Array<IDictionary>>();
const selectedType = ref(props.task.type.Name);
const date = new Date(taskInstance.value.OpenDate).toLocaleDateString("ru-RU");
onBeforeMount(async () => {
  priorityOptions.value = await api
    .get("/getDictionary/priority")
    .then((res) => res.data);
  typeOptions.value = await api
    .get("/getDictionary/task_type")
    .then((res) => res.data);
});
</script>
<style lang="scss">
form {
  max-width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  height: 60%;
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
