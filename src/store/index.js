import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    array1: [],
    MusicUrl: "",
    msg: "",
    array2: [],
    musicid: "",
    Lyrics: "",
  },
  mutations: {
    getMusicUrl(state, payload) {
      // state是个形参 是state对象里面的数据都可以拿到 不通过this来拿
      state.msg = payload;
    },
    // 关键词搜索的数组
    getMusicKeyWords(state, payload) {
      state.array2 = payload;
    },
    getMusicId(state, payload) {
      // state是个形参 是state对象里面的数据都可以拿到 不通过this来拿
      state.musicid = payload;
    },
    playMusicUrl(state, payload) {
      state.MusicUrl = payload;
    },
    getLyrics(state, payload) {
      state.Lyrics = payload;
    },
  },
  actions: {},
  modules: {},
});
