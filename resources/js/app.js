try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
Vue.use(Toasted);


Vue.component('navigation', require('./components/Navigation.vue').default);


const app = new Vue({
    el: '#laravel-vue',
    router: new VueRouter(routes),
});
