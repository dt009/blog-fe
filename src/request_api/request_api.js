/*
 * @Author: duantao-ds
 * @Date: 2018-08-16 14:44:29
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-21 11:06:28
 */

let requestUrl = '';

if (process.env.NODE_ENV === 'production') {
    requestUrl = `//${window.location.host}`;
} else {
    requestUrl = '//localhost:8080'
}

console.log('请求的地址 host ===>> ', requestUrl);

const URL = {
    testUrl: `${requestUrl}/test`,

    // 登录请求
    loginUrl: `${requestUrl}/login`,

    /**
     * @description 路由相关
     */
    // 获取路由的列表
    getRouterListUrl: `${requestUrl}/router/get/allRouter`,

    // 添加路由的url
    addRouterUrl: `${requestUrl}/router/add/router`,

    // 删除路由的操作 url
    deleteRouterUrl: `${requestUrl}/router/delete/router`,

    // 修改 路由的操作 url
    updateRouterUrl: `${requestUrl}/router/update/router`,

    /**
     * @description 标签相关
     */

    // 获取全部的 tags 列表
    getAllTagsUrl: `${requestUrl}/tags/get/allTags`,

    // 添加标签
    addTagsUrl: `${requestUrl}/tags/add/tags`,

    // 更新标签
    updateTagsUrl: `${requestUrl}/tags/update/tags`,

    // 删除标签
    deleteTagsUrl: `${requestUrl}/tags/delete/tags`,

    /**
     * @description 分类相关
     */

    // 获取全部的 categories 列表
    getAllCategoriesUrl: `${requestUrl}/categories/get/allCategories`,

    // 添加分类
    addCategoriesUrl: `${requestUrl}/categories/add/categories`,

    // 更新分类
    updateCategoriesUrl: `${requestUrl}/categories/update/categories`,

    // 删除分类
    deleteCategoriesUrl: `${requestUrl}/categories/delete/categories`,

    /**
     * @description 站点信息
     */

     // 获取站点信息
    getWebsiteInfoUrl: `${requestUrl}/websiteInfo/get/websiteInfo`,

    // 更新站点信息
    updateWebsiteInfoUrl: `${requestUrl}/websiteInfo/update/websiteInfo`,

    /**
     * @description 用户信息相关
     */
    // 更新用户基本信息
    updateUserInfoUrl: `${requestUrl}/userInfo/update/userInfo`,

    // 获取用户基本信息
    getUserInfoUrl: `${requestUrl}/UserInfo/get/userInfo`,

    /**
     * @desc 博客文章列表相关
     */

    // 获取全部的文章列表
    getAllArticleUrl: `${requestUrl}/article/get/article`,

    // 文章上传地址
    uploadBlogUrl: `${requestUrl}/article/upload/article`,




}

export default URL;
