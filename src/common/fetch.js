/*
 * @Author: duantao-ds
 * @Date: 2018-08-16 15:04:01
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 10:03:52
 */


import 'whatwg-fetch';

import {MessageBox} from 'element-ui';

// 某部分的请求头
let myHeaders = new Headers({
    'Content-type': 'application/json'
});

/**
 *
 * @param res
 * @constructor
 */
function FetchIntercept(res) {
    if (res.status != 200) {
        // 请求失败的错误处理
        MessageBox.alert(res.status, '请求出错', {
            confirmButtonText: 'OK',
            callback: () => {
                console.log(1111111)
            }
        })
        return res;
    } else {
        return res.json();
    }
}

/**
 * 错误处理
 */

function FailCatch(res) {

    let {status, message} = res;
    if (status === 'fail') {
        MessageBox.alert(message, '请求出错', {
            confirmButtonText: 'OK',
            callback: () => {
                console.log(1111111)
            }
        })
    }

    return res
}


/**
 * @type {{post: Fetch.post, get: Fetch.get}}
 */
let Fetch = {
    /**
     * @param url  请求的链接地址
     * @param data  {json} 传递的参数数据
     * @return {Promise.<TResult>}
     */
    post: function (url, data = {}) {
        return fetch(url, {
            // credentials: 'include',
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        })
        .then(res => FetchIntercept(res))
        .then(res => FailCatch(res))
    },

    /**
     * @param url  请求的链接地址
     * @param data  {json} 传递的参数数据
     * @return {Promise.<TResult>}
     */
    get: function (url) {
        return fetch(url)
        .then(res => FetchIntercept(res)).then(res => FailCatch(res))
    }
};

export default Fetch;
