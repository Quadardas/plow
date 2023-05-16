<template>
  <div class="header">
    <div class="logo">
      <h1 style="margin-top: 5px; margin-bottom: 0px">FlowTask</h1>
    </div>
    <div class="header__list" >
      <div v-if="!store.isLogin" />
      <ul v-else>
        <li class="header__link">
          <router-link to="/projects" :class="{ 'router-link-active' : route.path.includes('/projects') }">Проекты</router-link>
        </li>
        <li class="header__link">
          <router-link to="/createUser">Создание Пользователя</router-link>
        </li>
      </ul>
      <div class="header__link button">
        <button @click="buttonClick">
          {{ store.isLogin ? "Выйти" : "Войти" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Modal from "@/components/modals/Modal.vue";
import CreateTask from "@/components/modals/CreateTask.vue";
import { ref } from "vue";
import { Auth } from "../services/auth.service";
import { useUserStore } from "../stores/user";
import { useRoute, useRouter } from "vue-router";
const showModal = ref(false);
const store = useUserStore();
const router = useRouter();
const route = useRoute()

const buttonClick = () => {
  if (store.isLogin) {
    Auth.logOut();
    router.push("/login");
  } else {
    router.push("/login");
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 100vh;
  width: 150px;
  background-color: rgb(32, 136, 255);
  margin: 0;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;

  .header__list {
    display: flex;
    height: 90%;
    padding: 0 10px;
    flex-direction: column;
    justify-content: space-between;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-left: -10px;
      margin-right: -10px;
      padding-left: 0;

      .header__link {
        color: black;
        cursor: pointer;
        padding-bottom: 20px;
        font-size: 20px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        width: 100%;

        &:last-child {
          border-bottom: none;
        }

        a { 
          width: 90%;
          color: #fff;
          text-align: left;
          text-decoration: none;
          margin-left: 10px;
          margin-right: 10px;
          overflow-wrap: break-word;
          display: block;

          &.router-link-active {
            background-color: #ccc;
          }
        }
      }
    }
  }

  .header__link.button {
    button {
      width: 100%;
    }
  }

  .logo {
    width: 120px;
    padding: 0 0 20px 4px;
  }
}
</style>
