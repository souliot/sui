import Vue from 'vue'

import App from './App.vue'
import router from './router'
// import store from './store'
import SUI from '../packages'

Vue.config.productionTip = false
Vue.use(SUI)

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
