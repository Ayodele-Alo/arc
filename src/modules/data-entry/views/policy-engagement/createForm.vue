<template>
  <div>
        <div class="position-fixed bottom-0 end-0">
      <button class="submit-btn" @click.prevent="submitForm()">Submit Form</button>
      <button @click="saveToDraft()" class="save-btn">Save to draft</button>
    </div>
    <div class="text-start mt-4">
      <span class="annual-text1">Policy Engagement Report Tool</span>
      <h1 class="sub-header">
        This tool gives a summary of the annual performance of the theme, guided
        by the strategic plan 2022-2026 as well as performance from the Theme’s
        work plans. Engagement forum by APHRC to inform and provide evidence to
        address policy gaps
      </h1>
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
    >
      <span>A. Human Resource</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapseExample">
      <HumanResourceComponent />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#policyEngagementStrategies"
    >
      <span>B. Policy engagements strategies</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="policyEngagementStrategies">
      <PolicyEngagementStrategies />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#policyBriefsAndFacts"
    >
      <span
        >C. Policy briefs, fact sheets and other material disseminated to policy
        makers.</span
      >
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="policyBriefsAndFacts">
      <PolicyBtiefsAndFacts />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#media"
    >
      <span>D. Media</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="media">
      <MediaComponents />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#policyStrategy"
    >
      <span>E. Policy engagements strategies</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="policyStrategy">
      <PolicyStrategies />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#evidenceInformed"
    >
      <span>F. Evidence informed decision making</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="evidenceInformed">
      <EvidenceDecisionMaking />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#strategicInitiatives"
    >
      <span
        >G. Strategic initiatives implemented on signature issues/ focus areas,
        outside project funding</span
      >
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="strategicInitiatives">
      <StrategicInitiatives />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#recruitmentOfTargetExpertise"
    >
      <span>H. Recruitment of Target expertise</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="recruitmentOfTargetExpertise">
      <RecruitmentOfTargetExpertise />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import HumanResourceComponent from "./form-sections/HumanResource.vue";
import PolicyEngagementStrategies from "./form-sections/PolicyEngagementStrategies.vue";
import PolicyBtiefsAndFacts from "./form-sections/PolicyBriefsAndFacts.vue";
import MediaComponents from "./form-sections/MediaComponent.vue";
import PolicyStrategies from "./form-sections/PolicyStrategies.vue";
import EvidenceDecisionMaking from "./form-sections/EvidenceDecisionMaking.vue";
import StrategicInitiatives from "./form-sections/StrategicInitiatives.vue";
import RecruitmentOfTargetExpertise from "./form-sections/RecruitmentOfTargetExperise.vue";

export default defineComponent({
  name: "CreateForm",

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
    HumanResourceComponent,
    PolicyEngagementStrategies,
    PolicyBtiefsAndFacts,
    MediaComponents,
    PolicyStrategies,
    EvidenceDecisionMaking,
    StrategicInitiatives,
    RecruitmentOfTargetExpertise,
  },

  methods:{
    submitForm() {
      console.log("jjjj");

      this.toast("Success", "Form submitted successfully", "success");
    },

    saveToDraft() {
      this.toast("Success", "Form saved to draft", "success");
    },
  }
});
</script>

<style scoped>
.annual-text1 {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--text);
  text-align: left;
  font: normal normal bold 20px/24px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.sub-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  margin-top: 10px;
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
