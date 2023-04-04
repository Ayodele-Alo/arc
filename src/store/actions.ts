/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTree } from "vuex";
import Request from "@/helpers/Request";
import { state } from "@/types";

const actions: ActionTree<state, unknown> = {
  /**
   * @function GET_TAGS - function to get all tags
   */
  async GET_TAGS({ commit }): Promise<void> {
    try {
      const { data } = await Request("tags/");
      commit("setTags", data);
      return data;
    } catch (error: any) {
      // const { details } = error?.response?.data;
      // Toast.error(details || error);
      return;
    }
  },

  async SAVE_DATA({ commit }, payload) {
    if (payload.component === "publications") {
      commit("savePublicationsData", payload.item);
    }

    if (payload.component === "resource_related") {
      commit("saveResourceRelatedData", payload.item);
    }
    if (payload.component === "human_resource") {
      commit("saveHumanResourceData", payload.item);
    }
    if (payload.component === "annually" && payload.type === "report") {
      commit("saveAnnualPerformanceData", payload.item);
    }
    if (payload.component === "quarterly" && payload.type === "report") {
      commit("saveQuarterlyPerformanceData", payload.item);
    }
  },

  async SUBMIT_FORM({ commit }, payload) {
    if (payload.component === "resource_related") {
      commit("submitResourceRelatedData");
    }
    if (payload.component === "annually") {
      commit("submitAnnualPerformanceData", payload);
    }
    if (payload.component === "human_resource") {
      commit("submitHumanResourceData", payload);
    }
    if (payload.component === "quarterly") {
      commit("submitQuarterlyPerformanceData", payload);
    }
    if (payload.component === "publications") {
      commit("submitPublicationsData", payload);
    }
  },
};

export default actions;
