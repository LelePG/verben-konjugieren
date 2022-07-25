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
    currentIndex: 0,
    visualizationStyle: "",
    currentArray:[]
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
    },
    getCurrentVerbalTense : function(state){
      return state.verbalTenses[state.currentIndex].trim()
    },
    getAvailableVerbalTenses : function(state){
      return state.verbalTenses.length -1
    }, 
    getCurrentIndex : function(state){
      return state.currentIndex
    }, 
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
    setCurrentIndex: function(state, currentIndex){
      state.currentIndex = currentIndex >=0 ? state.currentIndex+1: state.currentIndex-1
    },
    clearCurrentIndex: function(state){
      state.currentIndex = 0
    },
    clearPoints: function(state){
      state.points = 0
    },
  }
})