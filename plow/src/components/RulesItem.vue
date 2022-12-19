<template>
  <div class="rules">
    <p>{{ rule.id }}</p>
    <p>{{ rule.avgTime }}</p>
    <p>{{ rule.exp }}</p>
    <p>{{ rule.priority }}</p>
    <p>{{ rule.tasksCount }}</p>
    <p>{{ rule.type }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import type { RULES } from "@/constants/rules.const";
import type { ITreeRule } from "@/models/rule.model";

defineProps<{
  rule: ITreeRule;
}>();
</script>
<style scoped>
.rules {
  display: flex;
  margin: 10px;
}
</style>
