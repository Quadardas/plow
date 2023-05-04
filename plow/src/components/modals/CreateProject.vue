<template>
  <input v-model="projectName" type="text" placeholder="Название проекта" />
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const emits = defineEmits<{
  (e: "update:modelValue", value: any): void;
}>();

const projectName = ref();

watch(
  () => projectName.value,
  () => emits("update:modelValue", projectName.value)
);
</script>
