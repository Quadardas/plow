<template>
  <div class="wrapper">
    <Loader v-if="isDataLoading" />
    <div class="wrapper__page" v-show="!isDataLoading">
      <NodeTasks :workers="workers" />
      <NodeUsers :workers="workers" @update="getWorkers" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";
import { useRoute } from "vue-router";
import { getNodeWorkers } from "../utils/getWorkers.util";
import type { IWorkerInfo } from "../models/worker.model";
import NodeUsers from "../components/NodeUsers.vue";
import NodeTasks from "../components/NodeTasks.vue";
import Loader from "../components/modals/Loader.vue";

const isDataLoading = ref(false);
const store = useUserStore();
const route = useRoute();
const workers = ref<Array<IWorkerInfo>>([]);

async function getWorkers() {
  isDataLoading.value = true;
  workers.value = await getNodeWorkers(+route.params.id);
  isDataLoading.value = false;
}

onBeforeMount(async () => {
  if (!store.isLogin) await Auth.refresh();
  await getWorkers();
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

  &__page {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
