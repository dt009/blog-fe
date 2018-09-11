/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:17:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 19:08:36
 */

import Vue from 'vue';
import Router from 'vue-router';
import {Message} from 'element-ui';

const HomePage = () => import(/* webpackChunkName: `${random}`*/ '../component/HomePage/HomePage.vue');
const AboutPage = () => import(/* webpackChunkName: 'AboutPage'*/ '../component/AboutPage/AboutPage.vue');
const TagsPage = () => import(/* webpackChunkName: 'TagsPage'*/ '../component/TagsPage/TagsPage.vue');
const UploadPage = () => import(/* webpackChunkName: 'UploadPage'*/ '../component/UploadPage/UploadPage.vue');
const ArticleDetailsPage = () => import(/* webpackChunkName: 'ArticleDetailsPage'*/ '../component/ArticleDetailsPage/ArticleDetailsPage.vue');
const LoginPage = () => import(/* webpackChunkName: 'LoginPage'*/ '../component/LoginPage/LoginPage.vue');
const RouterManagePage = () => import(/* webpackChunkName: 'RouterManagePage'*/ '../component/RouterManagePage/RouterManagePage.vue');
const TagsManagePage = () => import(/* webpackChunkName: 'TagsManagePage'*/ '../component/TagsManagePage/TagsManagePage.vue');
const CategoriesManagePage = () => import(/* webpackChunkName: 'CategoriesManagePage'*/ '../component/CategoriesManagePage/CategoriesManagePage.vue');
const WebsiteBaseInfoManagePage = () => import(/* webpackChunkName: 'WebsiteBaseInfoMangePage'*/ '../component/WebsiteBaseInfoManagePage/WebsiteBaseInfoManagePage.vue');
const UserBaseInfoManagePage = () => import(/* webpackChunkName: 'UserBaseInfoManagePage'*/ '../component/UserBaseInfoManagePage/UserBaseInfoManagePage.vue');
const BlogArticleManagePage = () => import(/* webpackChunkName: 'BlogArticleManagePage'*/ '../component/BlogArticleManagePage/BlogArticleManagePage.vue');
const ArticleSearchPage = () => import(/* webpackChunkName: 'ArticleSearchPage'*/ '../component/ArticleSearchPage/ArticleSearchPage.vue');
const CategoriesPage = () => import(/* webpackChunkName: 'CategoriesManagePage'*/ '../component/CategoriesPage/CategoriesPage.vue');

Vue.use(Router);

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage,
        },
        {
            path: '/tags',
            name: 'TagsPage',
            component: TagsPage
        },
        {
            path: '/upload_blog',
            name: 'UploadPage',
            component: UploadPage
        },
        {
            path: '/article_details/:filename',
            name: 'ArticleDetailsPage',
            component: ArticleDetailsPage,
            props: true
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/router_manage',
            name: 'RouterManagePage',
            component: RouterManagePage,
            meta: {checkLogin: true}
        },
        {
            path: '/tags_manage',
            name: 'TagsManagePage',
            component: TagsManagePage,
            meta: {checkLogin: true}
        },
        {
            path: '/categories_manage',
            name: 'CategoriesManagePage',
            component: CategoriesManagePage,
            meta: {checkLogin: true}
        },
        {
            path: '/website_base_info_manage',
            name: 'WebsiteBaseInfoManagePage',
            component: WebsiteBaseInfoManagePage,
            meta: {checkLogin: true}
        },
        {
            path: '/user_base_info_manage',
            name: 'UserBaseInfoManagePage',
            component: UserBaseInfoManagePage,
            meta: {checkLogin: true}
        },
        {
            path: '/blog_article_manage',
            name: 'BlogArticleManagePage',
            component: BlogArticleManagePage,
            meta: {checkLogin: true}
        },
        {
            path: '/article_search',
            name: 'ArticleSearchPage',
            component: ArticleSearchPage
        },
        {
            path: '/categories',
            name: 'CategoriesPage',
            component: CategoriesPage
        },

    ]
});



// 通过导航守卫可以设置默认路由
router.beforeEach((to, from, next) => {
    // debugger

    let isCheckLogin = false;

    to.matched.forEach(item => {
        if (item.meta && item.meta.checkLogin) {
            isCheckLogin = true;
        }
    });

    let data = sessionStorage.getItem('userInfo');
    if (data && data.isLogin) {
        next();
    }
    else if (!data && isCheckLogin) {
        Message.warning('需要登录联系管理员....');
        next({path: '/'});
    }
    else {
        next()
    }
})

export default router;
