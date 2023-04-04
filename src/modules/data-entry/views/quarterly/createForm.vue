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
            <option value="Policy Engagement and Communication (PEC)">
              Policy Engagement and Communication (PEC)
            </option>
            <option value="Population Dynamics and Urbanization (PDU)">
              Population Dynamics and Urbanization (PDU)
            </option>
            <option value="Operations (OPU)">Operations (OPU)</option>
            <option value="Human Development (HD)">
              Human Development (HD)
            </option>
            <option value="Health and Wellbeing (HaW)">
              Health and Wellbeing (HaW)
            </option>
            <option value="Data Science and Evaluation (DSE)">
              Data Science and Evaluation (DSE)
            </option>
            <option value="Human Resource">Human Resource</option>
            <option value="Research Related">Research Related</option>
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="quarter"
          >
            <option value="" disabled>--Select Quarter--</option>
            <option value="Quarter 1">Quarter 1</option>
            <option value="Quarter 2">Quarter 2</option>
            <option value="Quarter 3">Quarter 3</option>
            <option value="Quarter 4">Quarter 4</option>
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="year"
          >
            <option value="" disabled>--Select Year--</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div>

    <div class="position-fixed bottom-0 end-0">
      <button class="submit-btn" @click.prevent="submitForm()">
        Submit Form
      </button>
      <button @click="saveToDraft()" class="save-btn">Save to draft</button>
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
      <EngagementComponent period="quarterly" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse4"
    >
      <span>B. Quarterly Performance against the work plans</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse4">
      <AnnualPerformanceComponent period="quarterly" />
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
      <AdditionalAchivementsComponemt period="quarterly" />
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
      <ChallengesAndLesson period="quarterly" />
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
      <BusinessDevelopment period="quarterly" />
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
      <NewOpportunities period="quarterly" />
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
      <AchivementsComponent period="quarterly" />
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
      <RiskIdentified period="quarterly" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
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
  data() {
    return {
      theme_name: "Policy Engagement and Communication (PEC)",
      quarter: "Quarter 1",
      year: "2023",
    };
  },

  setup() {
    const toast = (title, desc, type) => {
      createToast(
        {
          title: title,
          description: desc,
        },
        {
          type: type,
          transition: "zoom",
          hideProgressBar: true,
          showIcon: true,
          timeout: 3000,
          position: "top-right",
        }
      );
    };
    return {
      toast,
    };
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
    ...mapActions(["SUBMIT_FORM"]),

    submitForm() {
      const data = {
        component: "quarterly",
        theme: this.theme_name,
        year: this.year,
        quarter: this.quarter,
      };
      this.toast("Success", "Form submitted successfully", "success");
      this.SUBMIT_FORM(data);
      // console.log("hello");
    },
    saveToDraft() {
      this.toast("Success", "Form saved to draft", "success");
    },
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
