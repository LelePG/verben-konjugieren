import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputFocus: "",
    pontos : 0,
    temposVerbais: [],
    verboAuxiliar: "SEIN",
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
      console.log("atualizando tempos verbais")
      console.log(temposVerbais)
      state.temposVerbais = temposVerbais
      console.log(state.temposVerbais)
    },
    setVerboAuxiliar: function(state, verboAuxiliar){
      console.log("atualizando verbo auxiliar")
      state.verboAuxiliar = verboAuxiliar
    },
  }
})