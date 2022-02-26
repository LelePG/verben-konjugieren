import Vue from 'vue'
import Router from 'vue-router'

//Componentes que vão se renderizados e seus caminhos
import Start from '../components/Start.vue'
import Principal from '../components/Principal.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    //Caminho da url que vai acessar o componente e o componente que vai ser acessado 
    { path: '/', component: Start },
    { path: '/play', component: Principal },
  ]
})
