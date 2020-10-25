import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueToast, {
  position: 'bottom'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
