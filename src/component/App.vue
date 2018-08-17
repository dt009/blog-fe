/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 10:50:31
 */

<template>
    <div class="app">
        <div class="top-top"></div>
        <el-container style="width: 1100px; margin: 0 auto; min-height: 100%">

            <el-aside width="205px">
                <AsidePage/>
            </el-aside>
            <el-container>
                <el-header>
                    <NavPage/>
                </el-header>
                <el-main style="padding-bottom: 0;">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        <el-container>

        </el-container>
    </div>
</template>


<script>
    import Vue from 'vue';
    import {
        Container,
        Main,
        Aside,
        Header
    } from 'element-ui';

    import AsidePage from './AsidePage/AsidePage.vue';
    import NavPage from './NavPage/NavPage.vue';

    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Aside);
    Vue.use(Header)
    export default {
        name: 'APP',
        components: {
            AsidePage,
            NavPage
        },
        data() {
            return {
                message: 'Hello World!!'
            }
        },
        computed: {
            name() {
                return this.$store.state.message;
            }
        }
    }
</script>

<style lang="less" scoped>
    .app {
        min-height: 100%;
        width: 100%;
        background: #f2f2f2;

        .top-top {
            height: 2px;
            width: 100%;
            background: #409eff;
        }
    }
</style>
