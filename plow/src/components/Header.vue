<template>
  <div class="header">
    <div class="logo">
      <h1 style="margin-top: 5px; margin-bottom: 0px">FlowTask</h1>
    </div>
    <div class="header__list">
      <ul>
        <li class="header__link">
          <router-link to="" class="">Список задач</router-link>
        </li>
        <li class="header__link">
          <router-link to="create">Создать задачу</router-link>
        </li>
        <li class="header__link">
          <router-link to="login">Авторизация</router-link>
        </li>
        <li class="header__link">
          <router-link to="">F.A.Q</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  height: 50px;
  background-color: rgb(255, 103, 242);
  padding: 5px 50px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__list {
    display: flex;

    ul {
      list-style: none;
      display: flex;

      .header__link {
        color: black;
        cursor: pointer;
        margin-left: 14px;

        a {
          text-decoration: none;
        }

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  .logo {
    width: 120px;
  }
}
</style>
