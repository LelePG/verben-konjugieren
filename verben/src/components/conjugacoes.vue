<template>
  <div class="conjugacoes">
    <h3 id="tempoVerbal">{{ tempoVerbal }}</h3>
    <ul id="tentantivasUsuario">
      <li>
        <span class="pessoa">ich</span>
        <input type="text" name="ich" v-model="entradasUsuario.ich" />
      </li>

      <li>
        <span class="pessoa">du</span>
        <input type="text" name="du" v-model="entradasUsuario.du" />
      </li>

      <li>
        <span class="pessoa">er</span>
        <input type="text" name="er" v-model="entradasUsuario.er" />
      </li>

      <li>
        <span class="pessoa">sie</span>
        <input type="text" name="sieS" v-model="entradasUsuario.sieS" />
      </li>

      <li>
        <span class="pessoa">es</span>
        <input type="text" name="es" v-model="entradasUsuario.es" />
      </li>

      <li>
        <span class="pessoa">wir</span>
        <input type="text" name="wir" v-model="entradasUsuario.wir" />
      </li>

      <li>
        <span class="pessoa">ihr</span>
        <input type="text" name="ihr" v-model="entradasUsuario.ihr" />
      </li>

      <li>
        <span class="pessoa">sie</span>
        <input type="text" name="sieP" v-model="entradasUsuario.sieP" />
      </li>

      <li>
        <span class="pessoa">Sie</span>
        <input type="text" name="Sie" v-model="entradasUsuario.Sie" />
      </li>
    </ul>
    <v-btn color="#B7B7A4" block @click="verificaResposta"> Verificar </v-btn>
    {{ resposta}}
    {{pontos}}
  </div>
</template>

<script>
const GermanVerbsLib = require('german-verbs');
const GermanVerbsDict = require('german-verbs-dict/dist/verbs');

export default {
    props:["tempoVerbal", "verbo"],
    data: function(){
        return{
        entradasUsuario:{
            ich: "" ,
            du: "",
            er: "",
            es: "",
            sieS:"",
            wir: "",
            ihr: "",
            sieP: "", 
            Sie:"",
        },
        resposta:{},
        pontos: 0
        }
    },
    created: function(){
        this.resposta.ich = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 1, 'S')[0],
        this.resposta.du = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 2, 'S')[0],
        this.resposta.er = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, 'S')[0],
        this.resposta.es = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, 'S')[0],
        this.resposta.sieS = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, 'S')[0],
        this.resposta.wir = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 1, 'P')[0],
        this.resposta.ihr = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 2, 'P')[0],
        this.resposta.sieP= GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, 'P')[0], 
        this.resposta.Sie= GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, 'P')[0]
    },
    methods:{
        verificaResposta: function(){
           let conjugacoes = Object.entries(this.entradasUsuario) //retorna um array
           const elementoAtual = this.$el
            for (let conjugacaoEntry of conjugacoes ){
                let inputRespectivo = elementoAtual.querySelector(`[name=${conjugacaoEntry[0]}]`)

                if(inputRespectivo.classList.contains("certo")){
                    continue
                }
                else if(conjugacaoEntry[1] === this.resposta[conjugacaoEntry[0]]){
                    if(inputRespectivo.classList.contains("errado")){
                        inputRespectivo.classList.remove("errado")
                        this.pontos+=5
                    } else {
                        this.pontos +=10
                    }
                    inputRespectivo.classList.add("certo")
                }
                else{
                    inputRespectivo.classList.add("errado")
                }
            }
        }
    }
}
</script>

<style>
div.conjugacoes {
  margin: 15px;
  width: 200px;
}
h3#tempoVerbal {
  text-align: center;
}
input[type="text"] {
  border: 2px solid #6b705c;
  border-radius: 5px;
}
ul#tentantivasUsuario {
  list-style-type: none;
  margin-bottom: 10px;
}

ul#tentantivasUsuario li {
  display: flex;
  justify-content: space-between;
  margin : 3px;
}

.certo{
    background-color: rgba(14, 250, 14, 0.555);
}

.errado{
    background-color: rgba(228, 59, 59, 0.808);
}
</style>

