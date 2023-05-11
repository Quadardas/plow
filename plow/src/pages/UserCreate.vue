<template>
  <div class="create-form">
    <input v-model="userInfo.surname" type="text" placeholder="Фамилия" />
    <input v-model="userInfo.name" type="text" placeholder="Имя" />
    <input v-model="userInfo.patron" type="text" placeholder="Отчество" />
    <input v-model="userInfo.login" type="email" placeholder="Login" />
    <input v-model="userInfo.password" type="text" placeholder="Password" />
    <select v-model="userInfo.duty">
      <option v-for="duty in duties" :key="duty.Key" :value="duty.Key">
        {{ duty.Name }}
      </option>
    </select>
    <select v-model="userInfo.exp">
      <option v-for="exp in exps" :key="exp.Key" :value="exp.Key">
        {{ exp.Name }}
      </option>
    </select>
    <select v-model="userInfo.userRoleKey">
      <option
        v-for="role in usersRole"
        :key="role.RoleKey"
        :value="role.RoleKey"
      >
        {{ role.Role_Name }}
      </option>
    </select>
    <button @click="createUser" :disabled="!isChecked">Создать</button>
  </div>
  <div class="user-list">
    <div
      class="user"
      v-for="user in usersList"
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
  <!-- <div class="user-list">
    <div v-for="user in usersRole" :key="user.Key">{{ user.Surname }}</div>
  </div> -->
</template>

<script lang="ts" setup>
import { computed, defineComponent, onBeforeMount, reactive, ref } from "vue";
import api from "../axios";
import type { IDictionary } from "../models/dictionary.model";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";
import UserEdit from "../components/modals/UserEdit.vue";
import Modal from "@/components/modals/Modal.vue";

const store = useUserStore();
const currentUser = ref();
const showModal = ref(false);
const isChecked = computed(
  () =>
    userInfo.surname &&
    userInfo.name &&
    userInfo.patron &&
    userInfo.login &&
    userInfo.password &&
    userInfo.duty &&
    userInfo.exp &&
    userInfo.userRoleKey
);
const userInfo = reactive({
  surname: "",
  name: "",
  patron: "",
  login: "",
  password: "",
  duty: "",
  exp: "",
  userRoleKey: "",
});
const usersList = ref();
const usersRole = ref();
const duties = ref<Array<IDictionary>>();
const exps = ref<Array<IDictionary>>();

function onUserEdit(key: number) {
  currentUser.value = key;
  showModal.value = true;
}

async function userList() {
  usersList.value = await api.get("/getAllUsers").then((res) => res.data?.filter((user) => user.Role)
  );
}

async function userRole() {
  usersRole.value = await api.get("/getAllUserRoles").then((res) => res.data);
}

function getRoleName(key: number) {
  return usersRole.value?.find((role) => key === role.RoleKey)?.Role_Name
}

async function createUser() {
  const { Key } = await api
    .post("/createUser", {
      ...userInfo,
    })
    .then((res) => res.data);
  await api.post("/addRole", {
    dutyKey: userInfo.duty,
    physKey: Key,
    expKey: userInfo.exp,
  });
  clearInputs();
  userList();
}
async function onUserSave(user) {
  console.log(user)
  const userInstance = usersList.value?.find((user) => user.Key === currentUser.value)?.Role.Key

  await api.patch(`/editUser/${currentUser.value}`, {
    ...user
  })
  await api.patch(`/editRole/${userInstance}`, {
    ...user,
  }) 
  showModal.value = false;   
  userList();
}

function clearInputs() {
  userInfo.surname = "";
  userInfo.name = "";
  userInfo.patron = "";
  userInfo.login = "";
  userInfo.password = "";
}

onBeforeMount(async () => {
  if (!store.isLogin) await Auth.refresh();
  userList();
  userRole();
  duties.value = await api.get("/getDictionary/duty").then((res) => res.data);
  exps.value = await api.get("/getDictionary/exp").then((res) => res.data);
});
</script>

<style lang="scss" scoped>
.create-form {
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: fit-content;

  input {
    margin-bottom: 5px;
  }
  select {
    margin-bottom: 5px;
  }
}

.user-list {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  height: fit-content;
  max-width: 50%;
  .user {
    border: 1px solid;
    margin-bottom: 10px;
    height: 50px;
    width: fit-content inherit;
    padding: 5px;
  }
}
</style>
