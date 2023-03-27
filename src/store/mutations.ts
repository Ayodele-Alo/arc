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
    if (data.theme === "initial") {
      state.resourceRelatedForm.initial = data.form;
    } else if (data.theme === "linkageBetweenInstitution") {
      state.resourceRelatedForm.linkageBetweenInstitution = data.form;
    } else {
      state.resourceRelatedForm.annualPerformance = data.form;
    }
  },
};

export default mutations;
