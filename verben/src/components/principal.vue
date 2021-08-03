<template>
  <v-card color="#FFE8D6" class="pa-2">
  <h1 id="verboAtual">O verbo é {{verbo}} - {{traducao}}</h1>
  <v-row fill-width>
  <Conjugacoes v-for="tempo in tempos" :key="tempo" :tempoVerbal="tempo" :verbo="verbo" />
  </v-row>
  </v-card>
</template>

<script>
import Conjugacoes from "./conjugacoes.vue"
import file from 'raw-loader!../assets/listaVerbos1.txt'
export default {
    components:{
        Conjugacoes,
    },
    data: function(){
        return{
            verbo:"brauchen",
            traducao: "procurar",
            tempos:["PRASENS","PRATERITUM"]
        }
    },
    created: function () {
        const texto = file.toString().split("\n")
        const indiceAleatorio = Math.trunc(Math.random() * texto.length);
        console.log(indiceAleatorio)
        const verboEtraducao = texto[indiceAleatorio].split(":")
        this.verbo = verboEtraducao[0].trim()
        this.traducao = verboEtraducao[1].trim()
    }
}
</script>

<style>
h1#verboAtual{   
  text-align: center;
  color: #4c4f40;
}
</style>