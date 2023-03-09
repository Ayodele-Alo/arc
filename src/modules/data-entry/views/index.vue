<template>
    <div class=" container-fluid">
  <div class="main d-flex flex-column">
    <!-- <Header /> -->
    <div class="row align-items-start">
      <div class="col-3"><SideBar /></div>
      <div class="col-9 form-view">
        <FormHeader />
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Header from "../components/SideBar.vue";
import SideBar from "../components/SideBar.vue";
import FormHeader from "../../dashboard/components/Header.vue";

export default defineComponent({
  name: "indexHome",
  components: {
    FormHeader,
    SideBar,
    // Header,
  },
});
</script>

<style scoped>
.form-view {
  background-color: #f9f9f9;
  margin-top: 25px;
}

.main {
  background-color: #f9f9f9;
  z-index: 10;
  position: relative;
  top: 10vh;
}
</style>

<style lang="scss"></style>
