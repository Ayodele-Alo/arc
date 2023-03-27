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
  SAVE_DATA({ commit }, payload) {
    console.log("called");

    if (payload.component === "resource_related") {
      commit("saveResourceRelatedData", payload.item);
    }
  },
};

export default actions;
