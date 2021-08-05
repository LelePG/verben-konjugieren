<template>
  <div class="conjugacoes">
    <div class = "titulo">
    <h3 id="tempoVerbal">{{ tempoVerbal }}</h3>
    <i class="far fa-lightbulb" @click="escondeResposta = false"></i>
    </div>
    <div v-if="escondeResposta">
    <ul id="tentantivasUsuario" >
      <li>
        <span class="pessoa">ich</span>
        <input
          type="text"
          name="ich"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.ich"
          :class = "classesInput.ich"
        />
      </li>

      <li>
        <span class="pessoa">du</span>
        <input
          type="text"
          name="du"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.du"
          :class = "classesInput.du"
        />
      </li>

      <li>
        <span class="pessoa">er</span>
        <input
          type="text"
          name="er"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.er"
          :class = "classesInput.er"
        />
      </li>

      <li>
        <span class="pessoa">sie</span>
        <input
          type="text"
          name="sieS"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.sieS"
          :class = "classesInput.sieS"
        />
      </li>

      <li>
        <span class="pessoa">es</span>
        <input
          type="text"
          name="es"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.es"
          :class = "classesInput.es"
        />
      </li>

      <li>
        <span class="pessoa">wir</span>
        <input
          type="text"
          name="wir"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.wir"
          :class = "classesInput.wir"
        />
      </li>

      <li>
        <span class="pessoa">ihr</span>
        <input
          type="text"
          name="ihr"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.ihr"
          :class = "classesInput.ihr"
        />
      </li>

      <li>
        <span class="pessoa">sie</span>
        <input
          type="text"
          name="sieP"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.sieP"
          :class = "classesInput.sieP"
        />
      </li>

      <li>
        <span class="pessoa">Sie</span>
        <input
          type="text"
          name="Sie"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.Sie"
          :class = "classesInput.Sie"
        />
      </li>
    </ul>
    <v-btn color="#B7B7A4" block @click="verificaResposta"> Verificar </v-btn>
    </div>

    <div v-else>
      <p class = "respostasMostrar" v-for="pessoa in Object.entries(this.resposta)" :key=pessoa[0]>
        {{pessoa[0]}} - {{pessoa[1]}} 
      </p>
    <v-btn color="#B7B7A4" block @click="escondeResposta = true"> Voltar </v-btn>

    </div>

  </div>
</template>

<script>
const GermanVerbsLib = require("german-verbs");
const GermanVerbsDict = require("german-verbs-dict/dist/verbs");
import { mapMutations } from "vuex";

export default {
  props: ["tempoVerbal", "verbo"],
  data: function () {
    return {
      entradasUsuario: {
        ich: "",
        du: "",
        er: "",
        es: "",
        sieS: "",
        wir: "",
        ihr: "",
        sieP: "",
        Sie: "",
      },
      classesInput: {
        ich: "",
        du: "",
        er: "",
        es: "",
        sieS: "",
        wir: "",
        ihr: "",
        sieP: "",
        Sie: "",
      },
      resposta: {},
      pontos: 0,
      escondeResposta: true,
    };
  },
  created: function () {
    try {
      this.resposta.ich = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo,this.tempoVerbal,1,"S")[0],
      this.resposta.du = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal,2, "S")[0],
      this.resposta.er = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal,3,"S")[0],
      this.resposta.es = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal,3,"S")[0],
      this.resposta.sieS = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal,3,"S")[0],
      this.resposta.wir = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal,1,"P")[0],
      this.resposta.ihr = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal,2,"P")[0],
      this.resposta.sieP = GermanVerbsLib.getConjugation(GermanVerbsDict,this.verbo,this.tempoVerbal,3,"P")[0],
      this.resposta.Sie = GermanVerbsLib.getConjugation(GermanVerbsDict,this.verbo,this.tempoVerbal,3,"P")[0];
    } catch (e) {
      document.location.reload(true);
    }
  },
  methods: {
    ...mapMutations(["setInputFocus", "setPontos"]),
    alteraInputFocus: function () {
      const inputFocado = this.$el.querySelector(`input[type="text"]:focus`);
      this.$store.commit("setInputFocus", inputFocado);
    },
    respostaJaTaCerta: function(nameDoInput){
      return this.classesInput[nameDoInput] === "certo"
    },
    respostaCerta: function(resposta, pessoa){
      return resposta.toLowerCase().trim() === this.resposta[pessoa].toLowerCase().trim()
    },
    verificaResposta: function () {
      let conjugacoes = Object.entries(this.entradasUsuario); //retorna um array
      for (let [pessoa,resposta] of conjugacoes) {
        console.log(pessoa)
        if(this.respostaJaTaCerta(pessoa)){
          continue;
        }
       
       if(this.respostaCerta(resposta, pessoa)){
         const pontosDaResposta =  this.classesInput[pessoa]? 5 : 10
         this.classesInput[pessoa]="certo"
         this.$store.commit("setPontos", pontosDaResposta);
       } else{
         this.classesInput[pessoa]= "errado"
       }
      }
    }
  }
}
</script>

<style>
div.conjugacoes {
  margin-left: 25px;
  padding: 15px;
  width: 210px;
  border: 4px solid #6b705c;
  box-shadow: 2px 2px #030303b0;
  border-radius: 10px;
}

div.titulo{
  color: #4c4f40;
}

h3#tempoVerbal{
  display: inline;
  text-align: center;
}
div.titulo i{
 float:right;
 text-align: left;
}

input[type="text"] {
  border: 2px solid #6b705c;
  border-radius: 5px;
  width: 140px;
}

ul#tentantivasUsuario {
  list-style-type: none;
  margin-bottom: 10px;
}

ul#tentantivasUsuario li {
  display: flex;
  justify-content: space-between;
  margin: 4px;
}

ul#tentantivasUsuario li span {
  width: 30px;
}

p.respostasMostrar{
  color:#6b705c;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 7px;
}

.certo {
  background-color: rgba(14, 250, 14, 0.555);
}

.errado {
  background-color: rgba(228, 59, 59, 0.808);
}
</style>

