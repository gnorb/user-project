import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import store from '../../store/index.js'
import en from './en/en.js'

Vue.use(Vuex)
Vue.use(VueI18n)

const messages = {
    en: en
}

const i18n = new VueI18n({
    locale: store.state.language,
    messages
})

export default i18n
