<template>
  <div class="mt-4">
    <div class="mb-3 text-start">
      <p class="fw-bold text-secondary mb-1">1. Human Resource Report Tool</p>
      <small class="text-secondary">This report gives an annual summary of the status of the Center in terms of human Resource guided by the strategic plan 2022-2026</small>
    </div>

    <div>
      <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
    >
      <span>A. Human Resource</span>
    </div>

    <div class="collapse" id="collapseExample">
      <humanResource />
    </div>
    </div>

    <div>
      <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample2"
    >
      <span>B. By Cadre</span>
    </div>

    <div class="collapse" id="collapseExample2">
      <byCadre />
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import humanResource from './form-sections/humanResource.vue'
import byCadre from './form-sections/byCadre.vue'
import humanResourceRecruitmentProcess from './form-sections/humanResourceRecruitmentProcess.vue'
import sensitizationMeeting from './form-sections/sensitizationMeeting.vue'
import systemThinkingApproach from './form-sections/systemThinkingApproach.vue'

export default defineComponent({
  name: "createForm",
  components: {
    humanResource,
    byCadre,
    // humanResourceRecruitmentProcess,
    // sensitizationMeeting,
    // systemThinkingApproach
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
