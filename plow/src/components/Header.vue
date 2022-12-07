<template>
  <div class="header">
    <div class="logo">
      <h1 style="margin-top: 5px; margin-bottom: 0px">ABOBA</h1>
    </div>
    <div class="header__list">
      <ul>
        <a href="#" class="header__links">Список задач</a>
      </ul>
      <ul>
        <a href="#" class="header__links">Авторизация</a>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header {
  width: 100%;
  height: 50px;
  background-color: rgb(255, 103, 242);
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: space-between;
}
.header__list {
  display: flex;
}

.header__links {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.logo {
  width: 120px;
}
</style>
