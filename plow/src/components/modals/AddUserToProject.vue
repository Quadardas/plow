<template>
  <div>
    <div v-for="user in usersList" :key="user.Key">
      {{ user.Name }} {{ user.Surname }} {{ user.Patron }}
      <button @click="onAdd(user.Role?.Key)">Прикрепить</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import api from "../../axios";
import type { IUser } from "../../models/user.model";
import { useRoute } from "vue-router";
import { getNodeWorkers } from "../../utils/getWorkers.util";
import type { IWorkerInfo } from "../../models/worker.model";

const route = useRoute();
const usersList = ref<Array<IUser>>();
const onAdd = async (Key: number) => {
  await api.post("/connectUserNode", {
    roleKey: Key,
    nodeKey: +route.params.id,
  });
  await getUserList();
};
async function getUserList() {
  const worker: Array<IWorkerInfo> = await getNodeWorkers(+route.params.id);
  usersList.value = await api
    .get<Array<IUser>>("/getAllUsers")
    .then((res) =>
      res.data?.filter(
        (user) =>
          !worker?.find((worker) => worker.PhysKey === user.Key) && !!user.Role
      )
    );
}

onBeforeMount(async () => {
  await getUserList();
});
</script>
