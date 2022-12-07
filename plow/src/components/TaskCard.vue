<template>
  <div class="task-card my-style">
    <div>
      <h4>{{ model.title }}</h4>
      <p>{{ model.description }}</p>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  props: {
    model: {
      required: true,
      default: {
        id: 0,
        title: "Create something",
        description: "code",
        status: false,
      },
    },
  },
  setup() {},
};
</script>
<style>
.task-card {
  max-width: 500px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: 1px solid;
}
</style>
