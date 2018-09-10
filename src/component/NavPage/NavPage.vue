/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:24:28
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-10 17:25:08
 */

<template>
    <div class="nav-page">
        <el-menu
            mode="horizontal"
            background-color="#509eff"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :default-active="$route.name"
        >
            <el-menu-item
                v-for="(router, index) in routerList"
                :key="index"
                :route="{name: router.name, path: router.path, params: {}}"
                :index="router.name"
                v-if="router.type === 'other'"
            >
                <p><span class="font" v-html="router.icon"></span> {{router.label}}</p>
            </el-menu-item>

            <el-submenu style="height: 50px, line-hight: 50px" index="manage">

                <span class="item-title" style="height: 50px; line-height: 50px;" slot="title"><span  class="font">&#xe670;</span> 后台管理系统</span>

                <el-menu-item
                    v-for="(router, index) in routerList"
                    :key="index"
                    v-if="router.type === 'own'"
                    :route="{name: router.name, path: router.path, params: {}}"
                    :index="router.name"
                    >
                    <p><span  class="font" v-html="router.icon"></span> {{router.label}}</p>
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
            routerList() {
                return this.$store.getters.getShowRouterList;
            }
        },
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
