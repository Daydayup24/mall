import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  backToName: '',
  productId: '',
  userId: '1q',
  merId: '1'
}

const mutations = {
  backToName(state, val) {
    state.backToName = val
  },
  setProductId(state, val) {
    state.productId = val
  },
  setUserId(state, val) {
    state.userId = val
  }
}

const getters = {
  getBackToName: state => state.backToName,
  getProductId: state => state.productId,
  getUserId: state => state.userId
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict: true
})
