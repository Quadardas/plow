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
    <button @click="createUser" :disabled="!isChecked">Создать</button>
  </div>
  <div class="user-list">
    <div v-for="user in usersList" :key="user.Key">{{ user.Name }}</div>
  </div>
  <div class="user-list">
    <div v-for="user in usersRole" :key="user.Key">{{ user.Surname }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, onBeforeMount, reactive, ref } from "vue";
import api from "../axios";
import type { IDictionary } from "../models/dictionary.model";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";

const store = useUserStore();
const isChecked = computed(
  () =>
    userInfo.surname &&
    userInfo.name &&
    userInfo.patron &&
    userInfo.login &&
    userInfo.password &&
    userInfo.duty &&
    userInfo.exp
);
const userInfo = reactive({
  surname: "",
  name: "",
  patron: "",
  login: "",
  password: "",
  duty: "",
  exp: "",
});
const usersList = ref();
const usersRole = ref();
const duties = ref<Array<IDictionary>>();
const exps = ref<Array<IDictionary>>();

async function userList() {
  usersList.value = await api.get("/getAllUsers").then((res) => res.data);
}

async function userRole() {
  usersRole.value = await api.get("/getAllUserRoles").then((res) => res.data);
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
}
</style>
