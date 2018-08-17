/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:17:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 11:00:39
 */

import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../component/HomePage/HomePage.vue';
import AboutPage from '../component/AboutPage/AboutPage.vue';
import TagsPage from '../component/TagsPage/TagsPage.vue';


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
            component: AboutPage
        },
        {
            path: '/tags',
            name: 'TagsPage',
            component: TagsPage
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
