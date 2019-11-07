import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  backToName: '',
  productId: '',
  userId: 'ADAVAVCC',
  merId: '1'
}

const mutations = {
  setBackName(state, val) {
    state.backToName = val
  },
  setProductId(state, val) {
    state.productId = val
  },
  setUserId(state, val) {
    state.userId = val
  },
  setMerId(state, val) {
    state.merId = val
  }
}

const getters = {
  getBackToName: state => state.backToName,
  getProductId: state => state.productId,
  getUserId: state => state.userId,
  getMerId: state => state.merId
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict: true
})
