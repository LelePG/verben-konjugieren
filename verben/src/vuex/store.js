import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputFocus: "",
    pontos : 0,
    temposVerbais: [],
    verboAuxiliar: "",
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
    },
    getVerboAuxiliar : function(state){
      return state.verboAuxiliar
    }
  },
  mutations: {
    setInputFocus: function(state, input) {
     state.inputFocus = input
    },
    setPontos: function(state, pontos){
      state.pontos += pontos
    },
    setTemposVerbais: function(state, temposVerbais){
      state.temposVerbais = temposVerbais
    },
    setVerboAuxiliar: function(state, verboAuxiliar){
      state.verboAuxiliar = verboAuxiliar
    },
  }
})