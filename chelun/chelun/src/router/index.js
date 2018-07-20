import Vue from 'vue'
import Router from 'vue-router'
let Index = () =>
    import ('@/components/Index');
let Car = () =>
    import ('@/components/Car');
let Img = () =>
    import ('@/components/Img');
let Price = () =>
    import ('@/components/Price');
let Color = () =>
    import ('@/components/Color');
let Type = () =>
    import ('@/components/Type');
Vue.use(Router);
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
        },
        {
            path: '/color',
            name: 'color',
            component: Color
        },
        {
            path: '/type',
            name: 'Type',
            component: Type
        }
    ]
})