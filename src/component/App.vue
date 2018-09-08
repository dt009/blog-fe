/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 23:48:27
 */

<template>
    <div class="app">
        <el-container style="width: 100%; height: 100%; overflow: hidden">

            <el-header style="width: 100%; height: 2px; background: #409eff;"></el-header>

            <el-container style="width: 90%; min-width: 1100px; margin: 0 auto; min-height: 100%; min-width: 1300px">

                <el-aside width="16%" style="padding-right: 5px;">
                    <AsidePage/>
                </el-aside>

                <el-container style="margin-left: 10px">
                    <el-header style="margin-bottom: 15px; padding: 0; height: 50px; background: #f00;">
                        <NavPage/>
                    </el-header>
                    <el-main style="padding: 0; background: #fff; margin-bottom: 20px; position: relative;">
                        <transition name="fade">
                            <router-view style="width: 100%; position: absolute;"></router-view>
                        </transition>
                    </el-main>
                </el-container>

            </el-container>

        </el-container>
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
    }
</style>

<style>
    .fade-enter-active {
        transition: all .5s ease;
    }

    .fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-leave-to {
        transform: translateX(-100%);
        opacity: 0;
    }

    .fade-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    .fade-enter {
        transform: translateX(100%);
        opacity: 0;
    }
</style>
