import Vue from "vue";
import App from "./App.vue";
import VueMask from "v-mask";
import Vuelidate from "vuelidate";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(Vuelidate);
Vue.use(VueMask);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
