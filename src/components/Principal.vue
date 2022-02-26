<template>
  <v-card color="#FFE8D6" class="pa-2">
  <h1 id="verboAtual">O verbo é {{verbo}} - {{traducao}}</h1>
  <h2 id="pontuacao">Pontos: {{getPoints}}</h2>
  <v-container>
  <v-row>
  <Conjugacoes v-for="tempo in tempos" :key="tempo" :verbalTense="tempo" :verb="verbo" />
  </v-row>
  </v-container>
  <div id = "botoesEspecias">
    <button class = "btn-especial" @click="insereCaracter('ß')" >ß</button>
    <button class = "btn-especial" @click="insereCaracter('ä')" >ä</button>
    <button class = "btn-especial" @click="insereCaracter('ö')" >ö</button>
    <button class = "btn-especial" @click="insereCaracter('ü')" >ü</button>
    <button class = "btn-especial" @click="insereCaracter('Ä')" >Ä</button>
    <button class = "btn-especial" @click="insereCaracter('Ö')" >Ö</button>
    <button class = "btn-especial" @click="insereCaracter('Ü')" >Ü</button>
  </div>

<div id = "botoesNavegacao">
  <router-link to ="/">
  <v-btn color = "#B7B7A4">Voltar</v-btn>
  </router-link>

  <a href ="/jogar">
  <v-btn color = "#B7B7A4">Recarregar</v-btn>
  </a>
</div>

  </v-card>
</template>

<script>
import Conjugacoes from "./Conjugations.vue"
import file from 'raw-loader!../assets/listaVerbos1.txt'
import {mapGetters} from 'vuex'

export default {
    components:{
        Conjugacoes,
    },
    computed:{
      ...mapGetters(["getInputFocus", "getPoints", "getVerbalTenses"])
    },
    data: function(){
        return{
            verbo:"brauchen",
            traducao: "procurar",
            tempos:[]
        }
    },
    created: function () {
        const texto = file.toString().split("\n")
        const indiceAleatorio = Math.trunc(Math.random() * texto.length);
        const verboEtraducao = texto[indiceAleatorio].split(":")
        this.verbo = verboEtraducao[0].trim()
        this.traducao = verboEtraducao[1].trim()

        this.tempos = this.getVerbalTenses
    }, 
    methods :{
      insereCaracter: function(caracter){
        const inputFocado = this.getInputFocus
        inputFocado.value += caracter
        inputFocado.focus()
      }
    },
    
    
}
</script>

<style>
h1#verboAtual, h2#pontuacao{   
  text-align: center;
  color: #4c4f40;
}

button.btn-especial{
  height: 25px;
  width: 35px;
  margin: 15px 10px;
  background-color: #B7B7A4;
  border-radius: 5px;
}

div#botoesNavegacao button{
  margin: 15px 10px;
  background-color: #B7B7A4;
  border-radius: 5px;
}

div#botoesEspecias, div#botoesNavegacao{
  text-align: center;
  padding-bottom:15px;
}

a, a:hover{
  text-decoration: none;
}

</style>