<template>
  <div class="create-form">
    <input v-model="userInfo.surname" type="text" placeholder="Фамилия" />
    <input v-model="userInfo.name" type="text" placeholder="Имя" />
    <input v-model="userInfo.patron" type="text" placeholder="Отчество" />
    <input v-model="userInfo.login" type="email" placeholder="Login" />
    <input v-model="userInfo.password" type="text" placeholder="Password" />
    <button @click="createUser" :disabled="!isChecked">Создать</button>
  </div>
  <p>{{ store.userName }}</p>
</template>
<script lang="ts" setup>
import { computed, defineComponent, onBeforeMount, reactive, ref } from "vue";
import api from "../axios";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";
const store = useUserStore();
const isChecked = computed(
  () =>
    userInfo.surname &&
    userInfo.name &&
    userInfo.patron &&
    userInfo.login &&
    userInfo.password
);
const userInfo = reactive({
  surname: "",
  name: "",
  patron: "",
  login: "",
  password: "",
});
async function createUser() {
  await api.post("/createUser", {
    ...userInfo,
  });
  clearInputs();
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

function useUserStore() { throw new Error("Function not implemented."); }
