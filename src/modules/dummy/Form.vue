<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="guy">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="dataObject"
      style="max-width: 460px"
      @click.prevent="handleSubmit"
    >
      <el-form-item label="Indicator">
        <el-input v-model.trim="dataObject.indicator" />
      </el-form-item>
      <el-form-item label="Datasource">
        <el-input v-model.trim="dataObject.datasource" />
      </el-form-item>
      <el-button type="success" class="button" plain>Success</el-button>
    </el-form>
    <Hey />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onUnmounted, provide } from "vue";
import { ElNotification } from 'element-plus'
import AuthService from "@/utils/Service";

const labelPosition = ref("right");
const dataObject = reactive({
  indicator: "",
  datasource: "",
});

const handleSubmit = async () => {
  const response = await AuthService.submitData(dataObject);
  return response;
};
const getConnectionStatus = (e: { type: string }) => {
  const { type } = e;
  if (type === "online") {
    ElNotification({
      title: 'Success',
      message: 'Connection Restored',
      type: 'success',
    })
  } else {
    ElNotification({
      title: 'Error',
      message: 'Connection Lost',
      type: 'error',
    })
  }
};
onMounted(() => {
  window.addEventListener("online", getConnectionStatus);
  window.addEventListener("offline", getConnectionStatus);
});
onUnmounted(() => {
  window.removeEventListener("online", getConnectionStatus);
  window.removeEventListener("offline", getConnectionStatus);
});
</script>
<style>
.guy {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  float: right;
}
</style>
