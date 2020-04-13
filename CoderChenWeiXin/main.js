import Vue from 'vue'
import App from './App'
import {httpRequest} from "./utility/httpApi.js"

Vue.prototype.$httpRequest = httpRequest

Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
