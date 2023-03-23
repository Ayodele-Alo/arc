<template>
  <section class="px-1">
    <Header />
    <div class="my-5 pt-5 pb-3 px-lg-5 container-fluid">
      <router-view />
    </div>
    <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "Dashboard-Page",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(
      `%c 👋🏽, WELCOME TO APHRC M&E PLATFORM`,
      "color: #ccc; font-family:sans-serif; font-size: 1rem; padding-left: 1rem"
    );
  },
});
</script>
