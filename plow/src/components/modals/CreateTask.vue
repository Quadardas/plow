<template>
  <form action="">
    <input v-model="taskName" type="text" placeholder="Название задачи" />
    <input
      v-model="taskDescription"
      type="text"
      placeholder="Описание задачи"
    />
    <select v-model="selectedPriority">
      <option
        v-for="priority in priorityOptions"
        :key="priority.Key"
        :value="priority.Key"
      >
        {{ priority.Name }}
      </option>
    </select>
    <select v-model="selectedType">
      <option v-for="types in typeOptions" :key="types.Key" :value="types.Key">
        {{ types.Name }}
      </option>
    </select>
    <input type="date" v-model="taskOpen" />
    <input type="date" v-model="taskPlanClose" />
  </form>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import api from "../../axios";
import type { IDictionary } from "../../models/dictionary.model";
import type { ITask } from "../../models/task.model";

const props = defineProps<{
  task: ITask;
}>();

const priorityOptions = ref<Array<IDictionary>>();
const typeOptions = ref<Array<IDictionary>>();
const selectedPriority = ref(props.task?.PriorityName);
const taskInstance = ref(props.task);
const selectedType = ref(props.task?.type?.Name);
const taskName = ref();
const taskDescription = ref();
const taskOpen = ref();
const taskPlanClose = ref();
const route = useRoute();

const emits = defineEmits<{
  (e: "update:modelValue", value: any);
}>();

watch(
  () => [
    taskName.value,
    taskDescription.value,
    taskOpen.value,
    taskPlanClose.value,
    selectedType.value,
    selectedPriority.value,
  ],
  (newValue) =>
    emits("update:modelValue", {
      name: taskName.value,
      description: taskDescription.value,
      openDate: taskOpen.value,
      plannedDate: taskPlanClose.value,
      priorityKey: selectedPriority.value,
      nodeKey: +route.params.id,
      typeKey: selectedType.value,
    }),
  {
    deep: true,
  }
);
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
  select {
    max-width: 110px;
    .placeholder {
      display: none;
    }
  }
  input {
    height: 50px;
  }
}
</style>
