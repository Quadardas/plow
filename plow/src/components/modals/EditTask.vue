<template>
  <form action="">
    <input
      v-model="taskInstance.name"
      type="text"
      placeholder="Название задачи"
    />
    <input
      v-model="taskInstance.description"
      type="text"
      placeholder="Описание задачи"
    />
    <select v-model="selectedPriority">
      <option class="placeholder" disabled value="">Приоритет</option>
      <option value="Низкий">Низкий</option>
      <option value="Средний">Средний</option>
      <option value="Высокий">Высокий</option>
      <option value="Наивысший">Наивысший</option>
    </select>
    <select>
      <option class="placeholder" disabled value="">Направление</option>
      <option value="фронт">фронт</option>
      <option value="бэк">бэк</option>
    </select>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ITask } from "../../models/task.model";
const props = defineProps<{
  task: ITask;
}>();

const selectedPriority = ref(props.task.priority);

const taskInstance = ref(props.task);
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
}
</style>
