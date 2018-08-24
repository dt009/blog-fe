/*
 * @Author: duantao-ds
 * @Date: 2018-08-16 14:44:29
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 17:37:58
 */

let requestUrl = '';

if (process.env.NODE_ENV === 'production') {
    requestUrl = `//${window.location.host}`;
}
else {
    requestUrl = '//localhost:18080'
}

console.log('请求的地址 host ===>> ', requestUrl);

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
    addBlogArticleUrl: `${requestUrl}/blog/addArticle`,

    // 请求博客的具体内容
    getArticleDetailUrl: `${requestUrl}/get/article/details`
}

export default URL;
