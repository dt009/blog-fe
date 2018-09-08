/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 15:29:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 23:53:08
 */

<template>
    <div class="aside-page">
        <div class="aside-top">
            <header>
                <h1>{{title}}</h1>
            </header>
        </div>
        <div class="aside-main">
            <div class="tabs">
                <el-radio-group size="mini" @change="getSelectTabValue" v-model="selectTab">
                    <el-radio-button label="list">文章目录</el-radio-button>
                    <el-radio-button label="overview">站点概览</el-radio-button>
                </el-radio-group>
            </div>
            <div class="main-content">
                <el-collapse-transition>
                    <WebsiteOverviewPage v-if="selectTab === 'overview'"/>
                    <div v-if="selectTab === 'list'"> 文章列表</div>
                </el-collapse-transition>
            </div>
        </div>
    </div>
</template>

<script>
    import WebsiteOverviewPage from '../WebsitOverviewPage/WebsiteOverviewPage.vue';
    import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
    import Vue from 'vue';
    import {
        RadioGroup,
        RadioButton,
        CollapseTr
    } from 'element-ui';

    Vue.use(RadioGroup);
    Vue.use(RadioButton);
    Vue.component(CollapseTransition.name, CollapseTransition)

    export default {
        name: 'AsidePage',

        components: {
            WebsiteOverviewPage
        },

        data() {
            return {
                title: '段涛的博客',
                selectTab: 'overview',
            }
        },

        methods: {
            getSelectTabValue(value) {
                this.selectTab = value
                console.log('getSelectTabValue ==>> ', value);
            }
        }


    }
</script>

<style lang="less" scoped>
    .aside-page {
        width: 100%;

        .aside-top {
            width: 100%;
            box-shadow: 2px 2px 2px #409eff;
            margin-bottom: 12px;

            header {
                color: #fff;
                height: 50px;
                background: #409EFF;

                h1 {
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 18px;
                    letter-spacing: 3px;
                }
            }
        }

        .aside-main {
            width: 100%;
            border: 1px solid #409eff;
            box-shadow: 2px 2px 2px #409eff;
            margin-bottom: 20px;
            background: #f2f2f2;
            padding-bottom: 10px;

            .tabs {
                width: 100%;
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px dotted #ccc;
            }
        }
    }
</style>
