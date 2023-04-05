import { GetterTree } from "vuex";
import { state, configType } from "@/types";

const getters: GetterTree<state, unknown> = {
  getConfig: (state: state) => state.config,
  getTabValues: (state: state) => {
    return state.config.map((item: configType) => {
      return {
        name: item.name,
      };
    });
  },
  getActiveTab: (state: state) => state.activeTab,
  getActiveTabConfig: (state: state) =>
    state.config.find((item: configType) => item.name === state.activeTab),
  getActiveModal: (state: state) => state.activeModal,
  getActiveForm: (state: state) => state.activeForm,
  getActiveResearchOutput: (state: state) => state.activeResearchOutput,
};

export default getters;
