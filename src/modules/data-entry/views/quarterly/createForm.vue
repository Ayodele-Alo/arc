<template>
  <div>
    <div>
      <div class="row">
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="theme_name"
          >
            <option value="" disabled>--Select Theme--</option>
            <option value="Annually">
              Policy Engagement and Communication (PEC)
            </option>
            <option value="Quarterly">
              Population Dynamics and Urbanization (PDU)
            </option>
            <option value="Yearly">Operations (OPU)</option>
            <option value="Annually">Human Development (HD)</option>
            <option value="Quarterly">Health and Wellbeing (HaW)</option>
            <option value="Yearly">Data Science and Evaluation (DSE)</option>
             <option value="Quarterly">Human Resource</option>
            <option value="Yearly">Research Related</option>
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="quarter"
          >
            <option value="" disabled>--Select Quarter--</option>
           <option value="January">Quarter 1</option>
 <option value="January">Quarter 2</option>
 <option value="January">Quarter 3</option>
 <option value="January">Quarter 4</option>
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="year"
          >
            <option value="" disabled>--Select Year--</option>
            <option value="Annually">2021</option>
            <option value="Quarterly">2022</option>
            <option value="Yearly">2023</option>
          </select>
        </div>
      </div>
    </div>

    <div class="position-fixed bottom-0 end-0">
      <button class="submit-btn" @click.prevent="submitForm()">
        Submit Form
      </button>
      <button class="save-btn">Save to draft</button>
    </div>

    <br /><br />

    <div class="text-start">
      <span class="annual-text1">1. Quarter Performance Report</span>
    </div>


    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse3"
    >
      <span>A. Engagement with policy and decision makers</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse3">
      <EngagementComponent />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse4"
    >
      <span>B. Annual Performance against the work plans</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse4">
      <AnnualPerformanceComponent />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse5"
    >
      <span>C. Additional achievements or updates:</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse5">
      <AdditionalAchivementsComponemt />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse6"
    >
      <span>D. Challenges and Lessons Learnt</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse6">
      <ChallengesAndLesson />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse7"
    >
      <span>E. Business Development</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse7">
      <BusinessDevelopment />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse8"
    >
      <span>F. New opportunities identified during the year</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse8">
      <NewOpportunities />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse9"
    >
      <span>G. Additional achievements or updates:</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse9">
      <AchivementsComponent />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse10"
    >
      <span>H. Risk Identified</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse10">
      <RiskIdentified />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EngagementComponent from "../form-sections/engagement.vue";
import AnnualPerformanceComponent from "../form-sections/annualPerformance.vue";
// import AnnualPerformanceComponent from "./form-sections/annualPerformance.vue";
import AdditionalAchivementsComponemt from "../form-sections/additionalAchivements.vue";
import ChallengesAndLesson from "../form-sections/challengeAndLesson.vue";
import BusinessDevelopment from "../form-sections/businessDevelopment.vue";
import NewOpportunities from "../form-sections/newOppotunities.vue";
import AchivementsComponent from "../form-sections/Achivements.vue";
import RiskIdentified from "../form-sections/riskIdentified.vue";

export default defineComponent({
  name: "createForm",
  data(){
    return{
      theme_name: "",
      quarter: "",
      year: ""
    }
  },
  components: {
    // PublicationComponent,
    EngagementComponent,
    AnnualPerformanceComponent,
    AdditionalAchivementsComponemt,
    ChallengesAndLesson,
    BusinessDevelopment,
    NewOpportunities,
    AchivementsComponent,
    RiskIdentified,
    
  },
  methods: {
    // submitForm(){
    // }
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
