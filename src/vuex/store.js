import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputWithFocus: "",
    pontos : 0,
    verbalTenses: [],
    auxVerb: "",
  },
  getters:{
    getInputWithFocus: function(state){
      return state.inputWithFocus
    },
    getPontos: function(state){
      return state.pontos
    },
    getVerbalTenses: function(state){
      return state.verbalTenses
    },
    getAuxVerb : function(state){
      return state.auxVerb
    }
  },
  mutations: {
    setInputWithFocus: function(state, input) {
     state.inputWithFocus = input
    },
    setPontos: function(state, pontos){
      state.pontos += pontos
    },
    setVerbalTenses: function(state, verbalTenses){
      state.verbalTenses = verbalTenses
    },
    setAuxVerb: function(state, auxVerb){
      state.auxVerb = auxVerb
    },
  }
})