<template>
  <div class="container">
    <div class="project-card"
      v-for="project in projects"
      :key="project.Key"
      @click="openProject(project.Key)"
    >
      Название проекта {{ project.Name }}
   
    </div>
    <button class="add-project-btn" @click="showModal = true">Создать проект</button>
    <Modal
      :show="showModal"
      :modalComponent="CreateProject"
      @close="showModal = false"
      @ok="onProjectCreate"
    >
      <template #header>
        <h3>Создание нового проекта</h3>
      </template>
    </Modal>
  
  </div>
  
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../axios";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";
import Modal from "../components/modals/Modal.vue";
import CreateProject from "../components/modals/CreateProject.vue";

const store = useUserStore();
const projects = ref();
const router = useRouter();
const showModal = ref(false);

const openProject = (key: number) => {
  router.push(`/projects/${key}`);
};

const onProjectCreate = async (name: string) => {
  const Key = await api
    .post("/addDictionary/node", {
      name: name,
      shName: "",
    })
    .then((res) => res.data.Key);

  if (!Key) {
    return;
  }
  await api.post("/connectUserNode", {
    roleKey: store.user.Role_Key,
    nodeKey: Key,
  });
  showModal.value = false;
  await loadData();
};
onBeforeMount(async () => {
  if (!store.isLogin) await Auth.refresh();
  await loadData();
});
async function loadData() {
  projects.value = await api
    .get(`getUserNodes/${store.user.Key}`)
    .then((res) => res.data);
}
</script>

<style lang="scss" scoped>

.container {
  // display: flex;
  height: 100%;
  width: 100%;
  margin: 10px;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}
  
.project-card {
  display: flex;
  flex-direction: column;
  height: 75px;
  width: 350px;
  border: 1px solid;
  margin: 10px 20px;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  .edit-project-btn{
    width: fit-content;
    
  }
}
.add-project-btn{
  margin: 10px 20px;
}



</style>
