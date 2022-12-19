<template>
  <div class="login-page">
    <form class="login" @submit.prevent="login">
      <h1>Авторизация</h1>
      <label>Логин</label>
      <input required v-model="email" type="login" placeholder="Логин" />
      <label>Пароль</label>
      <input required v-model="password" type="password" placeholder="Пароль" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.login {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  button {
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
}
</style>
