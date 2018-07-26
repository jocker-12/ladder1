import Vue from 'vue'
import Router from 'vue-router';

let Index = () => import('@/components/index');
let Detail = () => import('@/components/detail');
let Img = () => import('@/components/img');
let Color = () => import('@/components/img/color');
let Type = () => import('@/components/img/type');
let Quotation = () => import('@/components/quotation');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        },
        {
            path: '/img',
            name: 'img',
            component: Img
        },
        {
            path: '/color',
            name: 'color',
            component: Color
        },
        {
            path: '/type',  
            name: 'type',
            component: Type
        },
        {
            path: '/quotation',
            name: 'quotation',
            component: Quotation
        },
    ]
})
