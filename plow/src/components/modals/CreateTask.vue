<template>
  <form action="">
    <input
      v-model="currentRule.name"
      type="text"
      placeholder="Название задачи"
    />
    <input
      v-model="currentRule.description"
      type="text"
      placeholder="Описание задачи"
    />
    <select v-model="currentRule.priority">
      <option class="placeholder" selected disabled value="">Приоритет</option>
      <option value="Низкий">Низкий</option>
      <option value="Средний">Средний</option>
      <option value="Высокий">Высокий</option>
      <option value="Наивысший">Наивысший</option>
    </select>
    <select v-model="currentRule.type">
      <option class="placeholder" selected disabled value="">
        Направление
      </option>
      <option value="фронт">фронт</option>
      <option value="бэк">бэк</option>
    </select>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  modelValue: any;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: any);
}>();

const currentRule = ref({
  name: "",
  description: "",
  priority: "",
  type: "",
});

watch(
  () => currentRule.value,
  (newValue) => emits("update:modelValue", newValue),
  {
    deep: true,
  }
);
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
