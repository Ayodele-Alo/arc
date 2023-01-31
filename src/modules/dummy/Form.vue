<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="guy">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="dataObject"
      style="max-width: 460px"
      @submit.prevent="handleSubmit"
    >
      <el-form-item label="Indicator">
        <el-input v-model.trim="dataObject.indicator" />
      </el-form-item>
      <el-form-item label="Datasource">
        <el-input v-model.trim="dataObject.datasource" />
      </el-form-item>
      <el-button type="success" class="button" plain
        >Success</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import AuthService from "@/utils/Service";

const labelPosition = ref("right");

const dataObject = reactive({
  indicator: "",
  datasource: "",
});

const handleSubmit = async () => {
  const response = await AuthService.submitData(dataObject);
  console.log(response);
};
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
