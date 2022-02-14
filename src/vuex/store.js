import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputFocus: "",
    pontos : 0,
    verbalTenses: [],
    auxVerb: "",
  },
  getters:{
    getInputFocus: function(state){
      return state.inputFocus
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
    setInputFocus: function(state, input) {
     state.inputFocus = input
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