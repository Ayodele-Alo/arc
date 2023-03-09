<template>
  <div class="main d-flex flex-column">
     <div class="position-fixed bottom-0 end-0">

      <button class="submit-btn">Submit Form</button>
       <button class="save-btn">Save to draft</button>
     </div>
    <!-- <Header /> -->
    <div class="row align-items-start">
      <!-- <Header /> -->
         <MainHeader />
      <div class="col-2"><SideBar /></div>
      <div class="col-10 form-view">
        <FormHeader />
        <br><br><br>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Header from "../../dashboard/components/Header.vue";
import FormHeader from "../components/FormHeader.vue";
import MainHeader from "../components/MainHeader.vue";
import SideBar from "../components/SideBar.vue";

export default defineComponent({
  name: "indexHome",
  components: {
    FormHeader,
    SideBar,
    MainHeader
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

.submit-btn{
  letter-spacing: var(--unnamed-character-spacing-0);
color: var(--60-bg);
text-align: center;
font: normal normal normal 16px/19px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
background: transparent linear-gradient(180deg, var(--unnamed-color-000000db) 0%, #2C4A13EB 0%, var(--30-) 100%) 0% 0% no-repeat padding-box;
background: transparent linear-gradient(180deg, #000000DB 0%, #2C4A13EB 0%, #61A229 100%) 0% 0% no-repeat padding-box;
padding: 10px;
margin: 10px;
border-radius: 5px;
border: none;
z-index: 10;
}

.save-btn{
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--60-bg);
text-align: center;
font: normal normal normal 16px/19px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
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
