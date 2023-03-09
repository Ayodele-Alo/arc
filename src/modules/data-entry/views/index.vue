<template>
  <div class="main d-flex flex-column">
    <!-- <Header /> -->
    <div class="row align-items-start">
      <!-- <Header /> -->
      <div class="col-2"><SideBar /></div>
      <div class="col-10 form-view">
        <FormHeader />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Header from "../../dashboard/components/Header.vue";
import FormHeader from "../components/FormHeader.vue";
import SideBar from "../components/SideBar.vue";

export default defineComponent({
  name: "indexHome",
  components: {
    FormHeader,
    SideBar,
    // Header
  },
});
</script>

<style scoped>
.form-view {
  background-color: #f9f9f9;
    padding: 20px;
}

.main {
  background-color: #f9f9f9;
  position: relative;

}
</style>

<style lang="scss"></style>
