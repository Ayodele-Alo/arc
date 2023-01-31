import { createStore } from 'vuex'

export default createStore({
  state: {
    status: true,
  },
  getters: {
    getInternetStatus: (state) => state.status,
  },
  mutations: {
    setInternetStatus(state, payload) {
      state.status = payload;
    },
  },
  actions: {
    setInternetStatus({ commit }, payload) {
      commit('setInternetStatus', payload);
    },
  },
  modules: {
  }
})
