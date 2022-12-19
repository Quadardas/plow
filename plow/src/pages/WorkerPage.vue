<template>
  <div class="workers">
    
  </div>
</template>
<script lang="ts">
import Header from "../components/Header.vue";
import TaskCard from "@/components/TaskCard.vue";
import { ref } from "vue";
import type { ITask } from "@/models/task.model";
import type { IWorker } from "@/models/worker.model";
import { WORKERS } from "@/constants/workers.const";

const workers = ref<Array<IWorker>>(WORKERS);
</script>
