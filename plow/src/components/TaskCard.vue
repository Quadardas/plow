<template>
  <div @click="onTaskClick" class="tasks">
    <div class="task-card my-style">
      <!-- <h4>{{ task?.id }}</h4> -->
      <p>Название задачи: {{ task?.Name }}</p>
      <p>Описание задачи: {{ task?.Description }}</p>
      <p>Исполнитель: {{ task.worker?.Name ?? " Нет" }}</p>
    </div>
    <Modal
      :show="showTask"
      :modal-component="EditTask"
      :component-props="{
        task: selectedTask
      }"
      @close="onClose"
      @ok="onOk"
      @update="onUpdate"
    >
      <template #header>
        <h3>Просмотр задачи</h3>
      </template>
      <template #body>
        <EditTask :task="selectedTask" />
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import type { ITask } from "@/models/task.model";
import type { IWorker } from "@/models/worker.model";
import { ref } from "vue";
import EditTask from "@/components/modals/EditTask.vue";
import Modal from "@/components/modals/Modal.vue";
import api from "../axios";

const selectedTask = ref();
const showTask = ref(false);
const props = defineProps<{
  task: ITask;
  worker: IWorker;
}>();
const emits = defineEmits<{
  (e: "update"): void;
}>();

function onClose() {
  showTask.value = false;
  emits('update')
}

async function onOk(event: ITask): Promise<void> {
  await api.patch(`/editTask/${event.id}`, {
    ...event
  })
  showTask.value = false;
  emits('update');
}

function onUpdate() {
  console.log("asdasd");
}

function onTaskClick() {
  selectedTask.value = props.task;
  showTask.value = true;
}
</script>

<style lang="scss" scoped>
.tasks {
  width: fit-content;

  .task-card {
    height: fit-content;
    width: 500px;
    margin-top: 10px;
    margin-left: 20px;
    // display: flex;
    justify-content: space-between;
    align-content: center;
    border: 1px solid;
    border-radius: 7px;
    p {
      padding: 0 5px;
    }
  }
}

button {
  height: fit-content;
}
</style>
