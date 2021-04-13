import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        songids: {
            ids: ''
        }
    },
    getters: {},
    mutations: {
        setIds(state, payload) {
            return state.songids = payload
        }
    },
    actions: {
    },
    modules: {
    },
})