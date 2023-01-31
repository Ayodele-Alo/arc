<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <form>
        <label>Indicator:</label>
        <input type="text" class="form-input" v-model="indicator">
        <label class="mr-3">Datasource:</label>
        <input type="text" class="form-input" v-model="datasource">
        <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";

// const count = ref(0);

// function increment() {
//   count.value++;
// }
// function getConnectionStatus(e) {
//   const { type } = e;
//   if (type === "online") {
//     alert("Connection restored");
//   } else {
//     alert("Please check your internet connection");
//   }
// }
// onMounted(() => {
//   console.log(`The initial count is ${count.value}.`);
//   window.addEventListener("online", this.getConnectionStatus);
//   window.addEventListener("offline", this.getConnectionStatus);
// });
</script>

<style scoped>
.form-input {
    margin-right: 20px;
}
label {
    margin-right: 10px;
}
</style>
