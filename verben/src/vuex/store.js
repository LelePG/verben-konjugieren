import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputFocus: "",
    pontos : 0
  },
  getters:{
    getInputFocus: function(state){
      return state.inputFocus
    },
    getPontos: function(state){
      return state.pontos
    }
  },
  mutations: {
    setInputFocus: function(state, input) {
     state.inputFocus = input
    },
    setPontos: function(state, pontos){
      console.log("uhu")
      console.log(pontos)
      state.pontos += pontos
    }

  }
})