<template>
  <div class="">
    <!-- <div class="position-fixed bottom-0 end-0">
      <button class="submit-btn">Submit Form</button>
      <button class="save-btn">Save to draft</button>
    </div>  -->
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

.submit-btn {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--60-bg);
  text-align: center;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: transparent
    linear-gradient(
      180deg,
      var(--unnamed-color-000000db) 0%,
      #2c4a13eb 0%,
      var(--30-) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent
    linear-gradient(180deg, #000000db 0%, #2c4a13eb 0%, #61a229 100%) 0% 0%
    no-repeat padding-box;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  z-index: 10;
}

.save-btn {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--60-bg);
  text-align: center;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: var(--unnamed-color-000000) 0% 0% no-repeat padding-box;
  background: #000000 0% 0% no-repeat padding-box;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  z-index: 10;
}
</style>

<style lang="scss"></style>
