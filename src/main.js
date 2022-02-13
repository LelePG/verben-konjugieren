import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './vuex/store.js'
import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
