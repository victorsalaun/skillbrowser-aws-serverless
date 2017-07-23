import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {};

const mutations = {
  SAVE_CREDENTIALS(state, creds) {
    console.log('creds: ' + creds);
    localStorage.setItem('CREDENTIALS', JSON.stringify(creds));
  },
  REMOVE_CREDENTIALS(state) {
    localStorage.setItem('CREDENTIALS', '');
  }
};

const actions = {
  saveCredentials({commit}, credentials) {
    commit('SAVE_CREDENTIALS', credentials)
  },
  removeCredentials({commit}) {
    commit('REMOVE_CREDENTIALS');
  },
};

const getters = {
  getCredentials() {
    return JSON.parse(localStorage.getItem('CREDENTIALS') || '[]');
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store
