<template>
  <div>
    <Header />
    <div class="container">
      <form action="">
        <input type="text" placeholder="Название задачи" />
        <input type="text" placeholder="Описание задачи" />
        <select>
          <option value="">Низкий</option>
          <option value="">Высокий</option>
          <option value="">Наивысший</option>
        </select>
        <button type="submit">Создать</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue";
</script>
<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  form {
    max-width: 500px;
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
}
</style>
