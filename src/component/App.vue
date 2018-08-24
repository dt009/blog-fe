/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 15:08:07
 */

<template>
    <div class="app">
        <el-container style="width: 100%">
            <el-header style="width: 100%; height: 2px; background: #409eff;"></el-header>
            <el-container style="width: 90%; min-width: 1100px; margin: 0 auto; min-height: 100%;">
                <el-aside width="20%" style="padding-right: 5px;">
                    <AsidePage/>
                </el-aside>
            </el-container>

        </el-container>
        <!-- <div class="top-top"></div>
        <el-container style="width: 90%; min-width: 1100px; margin: 0 auto; min-height: 100%">

            <el-aside width="20%">

            </el-aside>

            <el-container>
                <el-header style="margin-bottom: 15px;">
                    <NavPage/>
                </el-header>
                <el-main style="padding-bottom: 0; margin-bottom: 40px; min-height: 400px" >
                    <keep-alive :include="cacheList">
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container> -->
    </div>
</template>


<script>
    import Vue from 'vue';
    import {
        Container,
        Main,
        Aside,
        Header,
        Footer,
        Row,
        Col
    } from 'element-ui';

    import AsidePage from './AsidePage/AsidePage.vue';
    import NavPage from './NavPage/NavPage.vue';

    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Aside);
    Vue.use(Header);
    Vue.use(Footer);
    Vue.use(Row);
    Vue.use(Col);

    export default {
        name: 'APP',
        components: {
            AsidePage,
            NavPage
        },
        data() {
            return {
                cacheList: [
                    'HomePage'
                ]
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
        height: 100%;
        width: 100%;
        background: #f2f2f2;
        .top-top {
            height: 5px;
            width: 100%;
            background: #409eff;
        }

    }
</style>
