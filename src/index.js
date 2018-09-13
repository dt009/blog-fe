/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:44:35
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-13 17:50:33
 */

import Vue from 'vue';
import APP from 'comp/APP.vue';

import './style/reset.less';
import './style/layout.less';

import router from './router/index';
import store from './store/index';

function vueInit() {
    const app = new Vue({
        el: '#app',
        components: {
            APP
        },
        render: h => h(APP),
        router,
        store
    })
}


function init() {
    try {
        vueInit();
    } catch (error) {
        console.log('启动出错, 请检查....');
        console.log(error);
    }
}

init()
