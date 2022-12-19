<template>
  <div class="work--card">
    <p>{{ work.id }}</p>
    <p>{{ work.info }}</p>
    <p>{{ work.tasks }}</p>
  </div>
</template>
<script lang="ts" setup>
import { WORKERS } from "@/constants/workers.const";
import type { IWorker } from "@/models/worker.model";

defineProps<{
  work: IWorker;
}>();
</script>
