import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Content from '../components/Conect.vue';

import Admin from '../components/content/Admin.vue';
import Modify from '../components/content/Modify.vue';
import View from '../components/content/View.vue';

const Checkin = null;
const Query = null;
const Delete = null;

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/content'
}, {
    path: '/login',
    component: Login
}, {
    path: '/content',
    component: Content,
    children: [{
        path: '/content/view',
        component: View
    }, {
        path: '/content/modify',
        component: Modify
    }, {
        path: '/content/checkin',
        component: Checkin
    }, {
        path: '/content/query',
        component: Query
    }, {
        path: '/content/delete',
        component: Delete
    }, {
        path: '/content/admin',
        component: Admin
    }]
}];

export default new VueRouter({
    routes
})