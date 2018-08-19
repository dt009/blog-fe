/*
 * @Author: duantao-ds
 * @Date: 2018-08-16 14:44:29
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-19 15:36:23
 */


const requestUrl = window.host || 'http://localhost:18080';

const URL = {
    testUrl: `${requestUrl}/test`,

    // 获取全部的文章列表
    getAllArticleUrl: `${requestUrl}/all`,

    // 获取全部的分类
    getAllCategoriesUrl: `${requestUrl}/get/categories/allList`,

    // 获取全部的 tags 列表
    getAllTagsUrl: `${requestUrl}/get/tags/allList`,

    // 博客文件上传按钮
    uploadBlogUrl: `${requestUrl}/upload/blog`,

    // 添加博客的地址
    addBlogArticleUrl: `${requestUrl}/blog/addArticle`
}

export default URL;
