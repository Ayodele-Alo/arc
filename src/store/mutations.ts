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
};

export default mutations;
