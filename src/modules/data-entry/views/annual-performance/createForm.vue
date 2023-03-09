<template>
  <div>
    <div class="mb-3 text-start">
      <label for="exampleInputEmail1" class="form-label">Theme name</label>
      <input
        type="email"
        class="form-control theme-name-input"
        placeholder="Input details"
      />
      <div id="emailHelp" class="form-text">
        This document includes Annual Performance Review Report for 2022. It
        also highlights the Annual Work Plans 2023 for the theme.
      </div>
    </div>
    <br /><br />

    <div class="text-start">
      <span class="annual-text1">1. Annual Performace Report 2022</span>
    </div>

    <br />
    <div class="text-start annual-text2">
      This report gives a summary of the performance and achievements of the
      theme from the set targets highlighted in the strategic plan 2022-2026 as
      well as performance from the annual work plans for 2021.
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
    >
      <span>A. Strategic Outcomes</span>
        <i class="fa fa-angle-down fs-6 " aria-hidden="true"></i>
      
    </div>

    <div class="collapse" id="collapseExample">
      <strategicOutcomes />
    </div>

    <div class="section-header text-start">
      <span>B. Publications</span>
        <i class="fa fa-angle-down fs-6 " aria-hidden="true"></i>
      
    </div>

     <publications />

    <!-- put publications component here -->

    <div class="section-header text-start">
      <span>C. Engagement with policy and decision makers</span>
        <i class="fa fa-angle-down fs-6 " aria-hidden="true"></i>
      
    </div>

<engagement />
    <!-- Table form1 section -->

    <!-- Table form2 section -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import strategicOutcomes from "./form-sections/strategicOutcomes.vue";
import engagement from "./form-sections/engagement.vue";
import publications from "./form-sections/publications.vue";

export default defineComponent({
  name: "createForm",
  components: {
    strategicOutcomes,
    engagement,
    publications
  },
});
</script>

<style scoped>
.form-card {
  background-color: white;
  height: 20vh;
  width: 70vw;
  padding: 20px;
  background: var(--60-bg) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070ab;
  opacity: 1;
}

.theme-name-input {
  background: #ededed29 0% 0% no-repeat padding-box;
  border: 1px solid #70707087;
  border-radius: 8px;
  opacity: 1;
}

.section-header {
  background-color: #61a229;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.annual-text1 {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--text);
  text-align: left;
  font: normal normal bold 20px/24px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.annual-text2 {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--text);
  text-align: left;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
