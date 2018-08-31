/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:24:28
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 11:08:58
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
                <p><span class="font">&#xe618;</span> 首页</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'AboutPage', path: '/about', params: {anchor: ' '}}"
                index="2"
            >
                <p><span  class="font">&#xe653;</span> 关于</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'TagsPage', path: '/tags', params: {}}"
                index="3"
            >
                <p><span  class="font">&#xe69e;</span> 标签</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'UploadPage', params: {}}"
                index="4"
            >
                <p><span  class="font">&#xe69e;</span> 上传</p>
            </el-menu-item>
            <el-submenu style="height: 50px, line-hight: 50px" index="5">
                <span class="item-title" style="height: 50px; line-height: 50px;" slot="title"><span  class="font">&#xe653;</span> 后台管理系统</span>
                <el-menu-item :route="{name: 'RouterManagePage', params: {}}" index="5-1">路由管理</el-menu-item>
                <el-menu-item index="5-2">标签管理</el-menu-item>
                <el-menu-item index="5-3">分类管理</el-menu-item>
                <el-menu-item index="5-4">文章管理</el-menu-item>
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
