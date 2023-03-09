<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted } from "vue";

const status = inject("internetStatus");

onMounted(() => {
  console.log({ status });
});
</script>
