import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    views: {
      users: {
        info: '',
        list: {
          rows: [],
          currentPage: 1,
          perPage: 10,
          total: 0
        },
        item: null
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
