import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputWithFocus: "",
    verbs: [],
    points : 0,
    verbalTenses: [],
    auxVerb: "",
  },
  getters:{
    getInputWithFocus: function(state){
      return state.inputWithFocus
    },
    getPoints: function(state){
      return state.points
    },
    getVerbs: function(state){
      return state.verbs
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
    addPoints: function(state, points){
      state.points += points
    },
    setVerbalTenses: function(state, verbalTenses){
      state.verbalTenses = verbalTenses
    },
    setAuxVerb: function(state, auxVerb){
      state.auxVerb = auxVerb
    },
    setVerbs: function(state, verbs){
      state.verbs = verbs
    },
  }
})