<template>
    <v-card>
        {{temposVerbais}}
<v-row>
    <v-col>
        <h2 class = "tituloTempos"> Indicativ </h2>
    <v-checkbox
    v-model="temposVerbais"
      label="Prasens"
      value = "PRASENS">
      </v-checkbox>
<v-checkbox
    v-model="temposVerbais"
      label="Prateritum"
      value = "PRATERITUM">
      </v-checkbox>
      <v-checkbox
    v-model="temposVerbais"
      label="Futur1"
      value = "FUTUR1">
      </v-checkbox>
        <v-checkbox
    v-model="temposVerbais"
      label="Futur2"
      value = "FUTUR2">
      </v-checkbox>
 <v-checkbox
    v-model="temposVerbais"
      label="Perfekt"
      value = "PERFEKT">
      </v-checkbox>
       <v-checkbox
    v-model="temposVerbais"
      label="Plusquamperferkt"
      value = "PLUSQUAMPERFEKT">
      </v-checkbox>
    </v-col>

    <v-col>
   <h2 class = "tituloTempos"> Konjunktiv1 </h2>
    <v-checkbox
    v-model="temposVerbais"
      label="Prasens"
      value = "KONJUNKTIV1_PRASENS">
      </v-checkbox>
      <v-checkbox
    v-model="temposVerbais"
      label="Futur1"
      value = "KONJUNKTIV1_FUTUR1">
      </v-checkbox>
      <v-checkbox
    v-model="temposVerbais"
      label="Perfekt"
      value = "KONJUNKTIV1_PERFEKT">
      </v-checkbox>
    </v-col>
    
    <v-col>
           <h2 class = "tituloTempos"> Konjunktiv2 </h2>
      <v-checkbox
    v-model="temposVerbais"
      label="Prateritum"
      value = "KONJUNKTIV2_PRATERITUM">
      </v-checkbox>
      <v-checkbox
    v-model="temposVerbais"
      label="Futur1"
      value = "KONJUNKTIV2_FUTUR1">
      </v-checkbox>
      <v-checkbox
    v-model="temposVerbais"
      label="Futur2"
      value = "KONJUNKTIV2_FUTUR2">
      </v-checkbox>
    </v-col>
        </v-row>

    </v-card>

</template>

<script>
export default {
    data:function(){
        return {
            temposVerbais:[]
        }
    }
    
}
</script>

<style>

</style>