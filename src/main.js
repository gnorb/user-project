import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import i18n from './assets/languages/languages.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlus, faEdit, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

i18n.locale = 'en'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.baseURL = 'https://reqres.in/'

library.add(faSearch, faPlus, faEdit, faTrash, faCamera)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
