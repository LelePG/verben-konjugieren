import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputFocus: "",
    pontos : 0
  },
  getters:{
    getInputFocus(){
      return this.$store.inputFocus
    },
    getPontos(){
      return this.$store.pontos
    }
  },
  mutations: {
    setInputFocus(state, input) {
     state.$store.input = input
    },
    setPontos(state, pontos){
      state.$store.pontos += pontos
    }

  }
})