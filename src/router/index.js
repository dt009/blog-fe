/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:17:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 11:01:24
 */

import Vue from 'vue';
import Router from 'vue-router';
import { Upload } from 'element-ui';

const HomePage = () => import(/* webpackChunkName: 'HomePage'*/ '../component/HomePage/HomePage.vue');
const AboutPage = () => import(/* webpackChunkName: 'AboutPage'*/ '../component/AboutPage/AboutPage.vue');
const TagsPage = () => import(/* webpackChunkName: 'TagsPage'*/ '../component/TagsPage/TagsPage.vue');
const UploadPage = () => import(/* webpackChunkName: 'UploadPage'*/ '../component/UploadPage/UploadPage.vue');
const ArticleDetailsPage = () => import(/* webpackChunkName: 'ArticleDetailsPage'*/ '../component/ArticleDetailsPage/ArticleDetailsPage.vue');
const LoginPage = () => import(/* webpackChunkName: 'LoginPage'*/ '../component/LoginPage/LoginPage.vue');
const RouterManagePage = () => import(/* webpackChunkName: 'RouterManagePage'*/ '../component/RouterManagePage/RouterManagePage.vue');


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
            component: RouterManagePage
        }
    ]
})

// 通过导航守卫可以设置默认路由
// router.beforeEach((to, from, next) => {
//     if (to.name === 'About') {
//         next('/about/home')
//     }
//     else {
//         next()
//     }
// })

export default router;
