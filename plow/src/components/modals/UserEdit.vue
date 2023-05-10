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
  </div>
</template>
<script lang="ts" setup>
import { computed, defineComponent, onBeforeMount, reactive, ref } from "vue";
import api from "../../axios";
import type { IDictionary } from "../../models/dictionary.model";
import type { ITask } from "../../models/task.model";
import { Auth } from "../../services/auth.service";
import { useUserStore } from "../../stores/user";

const props = defineProps<{
  userKey: number;
  task: ITask;
}>();

const store = useUserStore();
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
const usersRole = ref();
const duties = ref<Array<IDictionary>>();
const exps = ref<Array<IDictionary>>();

async function userRole() {
  usersRole.value = await api.get("/getAllUserRoles").then((res) => res.data);
}

async function createUser() {
  const { Key } = await api
    .post("/editUser/", {
      ...userInfo,
    })
    .then((res) => res.data);
  await api.post("/addRole", {
    dutyKey: userInfo.duty,
    physKey: Key,
    expKey: userInfo.exp,
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
  userRole();
  duties.value = await api.get("/getDictionary/duty").then((res) => res.data);
  exps.value = await api.get("/getDictionary/exp").then((res) => res.data);
});
</script>
