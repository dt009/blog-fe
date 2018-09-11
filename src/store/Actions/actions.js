/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 11:26:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 17:14:13
 */

import URL from '../../request_api/request_api';
import Fetch from 'common/fetch';
import {Loading} from 'element-ui';

const actions = {

    // 请求获取所有的文章列表
    async getAllArticle({commit}) {

        let loadingInstance = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        let fetchData = await Fetch.post(URL.getAllArticleUrl);

        if (fetchData) {

            let {status, message, data} = fetchData;
            if (status === 'ok') {
                loadingInstance.close();
                commit('changeAllArticleList', data);
            }
            else {
                loadingInstance.close();
            }

        }
        else {

        }
    },

    // 请求获取所有的 categories 列表
    async getAllCategoriesList({commit}) {

        let loadingInstance = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        let fetchData = await Fetch.post(URL.getAllCategoriesUrl);

        if (fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                loadingInstance.close();
                commit('changeAllCategoriesList', data)
            }
            else {
                loadingInstance.close();
            }
        }
    },

    // 获取所有的 tags 列表
    async getAllTagsList({commit}) {

        let loadingInstance = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        let fetchData = await Fetch.post(URL.getAllTagsUrl);

        if (fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                loadingInstance.close();
                commit('changeAllTagsList', data)
            }
            else {
                loadingInstance.close();
            }
        }
    },

    // 登录请求
    async login({commit}, loginData) {

        let loadingInstance = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        let fetchData = await Fetch.post(URL.loginUrl, loginData);

        if (fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                loadingInstance.close();
                sessionStorage.setItem('userInfo', JSON.stringify(data))
                commit('changeUserInfoValue', data)
            }
            else {
                loadingInstance.close();
            }
        }
    },

    // 获取路由的列表
    async getRouterList({commit}) {

        let loadingInstance = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        let fetchData = await Fetch.post(URL.getRouterListUrl);

        if(fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                // data = [data[0]];
                loadingInstance.close();
                window.routerList = data;
                commit('changeRouterList', data)
            }
            else {
                loadingInstance.close();
            }
        }
    },

    // 获取站点信息
    async getWebsiteInfo({commit}, data = 1) {
        let loadingInstance = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        let fetchData = await Fetch.post(URL.getWebsiteInfoUrl, {userId: data});

        if(fetchData) {
            let {status, message, data} = fetchData;
            if (status === 'ok') {
                // data = [data[0]];
                loadingInstance.close();
                commit('changeWebsiteInfo', data)
            }
            else {
                loadingInstance.close();
            }
        }
    }
}


export default actions;
