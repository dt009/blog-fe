/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 11:26:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 11:46:46
 */

import URL from 'api/request_api';
import Fetch from 'common/fetch';

const actions = {

    // 请求获取所有的文章列表
    async getAllArticle({commit}) {

        let fetchData = await Fetch.post(URL.getAllArticleUrl);

        if (fetchData) {

            let {status, message, data} = fetchData;

            // let arr = new Array(1000);
            // arr.fill(data[0]);
            // data = arr;
            commit('changeAllArticleList', data);
        }
        else {

        }
    },

    // 请求获取所有的分类标签列表
    async getAllCategoriesList({commit}) {

        let fetchData = await Fetch.get(URL.getAllCategoriesUrl);

        if (fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                commit('changeAllCategoriesList', data)
            }
        }
    },

    // 获取所有的 tags 列表
    async getAllTagsList({commit}) {
        let fetchData = await Fetch.get(URL.getAllTagsUrl);

        if (fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                commit('changeAllTagsList', data)
            }
        }
    },

    // 登录请求
    async login({commit}, loginData) {
        let fetchData = await Fetch.post(URL.loginUrl, loginData);

        if (fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                commit('changeUserInfoValue', data)
            }
        }
    },

    // 获取路由的列表
    async getRouterList({commit}) {
        let fetchData = await Fetch.post(URL.getRouterListUrl);

        if(fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                commit('changeRouterList', data)
            }
        }
    }
}


export default actions;
