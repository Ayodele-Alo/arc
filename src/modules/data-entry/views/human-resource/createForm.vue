<template>
  <div>

    <div class="mb-3 text-start">
      <label for="exampleInputEmail1" class="form-label">Theme name</label>
      <input
        type="email"
        class="form-control theme-name-input"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Input details"
      />
      <div id="emailHelp" class="form-text">
        This document includes Annual Performance Review Report for 2022. It
        also highlights the Annual Work Plans 2023 for the theme.
      </div>
    </div>
    <br /><br />

    <div class="text-start">
      <span class="annual-text1">1. Human Resource Report Tool</span>
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
<span>A. Human Resource</span>
      <i class="fa fa-angle-down fs-6 " aria-hidden="true"></i>
      
    </div>

    <div class="collapse" id="collapseExample">
      <humanResource />
    </div>

    <div class="section-header text-start">
      <span>B. Publications</span>
        <i class="fa fa-angle-down fs-6 " aria-hidden="true"></i>
    </div>

    <!-- put publications component here -->
    <PublicationComponent />

    <div class="section-header text-start">
      <span>C. Engagement with policy and decision makers</span>
        <i class="fa fa-angle-down fs-6 " aria-hidden="true"></i>
    </div>

    <!-- Table form1 section -->
    <EngagementComponent />

    <!-- Table form2 section -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import humanResource from "./form-sections/humanResource.vue";
import PublicationComponent from "./form-sections/byCadre.vue";
import EngagementComponent from "./form-sections/humanResource.vue";

export default defineComponent({
  name: "createForm",
  components: {
    humanResource,
    PublicationComponent,
    EngagementComponent,
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

.form-section {
  overflow-y: scroll;
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