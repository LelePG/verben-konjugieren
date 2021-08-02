<template>
  <v-card color="#FFE8D6" class="pa-2">
  <h1 id="verboAtual">O verbo é {{verbo}}</h1>
  <v-row fill-width>
  <Conjugacoes v-for="tempo in tempos" :key="tempo" :tempoVerbal="tempo" :verbo="verbo" />
  </v-row>
  </v-card>
</template>

<script>
import Conjugacoes from "./conjugacoes.vue"
export default {
    components:{
        Conjugacoes,
    },
    data: function(){
        return{
            verbo:"brauchen",
            tempos:["PRASENS","PRATERITUM"]
        }
    },
    created: function () {
        
    }
}
</script>

<style>
h1#verboAtual{   
  text-align: center;
  color: #4c4f40;
}
</style>