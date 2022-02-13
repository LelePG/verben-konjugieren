import Vue from 'vue'
import Router from 'vue-router'

//Componentes que vão se renderizados e seus caminhos
import Configs from '../components/config.vue'
import Principal from '../components/principal.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    //Caminho da url que vai acessar o componente e o componente que vai ser acessado 
    { path: '/', component: Configs },
    { path: '/jogar', component: Principal },
  ]
})
