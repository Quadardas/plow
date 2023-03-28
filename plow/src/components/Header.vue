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
          <router-link to="login">Авторизация</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
    padding: 0 10px;

    ul {
      list-style: none;

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
      }
    }
  }

  .logo {
    width: 120px;
    padding: 0 0 20px 4px;
  }
}
</style>
