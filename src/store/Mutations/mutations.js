/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 11:34:14
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 12:46:27
 */

const mutations = {

    // 改变 allArticleList 的值
    changeAllArticleList(state, value) {

        console.log('allArticleList ===> ', value);
        state.allArticleList = value
    },

    // 改变 pageSize 的值
    changePageSize(state, value) {
        console.log('当前页面大小 ===>> ', value);
        state.pageSize = value;
    },

    // 改变 pageNumber 的值
    changePageNumber(state, value) {
        console.log('当前第几页 ===>> ', value);
        state.pageNumber = value;
    }
}

export default mutations;
