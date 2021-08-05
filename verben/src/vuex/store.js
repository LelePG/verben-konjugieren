import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputFocus: "",
    pontos : 0,
    temposVerbais: ["PRASENS"]
  },
  getters:{
    getInputFocus: function(state){
      return state.inputFocus
    },
    getPontos: function(state){
      return state.pontos
    },
    getTemposVerbais: function(state){
      return state.temposVerbais
    }
  },
  mutations: {
    setInputFocus: function(state, input) {
     state.inputFocus = input
    },
    setPontos: function(state, pontos){
      state.pontos += pontos
    }

  }
})