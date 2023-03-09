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
      `%c 👋🏽, Welcome to the APHRC PLATFORM! \n\n \r\r APHRC is a platform for the sharing of ideas and innovations in the field of education and research.!`,
      "color: #ccc; font-family:sans-serif; font-size: 1rem; padding-left: 1rem"
    );
  },
});
</script>
