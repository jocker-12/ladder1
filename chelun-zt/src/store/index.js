import Vue from 'vue';
//引入VUE
import Vuex from 'vuex';
//引入VUEX
import index from './modules/index';
//引入index包
import details from './modules/details';
//引入details文件
import img from './modules/img';
//引入img的文件
import createLogger from 'vuex/dist/logger';
//引入createLogger方法
Vue.use(Vuex);
//挂载vuex
export default new Vuex.Store({
    modules: {
        index,
        details,
        img
    },
    plugins: [createLogger()]
});
//实例vuex.store