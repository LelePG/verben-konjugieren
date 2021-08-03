<template>
  <v-card color="#FFE8D6" class="pa-2">
  <h1 id="verboAtual">O verbo é {{verbo}} - {{traducao}}</h1>
  <v-row fill-width>
  <Conjugacoes v-for="tempo in tempos" :key="tempo" :tempoVerbal="tempo" :verbo="verbo" />
  </v-row>
  <div id = "botoesEspecias">
    <button class = "btn-especial" @click="insereCaracter('ß')" >ß</button>
    <button class = "btn-especial" @click="insereCaracter('Ä')" >Ä</button>
    <button class = "btn-especial" text @click="insereCaracter('ä')" >ä</button>
    <button class = "btn-especial" @click="insereCaracter('Ö')" >Ö</button>
    <button class = "btn-especial" @click="insereCaracter('ö')" >ö</button>
    <button class = "btn-especial" @click="insereCaracter('Ü')" >Ü</button>
    <button class = "btn-especial" @click="insereCaracter('ü')" >ü</button>
  </div>

     <!-- Ä/ä  Ö/ö  Ü/ü  -->
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
    }, 
    methods :{
      insereCaracter: function(caracter){
        console.log(caracter)
      }
    }
}
</script>

<style>
h1#verboAtual{   
  text-align: center;
  color: #4c4f40;
}

button.btn-especial{
  height: 25px;
  width: 35px;
  margin: 10px;
  background-color: #B7B7A4;
}

div#botoesEspecias{
  text-align: center;
}
</style>