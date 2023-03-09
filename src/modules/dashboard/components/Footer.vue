<template>
  <footer>
    <h6>Built with 🤍 by ehealth4everyone</h6>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer-Layout",
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
footer {
  background: #000000db;
  height: 1rem;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  h6 {
    font-size: 0.9rem;
    font-family: Montserrat;
    font-weight: bold;
    letter-spacing: 0;
    color: #ffffff;
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
}
</style>
