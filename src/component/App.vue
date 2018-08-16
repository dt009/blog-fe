/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-16 11:48:22
 */

<template>
    <div class="app">
        <div class="top-top"></div>
        <el-container style="width: 1100px; margin: 0 auto; min-height: 100%">
            <el-aside width="210px">
                <AsidePage/>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>


<script>
    import Vue from 'vue';
    import {
        Container,
        Main,
        Aside
    } from 'element-ui';

    import AsidePage from './AsidePage/AsidePage.vue';

    Vue.use(Container);
    Vue.use(Main);
    Vue.use(Aside);
    export default {
        name: 'APP',
        components: {
            AsidePage
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

        .top-top {
            height: 2px;
            width: 100%;
            background: #409eff;
        }
    }
</style>
