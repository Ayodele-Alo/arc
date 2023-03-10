<template>
  <div class="">
    <MainHeader />
    <div class="row align-items-start mt-5 pt-lg-5 pt-3">
      <div class="col-2"><SideBar /></div>
      <div class="col-10 form-view my-3">
        <div class="container-lg container-fluid">
          <FormHeader />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormHeader from "../components/FormHeader.vue";
import MainHeader from "../components/MainHeader.vue";
import SideBar from "../components/SideBar.vue";

export default defineComponent({
  name: "indexHome",
  components: {
    FormHeader,
    SideBar,
    MainHeader,
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
