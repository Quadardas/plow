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
    <select>
      <option class="placeholder" selected disabled value="">Приоритет</option>
      <option value="">Низкий</option>
      <option value="">Высокий</option>
      <option value="">Наивысший</option>
    </select>
    <select>
      <option class="placeholder" selected disabled value="">
        Направление
      </option>
      <option value="">Низкий</option>
      <option value="">Высокий</option>
      <option value="">Наивысший</option>
    </select>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ITask } from "../../models/task.model";
const props = defineProps<{
  task: ITask;
}>();

const taskInstance = ref(props.task);
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
}
</style>
