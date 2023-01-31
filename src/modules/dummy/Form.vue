<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="margin: 20px;" class="guy">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="Indicator">
        <el-input v-model="formLabelAlign.indicator" />
      </el-form-item>
      <el-form-item label="Datasource">
        <el-input v-model="formLabelAlign.datasource" />
      </el-form-item>
      <el-button type="success" class="button" plain>Success</el-button>
    </el-form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
//   import 
  
  const labelPosition = ref('right')
  
  const formLabelAlign = reactive({
    indicator: '',
    datasource: '',
  })
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
