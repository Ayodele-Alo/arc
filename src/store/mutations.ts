import { MutationTree } from "vuex";
import { state } from "@/types";

const mutations: MutationTree<state> = {
  setActiveTab: (state, data): void => {
    state.activeTab = data;
  },
};

export default mutations;
