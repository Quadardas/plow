<template>
  <div>
    <div class="user-list">
      <div>
        <p>Список пользователей</p>
      </div>
      <div
        class="user"
        v-for="user in workers"
        :key="user.Key"
        @click="onUserEdit(user.Key)"
      >
        <p>{{ user.Name }}</p>
        <p>{{ getRoleName(user.User_Role_Key) }}</p>
      </div>
    </div>
    <Modal
      :show="showModal"
      :modalComponent="UserEdit"
      @close="showModal = false"
      @ok="onUserSave"
      :componentProps="{
        userKey: currentUser,
      }"
    >
      <template #header>
        <h3>Редактирование пользователя</h3>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import UserEdit from "../components/modals/UserEdit.vue";
import Modal from "../components/modals/Modal.vue";
import type { IWorkerInfo } from "../models/worker.model";
import { ref } from "vue";
import api from "../axios";
import { useRoute } from "vue-router";

defineProps<{
  workers: Array<IWorkerInfo>;
}>();

const showModal = ref(false);
const usersList = ref();
const currentUser = ref();
const usersRole = ref();
const route = useRoute();

function onUserEdit(key: number) {
  currentUser.value = key;
  showModal.value = true;
}

function getRoleName(key: number) {
  return usersRole.value?.find((role) => key === role.RoleKey)?.Role_Name;
}

async function onUserSave(user) {
  const userInstance = usersList.value?.find(
    (user) => user.Key === currentUser.value
  )?.Role.Key;

  await api.patch(`/editUser/${currentUser.value}`, {
    ...user,
  });
  await api.patch(`/editRole/${userInstance}`, {
    ...user,
  });
  showModal.value = false;
  userList();
}

async function userList() {
  usersList.value = await api
    .get(`/getNodeUsers/${route.params.id}`)
    .then((res) => res.data);
}
</script>