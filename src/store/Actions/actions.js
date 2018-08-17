/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 11:26:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 15:23:13
 */

import URL from 'api/request_api';
import Fetch from 'common/fetch';

const actions = {

    async getAllArticle({commit}) {

        let fetchData = await Fetch.post(URL.getAllArticleUrl);

        if (fetchData) {

            let {status, message, data} = fetchData;
            let arr = new Array(1000);
            arr.fill(data[0]);
            commit('changeAllArticleList', arr);
        }
        else {

        }
    }
}


export default actions;
