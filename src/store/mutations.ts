import { MutationTree } from "vuex";
import { state } from "@/types";

const mutations: MutationTree<state> = {
  setActiveTab: (state, data): void => {
    state.activeTab = data;
  },
  setLoginModal: (state, data): void => {
    state.activeModal = data;
  }
};

export default mutations;
