<template>
  <div>
    <div class="user-list">
      <div>
        <p>Список пользователей</p>
      </div>
      <div
        class="user"
        v-for="user in workers"
        :key="user.PhysKey"
        @click="onUserEdit(user.PhysKey)"
      >
        <p>{{ user.Name }}</p>
        <p>{{ user.UserRoleName }}</p>
      </div>
      <div>
        <button @click="showAddUserModal = true">Добавить пользователя</button>
        <Modal
          :show="showAddUserModal"
          :modalComponent="AddUserToProject"
          @close="showAddUserModal = false"
          hideOkButton
        >
          <template #header>
            <h3>Добавление пользователя к проекту</h3>
          </template>
        </Modal>
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
import { onBeforeMount, ref } from "vue";
import api from "../axios";
import { useRoute } from "vue-router";
import AddUserToProject from "..//components/modals/AddUserToProject.vue";

const props = defineProps<{
  workers: Array<IWorkerInfo>;
}>();

const emits = defineEmits<{
  (e: "update"): void;
}>();

const showModal = ref(false);
const showAddUserModal = ref(false);
const currentUser = ref();
const usersRole = ref();

function onUserEdit(key: number) {
  currentUser.value = key;
  showModal.value = true;
}

function getRoleName(key: number) {
  return usersRole.value?.find((role) => key === role.RoleKey)?.Role_Name;
}

async function onUserSave(user) {
  const userInstance = props.workers?.find(
    (user) => user.PhysKey === currentUser.value
  )?.RoleKey;

  await api.patch(`/editUser/${currentUser.value}`, {
    ...user,
  });
  await api.patch(`/editRole/${userInstance}`, {
    ...user,
  });
  showModal.value = false;
  emits("update");
}
</script>

<style lang="scss" scoped>
.wrapper__page {
  .user {
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }
}
</style>