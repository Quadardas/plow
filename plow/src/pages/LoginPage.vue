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
<script lang="ts" setup>
import { EUserTypes } from '@/enums/userType.enum';
import { useUserStore } from '@/stores/counter';
import axios from 'axios';
import { ref } from 'vue';
import { useCookies } from "vue3-cookies";

const email = ref();
const password = ref();
const cookies = useCookies();

async function jwtLogin() {
  const result = await axios.post('http://19ivt.ru:8080/api/login', {
    Email: email.value,
    Password: password.value,
  })
  
  cookies.cookies.set('token', result.data?.Data?.Token);
  cookies.cookies.set('verify', result.data?.Data?.UserData?.Verify);
  cookies.cookies.set('userkey', result.data?.Data?.UserData?.UserKey);
}

async function chapLogin() {
  const result = await axios.post('http://19ivt.ru:8080/api/login', {
    Email: email.value,
    Password: password.value,
  })

  cookies.cookies.set('salt', result?.data?.salt);
  cookies.cookies.set('N', result?.data?.N);
  cookies.cookies.set('userKey', result?.data?.userkey);
}

async function login() {
  // await jwtLogin();
  await chapLogin();

  const store = useUserStore();
  store.role = EUserTypes.Supervisor;
}
</script>

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
