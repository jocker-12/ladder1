// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import {
    AlertPlugin,
    ToastPlugin
} from 'vux'
import {
    AjaxPlugin
} from 'vux'
import {
    WechatPlugin
} from 'vux'
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.use(VueRouter)
Vue.config.productionTip = false
const FastClick = require('fastclick')
FastClick.attach(document.body)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})