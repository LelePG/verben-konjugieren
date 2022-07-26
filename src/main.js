import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store.js";
import router from "./router/router.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./styles/custom.scss";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	BootstrapVue,
	IconsPlugin,
	render: (h) => h(App),
}).$mount("#app");
