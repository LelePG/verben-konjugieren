<template>
  <div class="conjugacoes">
    <h3 id="tempoVerbal">{{ tempoVerbal }}</h3>
    <i class="far fa-lightbulb" @click="mostraResposta"></i>
    <ul id="tentantivasUsuario">
      <li>
        <span class="pessoa">ich</span>
        <input
          type="text"
          name="ich"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.ich"
        />
      </li>

      <li>
        <span class="pessoa">du</span>
        <input
          type="text"
          name="du"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.du"
        />
      </li>

      <li>
        <span class="pessoa">er</span>
        <input
          type="text"
          name="er"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.er"
        />
      </li>

      <li>
        <span class="pessoa">sie</span>
        <input
          type="text"
          name="sieS"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.sieS"
        />
      </li>

      <li>
        <span class="pessoa">es</span>
        <input
          type="text"
          name="es"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.es"
        />
      </li>

      <li>
        <span class="pessoa">wir</span>
        <input
          type="text"
          name="wir"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.wir"
        />
      </li>

      <li>
        <span class="pessoa">ihr</span>
        <input
          type="text"
          name="ihr"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.ihr"
        />
      </li>

      <li>
        <span class="pessoa">sie</span>
        <input
          type="text"
          name="sieP"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.sieP"
        />
      </li>

      <li>
        <span class="pessoa">Sie</span>
        <input
          type="text"
          name="Sie"
          @focus="alteraInputFocus"
          v-model="entradasUsuario.Sie"
        />
      </li>
    </ul>
    <v-btn color="#B7B7A4" block @click="verificaResposta"> Verificar </v-btn>
    {{ resposta }}
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
      resposta: {},
      pontos: 0,
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
    verificaResposta: function () {
      let conjugacoes = Object.entries(this.entradasUsuario); //retorna um array
      const elementoAtual = this.$el;
      for (let conjugacaoEntry of conjugacoes) {
        let inputRespectivo = elementoAtual.querySelector(
          `[name=${conjugacaoEntry[0]}]`
        );
        if (inputRespectivo.classList.contains("certo")) {
          continue;
        } else if (
          conjugacaoEntry[1].toLowerCase().trim() ===
          this.resposta[conjugacaoEntry[0]].toLowerCase().trim()
        ) {
          if (inputRespectivo.classList.contains("errado")) {
            inputRespectivo.classList.remove("errado");
            this.$store.commit("setPontos", 5);
          } else {
            this.$store.commit("setPontos", 10);
          }
          inputRespectivo.classList.add("certo");
        } else {
          inputRespectivo.classList.add("errado");
        }
      }
    },
    mostraResposta: function () {
      console.log("oi");
    },
  },
};
</script>

<style>
div.conjugacoes {
  margin: 25px;
  width: 180px;
}
h3#tempoVerbal {
  text-align: center;
  color: #4c4f40;
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
  margin: 3px;
}

ul#tentantivasUsuario li span {
  width: 30px;
}

.certo {
  background-color: rgba(14, 250, 14, 0.555);
}

.errado {
  background-color: rgba(228, 59, 59, 0.808);
}
</style>

