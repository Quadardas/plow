<template>
  <div class="header">
    <div class="logo">
      <h1 style="margin-top: 5px; margin-bottom: 0px">FlowTask</h1>
    </div>
    <div class="header__list">
      <ul>
        <li class="header__link">
          <router-link to="/projects" class="">Проекты</router-link>
        </li>
        <li class="header__link">
          <router-link to="createUser">Создание Пользователя</router-link>
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
import { useRouter } from "vue-router";
const showModal = ref(false);
const store = useUserStore();
const router = useRouter();

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
  padding: 5px;
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
      padding-left: 5px;

      // display: flex;

      .header__link {
        color: black;
        cursor: pointer;
        padding-bottom: 20px;
        // margin: 5px 14px;
        font-size: 20px;

        a {
          text-decoration: none;
        }
        :hover {
        }
        button {
        }
      }
    }
  }

  .logo {
    width: 120px;
    padding: 0 0 20px 4px;
  }
}
</style>
