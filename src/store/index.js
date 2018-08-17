/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 17:39:29
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 11:37:49
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './Actions/actions';
import state from './State/state';
import getters from './Getters/getters';
import mutations from './Mutations/mutations';

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})


export default store;
