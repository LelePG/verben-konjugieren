<template>
  <v-card color="#FFE8D6" class="pa-2">
    <p id="instrucao">
      Selecione os tempos verbais que você quer praticar e clique em iniciar!
    </p>
    <v-container>
      <v-row justify="space-around">
        <v-col md="4">
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

        <v-col md="4">
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

        <v-col md="4">
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
      </v-row>
        <router-link to ="/jogar">
          <v-btn elevation="12" color="#B7B7A4" block>Iniciar </v-btn>
        </router-link>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      temposVerbais: [],
    };
  },
};
</script>

<style>
h2.tituloTempos {
  color: #4c4f40;
}

p#instrucao {
  padding: 5px;
  font-size: 20px;
  text-align: center;
  color: #4c4f40;
  font-weight: bold;
}
</style>