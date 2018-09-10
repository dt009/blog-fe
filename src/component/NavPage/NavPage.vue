/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:24:28
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-10 16:44:06
 */

<template>
    <div class="nav-page">
        <el-menu
            mode="horizontal"
            background-color="#509eff"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :default-active="activeIndex"
        >
            <el-menu-item
                :route="{name: 'HomePage', path: '/', params: {}}"
                index="1"
            >
                <p><span class="font">&#xe648;</span> 首页</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'AboutPage', path: '/about', params: {anchor: ' '}}"
                index="2"
            >
                <p><span  class="font">&#xe602;</span> 关于</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'TagsPage', path: '/tags', params: {}}"
                index="3"
            >
                <p><span  class="font">&#xe63e;</span> 标签</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'UploadPage', params: {}}"
                index="4"
            >
                <p><span  class="font">&#xe622;</span> 分类</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'ArticleSearchPage', params: {}}"
                index="6"
            >
                <p><span  class="font">&#xe658;</span> 搜索</p>
            </el-menu-item>
            <el-submenu style="height: 50px, line-hight: 50px" index="5">
                <span class="item-title" style="height: 50px; line-height: 50px;" slot="title"><span  class="font">&#xe670;</span> 后台管理系统</span>
                <el-menu-item :route="{name: 'RouterManagePage', params: {}}" index="a">
                    <p><span  class="font">&#xe60d;</span> 路由管理</p>
                </el-menu-item>
                <el-menu-item :route="{name: 'TagsManagePage', params: {}}" index="b">
                    <p><span  class="font">&#xe626;</span> 标签管理</p>
                </el-menu-item>
                <el-menu-item :route="{name: 'CategoriesManagePage', params: {}}" index="c">
                    <p><span  class="font">&#xe620;</span> 分类管理</p>
                </el-menu-item>
                <el-menu-item :route="{name: 'WebsiteBaseInfoManagePage', params: {}}" index="d">
                    <p><span  class="font">&#xe61a;</span> 站点信息管理</p>
                </el-menu-item>
                <el-menu-item :route="{name: 'UserBaseInfoManagePage', params: {}}" index="e">
                    <p><span  class="font">&#xe611;</span> 用户信息管理</p>
                </el-menu-item>
                <el-menu-item :route="{name: 'BlogArticleManagePage', params: {}}" index="f">
                    <p><span  class="font">&#xe671;</span> 文章管理</p>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        Menu,
        MenuItem,
        Submenu
    } from 'element-ui';

    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);

    export default {
        name: 'NavPage',
        computed: {
            activeIndex() {
                let active = '';
                switch (this.$route.name) {
                    case 'HomePage':
                        active = '1'
                        break;

                    case 'AboutPage':
                        active = '2'
                        break;

                    case 'TagsPage':
                        active = '3'
                        break;

                    case 'UploadPage':
                        active = '4'
                        break;

                    default:
                        break;
                }
                return active;
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-page {
        height: 51px;

        .el-menu {
            height: 100%;
            padding-left: 15px;
            .el-menu-item {
                height: 50px;
                line-height: 50px;
            }
        }
    }
</style>

<style>

.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
}
</style>
