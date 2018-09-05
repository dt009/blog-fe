/*
 * @Author: duantao-ds
 * @Date: 2018-08-16 14:44:29
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 11:09:06
 */

let requestUrl = '';

if (process.env.NODE_ENV === 'production') {
    requestUrl = `//${window.location.host}`;
}
else {
    requestUrl = '//localhost:8080'
}

console.log('请求的地址 host ===>> ', requestUrl);

const URL = {
    testUrl: `${requestUrl}/test`,

    // 获取全部的文章列表
    getAllArticleUrl: `${requestUrl}/all`,

    // 获取全部的分类
    getAllCategoriesUrl: `${requestUrl}/get/categories/allList`,

    // 获取全部的 tags 列表
    getAllTagsUrl: `${requestUrl}/tags/get/all`,

    // 博客文件上传按钮
    uploadBlogUrl: `${requestUrl}/upload/blog`,

    // 添加博客的地址
    addBlogArticleUrl: `${requestUrl}/blog/addArticle`,

    // 请求博客的具体内容
    getArticleDetailUrl: `${requestUrl}/get/article/details`,

    // 登录请求
    loginUrl: `${requestUrl}/login`,

    // 获取路由的列表
    getRouterListUrl: `${requestUrl}/router/allRouter`,

    // 添加路由的url
    addRouterUrl: `${requestUrl}/router/setRouter`,

    // 删除路由的操作 url
    deleteRouterUrl: `${requestUrl}/router/deleteRouter`,

    // 修改 路由的操作 url
    updateRouterUrl: `${requestUrl}/router/updateRouter`
}

export default URL;
