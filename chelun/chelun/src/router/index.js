import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index';
import Car from '@/components/Car';
import Img from '@/components/Img';
import Price from '@/components/Price';
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/car',
            name: 'Car',
            component: Car
        },
        {
            path: '/img',
            name: 'Img',
            component: Img
        },
        {
            path: '/price',
            name: 'Price',
            component: Price
        }
    ]
})