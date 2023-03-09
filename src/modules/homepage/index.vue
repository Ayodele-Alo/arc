<template>
  <section class="container-fluid">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home-Page",
  data() {
    return {};
  },
  mounted() {
    console.log(
      `%c 👋🏽,WELCOME TO APHRC M&E PLATFORM`,
      "color: #ccc; font-family:sans-serif; font-size: 1rem; padding-left: 1rem"
    );
  },
});
</script>
