<template>
  <div>
    <div
      v-for="project in projects"
      :key="project.Key"
      @click="openProject(project.Key)"
    >
      Название проекта {{ project.Name }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../axios";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";

const store = useUserStore();
const projects = ref();
const router = useRouter();

const openProject = (key) => {
  router.push(`/projects/${key}`);
};

onBeforeMount(async () => {
  if (!store.isLogin) await Auth.refresh();
  projects.value = await api
    .get(`getUserNodes/${store.user.Role_Key}`)
    .then((res) => res.data);
});
</script>
