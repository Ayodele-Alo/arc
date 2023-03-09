import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
// import { store as DASHBOARD_STORE } from "@/modules/dashboard";

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    // DASHBOARD_STORE,
  },
  strict: process.env.NODE_ENV !== "production",
});
