import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules';
Vue.use(Vuex);
export default new Vuex.store({
    modules: {
        index
    }
})