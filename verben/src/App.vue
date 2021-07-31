<template>
  <main>
    <v-app-bar color = "#6B705C"
    height = "60px">
    <h1 id = "titulo">Verben Konjugieren</h1>
    </v-app-bar>
    <br/>
   <Principal/>
  </main>
</template>

<script>
//import Config from './components/config.vue';
import Principal from "./components/principal.vue"
export default {
  name: 'App',
  components: {
    Principal
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
h1#titulo{
  margin:auto;
  color: #FFE8D6;
}
</style>