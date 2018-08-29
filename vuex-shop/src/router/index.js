import Vue from 'vue'
import Router from 'vue-router'
import ShopList from '@/components/shopList';
import PericeNum from '@/components/periceNum';
Vue.use(Router);
export default new Router({
    routes: [{
        path: '/',
        component: SshopList
    }, {
        path: '/num',
        name: 'num',
        component: PericeNum
    }]
})