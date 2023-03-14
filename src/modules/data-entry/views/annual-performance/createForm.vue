<template>
  <div>

        <div class="position-fixed bottom-0 end-0">
      <button class="submit-btn" @click.prevent="submitForm()">Submit Form</button>
      <button class="save-btn">Save to draft</button>
    </div> 
    <div class="mb-3">
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
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapseExample">
      <strategicOutcomes :bus="bus" />
    </div>


        <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse2"
    >
       <span>B. Publications</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse2">
        <PublicationComponent />
    </div>

       <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse3"
    >
       <span>C. Engagement with policy and decision makers</span>
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
       <span>D. Annual Performance against the work plans</span>
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
        <span>E. Additional achievements or updates:</span>
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
        <span>F. Challenges and Lessons Learnt</span>
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
        <span>G. Business Development</span>
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
        <span>H. New opportunities identified during the year</span>
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
        <span>I. Additional achievements or updates:</span>
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
       <span>J. Risk Identified</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse10">
              <RiskIdentified />
    </div>


    <div class="">
      <h1 class="header-2">2. Annual Work Plan 2023</h1>
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
                <MajorActivitesPlanned />
    </div>


           <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse115"
    >
         <span>B. 2023 Projects</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse115">
                 <annualProjects />
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
                 <PlanAndTargetComponent />
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
                 <EngagementAndPolicy />
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
                 <CollaborationsAndPartnership />
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
                <BusinessDevelopmentAndFunding />
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
                <StafflingNeed />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import strategicOutcomes from "./form-sections/strategicOutcomes.vue";
import PublicationComponent from "./form-sections/publications.vue";
import EngagementComponent from "./form-sections/engagement.vue";
// import AnnualPerformanceComponent from "./form-sections/annualPerformance.vue";
// import AnnualPerformanceComponent from "./form-sections/annualPerformance.vue";
import AdditionalAchivementsComponemt from "./form-sections/additionalAchivements.vue";
import ChallengesAndLesson from "./form-sections/challengeAndLesson.vue";
import BusinessDevelopment from "./form-sections/businessDevelopment.vue";
import NewOpportunities from "./form-sections/newOppotunities.vue";
import AchivementsComponent from "./form-sections/Achivements.vue";
import RiskIdentified from "./form-sections/riskIdentified.vue";
import MajorActivitesPlanned from "./form-sections/majorActivitiesPlanned.vue";
import annualProjects from "./form-sections/annualProjects.vue";
import PlanAndTargetComponent from "./form-sections/planAndTarget.vue";
import EngagementAndPolicy from "./form-sections/engagementAndPolicy.vue";
import CollaborationsAndPartnership from "./form-sections/collaborationsAndPartnership.vue";
import OpportunitiesAndNewInitiatives from "./form-sections/opportunitesAndNewInitiatives.vue";
import BusinessDevelopmentAndFunding from "./form-sections/businessDevelopmentAndFunding.vue";
import StafflingNeed from "./form-sections/stafflingNeed.vue";

export default defineComponent({
  name: "createForm",
  components: {
    strategicOutcomes,
    PublicationComponent,
    EngagementComponent,
    // AnnualPerformanceComponent,
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
