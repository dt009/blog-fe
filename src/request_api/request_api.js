/*
 * @Author: duantao-ds
 * @Date: 2018-08-16 14:44:29
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 19:48:35
 */


const requestUrl = 'http://localhost:18080';

const URL = {
    testUrl: `${requestUrl}/test`,

    // 获取全部的文章列表
    getAllArticleUrl: `${requestUrl}/all`,

    // 获取全部的分类
    getAllCategoriesUrl: `${requestUrl}/get/categories/allList`,

    // 获取全部的 tags 列表
    getAllTagsUrl: `${requestUrl}/get/tags/allList`
}

export default URL;
