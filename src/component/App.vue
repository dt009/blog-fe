/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 16:32:44
 */

<template>
    <div class="app">
        <div class="top-top"></div>
        <el-container style="width: 80%; min-width: 1100px; margin: 0 auto; min-height: 100%">

            <el-aside width="205px">
                <AsidePage/>
            </el-aside>

            <el-container>
                <el-header>
                    <NavPage/>
                </el-header>
                <el-main style="padding-bottom: 0; margin-bottom: 40px; min-height: 400px" >
                    <keep-alive :include="cacheList">
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
        <!-- <el-container style="width: 1100px; margin: 10px auto 0; min-height: 100%">
            <el-footer height="30px" style="background: #ccc;"></el-footer>
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
        min-height: 100%;
        width: 100%;
        background: #f2f2f2;
        display: flex;
        flex-direction: column;

        .top-top {
            height: 2px;
            width: 100%;
            background: #409eff;
        }
    }
</style>
