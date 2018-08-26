/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 11:34:14
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-26 19:39:35
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
    },

    // 改变 allCategoriesList 的值
    changeAllCategoriesList(state, value) {
        console.log('获取的分类标签列表为 ==>> ', value);
        state.allCategoriesList = value;
    },

    // 改变 allTagsList 的值
    changeAllTagsList(state, value) {
        console.log('获取的所有标签的列表 ==>> ', value);
        state.allTagsList = value;
    },

    // 修改用户信息
    changeUserInfoValue(state, value) {
        console.log('用户信息为 ==>> ', value);
        state.userInfo = value;
    },
}

export default mutations;
