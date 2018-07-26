import Vue from 'vue';
import Vuex from 'vuex';

import index from './modules/index';
import details from './modules/details';
import img from './modules/img';

import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        index,
        details,
        img
    },
    plugins: [createLogger()]
})
