<template>
  <v-card color="#FFE8D6" class="pa-2">
    <p id="instrucao">
      Selecione os tempos verbais que você quer praticar e clique em iniciar!
    </p>
    <v-container >
      <v-row >
        <v-col md="3">
          <h2 class="tituloTempos">Indicativ</h2>
          <v-checkbox
            v-model="temposVerbais"
            label="Prasens"
            value="PRASENS"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Prateritum"
            value="PRATERITUM"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Futur1"
            value="FUTUR1"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Futur2"
            value="FUTUR2"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Perfekt"
            value="PERFEKT"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Plusquamperferkt"
            value="PLUSQUAMPERFEKT"
            color="#6B705C"
          >
          </v-checkbox>
        </v-col>

        <v-col md="3">
          <h2 class="tituloTempos">Konjunktiv1</h2>
          <v-checkbox
            v-model="temposVerbais"
            label="Prasens"
            value="KONJUNKTIV1_PRASENS"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Futur1"
            value="KONJUNKTIV1_FUTUR1"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Perfekt"
            value="KONJUNKTIV1_PERFEKT"
            color="#6B705C"
          >
          </v-checkbox>
        </v-col>

        <v-col md="3">
          <h2 class="tituloTempos">Konjunktiv2</h2>
          <v-checkbox
            v-model="temposVerbais"
            label="Prateritum"
            value="KONJUNKTIV2_PRATERITUM"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Futur1"
            value="KONJUNKTIV2_FUTUR1"
            color="#6B705C"
          >
          </v-checkbox>
          <v-checkbox
            v-model="temposVerbais"
            label="Futur2"
            value="KONJUNKTIV2_FUTUR2"
            color="#6B705C"
          >
          </v-checkbox>
        </v-col>

        <v-col md="3" >
          <v-radio-group class="semTopMargin" v-model="verboAux" mandatory radio-margin-right = "0px" >
          <h2 class="tituloTempos">Verbo auxiliar</h2>
          <v-radio
            label="Sein"
            value="SEIN"
            color="#6B705C"
          >
          </v-radio>
          <br/>
          <v-radio
            label="Haben"
            value="HABEN"
            color="#6B705C"
          >
          </v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
        <router-link to="/jogar"  
        event = ""
        @click.native="carregaInfo()">
          <v-btn elevation="12" color="#B7B7A4" block>Iniciar </v-btn>
        </router-link>
    </v-container>
  </v-card>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data: function () {
    return {
      temposVerbais: ["PRASENS"],
      verboAux: "SEIN"
    };
  },
  methods:{
    ...mapMutations['setTemposVerbais', 'setVerboAuxiliar'],
    carregaInfo: async function(){
      await this.$store.commit("setTemposVerbais", this.temposVerbais)
      await this.$store.commit('setVerboAuxiliar', this.verboAux)
      this.$router.push('/jogar')
    }
  },
};
</script>

<style>
h2.tituloTempos {
  color: #4c4f40;
  margin-bottom: 15px;
}

p#instrucao {
  padding: 5px;
  font-size: 20px;
  text-align: center;
  color: #4c4f40;
  font-weight: bold;
}

.v-input--selection-controls {
  margin-top: 0px !important;
}
</style>