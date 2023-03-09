<template>
  <div>
    <!-- Form Header -->
    <div class="row">
      <div class="col">
        <span>
          <span class="text1"> Data Entry Form</span>
          <span class="text2">- Annual Performance</span>
        </span>
      </div>
      <div class="col">
        <div>Select Units</div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input
          type="text"
          placeholder="Annual Perfomrnace Report and pLanning"
        />
      </div>
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Theme name</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <br /><br />
    <span
      >This document includes Annual Performance Review Reoprt for 2022. It also
      highlights the Annual Work Plans 2023 for the theme.</span
    >

    <span>1. Annual Performace Report 2022</span>
    <span
      >Thus report gives a summary of the performance and achievements of the
      themem</span
    >

    <div class="section-header text-start">
      <span>A. Strategic Outcomes</span>
    </div>

    <strategicOutcomes />

    <div class="section-header text-start">
      <span>B. Publications</span>
    </div>

    <!-- put publications component here -->
    <PublicationComponent />

    <div class="section-header text-start">
      <span>C. Engagement with policy and decision makers</span>
    </div>

    <!-- Table form1 section -->
    <EngagementComponent />

    <div class="section-header text-start">
      <span>D. Annual Performance against the work plans</span>
    </div>

    <!-- Table form2 section -->
    <AnnualPerformanceComponent />

    <div class="section-header text-start">
      <span>E. Additional achievements or updates:</span>
    </div>
    <AdditionalAchivementsComponemt />

    <div class="section-header text-start">
      <span>F. Challenges and Lessons Learnt</span>
    </div>
    <ChallengesAndLesson />

    <div class="section-header text-start">
      <span>G. Business Development</span>
    </div>
    <BusinessDevelopment />

    <div class="section-header text-start">
      <span>H. New opportunities identified during the year</span>
    </div>
    <NewOpportunities />

    <div class="section-header text-start">
      <span>I. Additional achievements or updates:</span>
    </div>
    <AchivementsComponent />

    <div class="section-header text-start">
      <span>J. Risk Identified</span>
    </div>
    <RiskIdentified />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import strategicOutcomes from "./form-sections/strategicOutcomes.vue";
import PublicationComponent from "./form-sections/publications.vue";
import EngagementComponent from "./form-sections/engagement.vue";
import AnnualPerformanceComponent from "./form-sections/annaualPerformance.vue";
import AdditionalAchivementsComponemt from "./form-sections/additionalAchivements.vue";
import ChallengesAndLesson from "./form-sections/challengeAndLesson.vue";
import BusinessDevelopment from "./form-sections/businessDevelopment.vue";
import NewOpportunities from "./form-sections/newOppotunities.vue";
import AchivementsComponent from "./form-sections/Achivements.vue";
import RiskIdentified from "./form-sections/riskIdentified.vue";

export default defineComponent({
  name: "createForm",
  components: {
    strategicOutcomes,
    PublicationComponent,
    EngagementComponent,
    AnnualPerformanceComponent,
    AdditionalAchivementsComponemt,
    ChallengesAndLesson,
    BusinessDevelopment,
    NewOpportunities,
    AchivementsComponent,
    RiskIdentified,
  },
});
</script>

<style scoped>
.text1 {
  color: #61a229;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--30-);
  text-align: left;
  font: normal normal normal 40px/49px Montserrat;
  letter-spacing: 0px;
  color: #61a229;
  opacity: 1;
}

.text2 {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--30-);
  text-align: left;
  font: normal normal normal 20px/24px Montserrat;
  letter-spacing: 0px;
  color: #61a229;
  opacity: 1;
}
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

.section-header {
  background-color: #61a229;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
}

.form-section {
  overflow-y: scroll;
}
</style>
