<template>
  <div>
    <div class="select-wrapper px-4">
      <div class="select-item">
        <label for="">Select Theme <span>*</span></label>
        <select
          v-model="theme"
          class="form-select"
          aria-label="Default select example"
        >
          <option disabled selected>Select Theme</option>
          <option value="Policy Engagement and Communication (PEC)">
            Policy Engagement and Communication (PEC)
          </option>
          <option value="Population Dynamics and Urbanization (PDU)">
            Population Dynamics and Urbanization (PDU)
          </option>
          <option value="Operations (OPU)">Operations (OPU)</option>
          <option value="Human Development (HD)">Human Development (HD)</option>
          <option value=">Health and Wellbeing (HaW)">
            Health and Wellbeing (HaW)
          </option>
          <option value="Data Science and Evaluation (DSE)">
            Data Science and Evaluation (DSE)
          </option>
        </select>
      </div>
      <div class="select-item">
        <label for="">Select Year <span>*</span></label>
        <select
          v-model="year"
          class="form-select"
          aria-label="Default select example"
        >
          <option disabled selected>Select Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
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
      <span class="annual-text1">1. Annual Performance Report</span>
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
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapseExample">
      <strategicOutcomes :bus="bus" />
    </div>

    <!-- <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse2"
    > -->
    <!-- <span>B. Publications</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse2">
      <PublicationComponent />
    </div> -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse3"
    >
      <span>B. Engagement with policy and decision makers</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse3">
      <EngagementComponent period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse4"
    >
      <span>C. Annual Performance against the work plans</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse4">
      <AnnualPerformanceComponent period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse5"
    >
      <span>D. Additional achievements or updates:</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse5">
      <AdditionalAchivementsComponemt period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse6"
    >
      <span>E. Challenges and Lessons Learnt</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse6">
      <ChallengesAndLesson period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse7"
    >
      <span>F. Business Development</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse7">
      <BusinessDevelopment period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse8"
    >
      <span>G. New opportunities identified during the year</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse8">
      <NewOpportunities period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse9"
    >
      <span>H. Additional achievements or updates:</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse9">
      <AchivementsComponent period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse10"
    >
      <span>I. Risk Identified</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse10">
      <RiskIdentified period="annually" />
    </div>

    <div class="">
      <h1 class="header-2">2. Annual Work Plan</h1>
      <p class="sub-header-2">
        This annual work plan outlines activities for the theme from the set
        targets highlighted in the strategic plan 2022-2026 as well as
        activities from the projects’ annual work plans 2023.
      </p>
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse11"
    >
      <span>A. Major planned activities aligned to the Strategic Plan</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse11">
      <MajorActivitesPlanned period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse115"
    >
      <span>B. Projects for the next year</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse115">
      <annualProjects period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse12"
    >
      <span>C. Plans and targets for the year</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse12">
      <PlanAndTargetComponent period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse13"
    >
      <span>D. Engagements with policy and decision makers</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse13">
      <EngagementAndPolicy period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse14"
    >
      <span>E. Collaborations, Partnerships and Alliances for 2023:</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse14">
      <CollaborationsAndPartnership period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse15"
    >
      <span>F. Opportunities and new initiatives for 2023</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse15">
      <OpportunitiesAndNewInitiatives />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse16"
    >
      <span>G. Business Development and funding</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse16">
      <BusinessDevelopmentAndFunding period="annually" />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse17"
    >
      <span>G. Staffing Needs and Proposed Staff Time Allocation</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse17">
      <StafflingNeed period="annually" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import strategicOutcomes from "../form-sections/strategicOutcomes.vue";
// import PublicationComponent from "./form-sections/publications.vue";
import EngagementComponent from "../form-sections/engagement.vue";
import AnnualPerformanceComponent from "../form-sections/annualPerformance.vue";
// import AnnualPerformanceComponent from "./form-sections/annualPerformance.vue";
import AdditionalAchivementsComponemt from "../form-sections/additionalAchivements.vue";
import ChallengesAndLesson from "../form-sections/challengeAndLesson.vue";
import BusinessDevelopment from "../form-sections/businessDevelopment.vue";
import NewOpportunities from "../form-sections/newOppotunities.vue";
import AchivementsComponent from "../form-sections/Achivements.vue";
import RiskIdentified from "../form-sections/riskIdentified.vue";
import MajorActivitesPlanned from "../form-sections/majorActivitiesPlanned.vue";
import annualProjects from "../form-sections/annualProjects.vue";
import PlanAndTargetComponent from "../form-sections/planAndTarget.vue";
import EngagementAndPolicy from "../form-sections/engagementAndPolicy.vue";
import CollaborationsAndPartnership from "../form-sections/collaborationsAndPartnership.vue";
import OpportunitiesAndNewInitiatives from "../form-sections/opportunitesAndNewInitiatives.vue";
import BusinessDevelopmentAndFunding from "../form-sections/businessDevelopmentAndFunding.vue";
import StafflingNeed from "../form-sections/stafflingNeed.vue";

export default defineComponent({
  name: "createForm",

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

  data() {
    return {
      theme_name: "",
      month: "",
      theme: "Policy Engagement and Communication (PEC)",
      year: "2023",
    };
  },
  components: {
    strategicOutcomes,
    // PublicationComponent,
    EngagementComponent,
    AnnualPerformanceComponent,
    AdditionalAchivementsComponemt,
    ChallengesAndLesson,
    BusinessDevelopment,
    NewOpportunities,
    AchivementsComponent,
    RiskIdentified,
    MajorActivitesPlanned,
    annualProjects,
    PlanAndTargetComponent,
    EngagementAndPolicy,
    CollaborationsAndPartnership,
    OpportunitiesAndNewInitiatives,
    BusinessDevelopmentAndFunding,
    StafflingNeed,
  },
  methods: {
    ...mapActions(["SUBMIT_FORM"]),

    submitForm() {
      const data = {
        component: "annually",
        theme: this.theme,
        year: this.year,
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

.select-wrapper {
  display: flex;
}
.select-item select {
  width: 100%;
}
.select-item {
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-right: 10px;
}

.select-item span {
  color: red;
}
option {
  font-size: 18px;
  background-color: #ffffff;
  border: 1px solid red !important;
}
</style>
