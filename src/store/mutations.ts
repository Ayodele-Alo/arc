import { MutationTree } from "vuex";
import { state } from "@/types";

const mutations: MutationTree<state> = {
  setActiveTab: (state, data): void => {
    state.activeTab = data;
  },
  setLoginModal: (state, data): void => {
    state.activeModal = data;
  },
  setActiveForm: (state, data): void => {
    state.activeForm = data;
  },

  savePublicationsData: (state, data) => {
    if (data.name === "bookTitle") {
      state.publicationsForm.bookTitle = data.form;
    }
    // else if (data.theme === "linkageBetweenInstitution") {
    //   state.resourceRelatedForm.linkageBetweenInstitution = data.form;
    // } else {
    //   state.resourceRelatedForm.annualPerformance = data.form;
    // }
  },

  saveResourceRelatedData: (state, data) => {
    console.log("called again");
    if (data.name === "initial") {
      state.resourceRelatedForm.initial = data.form;
    } else if (data.name === "linkageBetweenInstitution") {
      state.resourceRelatedForm.linkageBetweenInstitution = data.form;
    } else if (data.name === "additionalAchivements") {
      state.resourceRelatedForm.additionalAchivements = data.form;
    } else if (data.name === "businessDevelopment") {
      state.resourceRelatedForm.businessDevelopment = data.form;
    } else if (data.name === "challengesAndLesson") {
      state.resourceRelatedForm.challengesAndLesson = data.form;
    } else if (data.name === "majorPlannedActivities") {
      state.resourceRelatedForm.majorPlannedActivities = data.form;
    } else if (data.name === "newOpportunities") {
      state.resourceRelatedForm.newOpportunities = data.form;
    } else if (data.name === "risksIndentified") {
      state.resourceRelatedForm.risksIndentified = data.form;
    } else {
      state.resourceRelatedForm.annualPerformance = data.form;
    }
  },
  saveHumanResourceData: (state, data) => {
    console.log("called again");
    if (data.name === "byCadre") {
      state.humanResourceForm.byCadre = data.form;
    } else if (data.name === "sensitization_meetings") {
      state.humanResourceForm.sensitizationMettings = data.form;
    } else if (data.name === "human_resource_recruitment") {
      state.humanResourceForm.recruitmentProcess = data.form;
    } else if (data.name === "human_resource") {
      state.humanResourceForm.humanResource = data.form;
    } else {
      state.humanResourceForm.systemsThinking = data.form;
    }
  },
  saveAnnualPerformanceData: (state, data) => {
    if (data.name === "annualPerformanceAgainstPlan") {
      state.annualForm.forms.annualPerformanceReport.annualPerformaceAgainstPlan =
        data.form;
    } else if (data.name === "additionalAchievement") {
      state.annualForm.forms.annualPerformanceReport.additionalAchivement =
        data.form;
    } else if (data.name === "challengesAndLessonLearnt") {
      state.annualForm.forms.annualPerformanceReport.challengesAndLessonLearnt =
        data.form;
    } else if (data.name === "businessDevelopment") {
      state.annualForm.forms.annualPerformanceReport.businessDevelopment =
        data.form;
    } else if (data.name === "newOpportunities") {
      state.annualForm.forms.annualPerformanceReport.newOpportunities =
        data.form;
    } else if (data.name === "engagementWithPolicyMakers") {
      state.annualForm.forms.annualPerformanceReport.engagementWithPolicyMakers =
        data.form;
    } else if (data.name === "risksIdentified") {
      state.annualForm.forms.annualPerformanceReport.riskIdentified = data.form;
    } else {
      state.annualForm.forms.annualPerformanceReport.strategicOutcomes =
        data.form;
    }
  },
};

export default mutations;
