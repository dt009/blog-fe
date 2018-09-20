/*
 * @Author: duantao-ds
 * @Date: 2018-09-10 10:21:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-10 16:49:53
 */

<template>
    <div class="categories-page">
        <h2>所有分类</h2>
        <ul class="categories-main">
            <li class="list" v-for="(item, index) in showCategoriesList" :key="index">
                <el-tooltip :content="item.description" placement="top" effect="light">
                    <el-tag :hit="true" :size="getTagProps(item.used_count).size" :type="getTagProps(item.used_count).type">
                        <div @click="getThisTagArticle">{{item.name}}</div>
                    </el-tag>
                </el-tooltip>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Tag,
        Tooltip
    } from 'element-ui';

    Vue.use(Tag);
    Vue.use(Tooltip);
    export default {
        name: 'CategoriesPage',
        computed: {
            // table 展示的 tag的列表
            showCategoriesList() {
                return this.$store.getters.getShowCategoriesList;
            },
        },
        beforeCreate () {
            this.$store.dispatch('getAllCategoriesList');
        },
        methods: {

            // 获取点击标签的按钮
            getThisTagArticle() {
                alert(111)
            },

            // tag 的大小
            getTagProps(size) {

                if (size >= 0 && size <= 5) {
                    return {
                        size: 'small',
                        type: 'danger'
                    }
                }
                else if (size > 5 && size <= 20) {
                    return {
                        size: 'medium',
                        type: 'info'
                    }
                }
                else if (szie > 20 && size <= 50) {
                    return {
                        size: '',
                        type: 'success'
                    }
                }
                else {
                    return {
                        size: '',
                        type: ''
                    }
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .categories-page {
        padding-left: 10px;
        padding-top: 10px;
        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .categories-main {

            li {
                padding: 10px;
            }
        }
    }
</style>
