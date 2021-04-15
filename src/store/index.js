import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    array1: [],
    MusicUrl: "",
    msg: "",
  },
  mutations: {
    getMusicUrl(state, payload) {
      // state是个形参 是state对象里面的数据都可以拿到 不通过this来拿
      state.msg = payload;
    },
  },
  actions: {},
  modules: {},
});
