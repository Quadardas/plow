<template>
  <div class="create-form">
    <input v-model="userInfo.Surname" type="text" placeholder="Фамилия" />
    <input v-model="userInfo.Name" type="text" placeholder="Имя" />
    <input v-model="userInfo.Patron" type="text" placeholder="Отчество" />

    <select v-model="userInfo.DutyName">
      <option v-for="duty in duties" :key="duty.Key" :value="duty.Name">
        {{ duty.Name }}
      </option>
    </select>
    <select v-model="userInfo.ExpName">
      <option v-for="exp in exps" :key="exp.Key" :value="exp.Name">
        {{ exp.Name }}
      </option>
    </select>
    <select v-model="userInfo.User_Role_Key">
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
import { onBeforeMount, ref, watch } from "vue";
import api from "../../axios";
import type { IDictionary } from "../../models/dictionary.model";
import type { ITask } from "../../models/task.model";
import type { IWorkerInfo } from "../../models/worker.model";

const props = defineProps<{
  userKey: number;
  task: ITask;
  user: IWorkerInfo;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
}>();
const userInfo = ref({
  Name: "",
  Surname: "",
  Patron: "",
  DutyName: "",
  ExpName: "",
  User_Role_Key: "",
});

const usersRole = ref();
const duties = ref<Array<IDictionary>>();
const exps = ref<Array<IDictionary>>();

async function userRole() {
  usersRole.value = await api.get("/getAllUserRoles").then((res) => res.data);
}

watch(
  ()=> userInfo.value, 
  ()=>{
    emit('update:modelValue', {
      dutyKey: duties.value?.find((duty) => duty.Name === userInfo.value?.DutyName)?.Key,
      physKey: props.userKey,
      expKey: exps.value?.find((exp) => exp.Name === userInfo.value?.ExpName)?.Key,
      surname: userInfo.value?.Surname, 
      name: userInfo.value?.Name, 
      patron: userInfo.value?.Patron,
      login: userInfo.value?.Login,
      password: userInfo.value?.Password,
      userRoleKey: userInfo.value?.User_Role_Key
    })
  },
  {
    deep: true
  }
)

onBeforeMount(async () => {
  userRole();
  duties.value = await api.get("/getDictionary/duty").then((res) => res.data);
  exps.value = await api.get("/getDictionary/exp").then((res) => res.data);
  userInfo.value = await api.get(`/getUserInfo/${props.userKey}`).then((res) => res.data)
});
</script>
