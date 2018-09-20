/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:56:42
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 11:00:53
 */

<template>
    <div class="tags-page">
        <h2>所有标签</h2>
        <div class="tags-main">
            <ul>
                <li class="list" v-for="(item, index) in showTagList" :key="index">
                    <el-tooltip :content="item.description" placement="top" effect="light">
                        <el-tag
                            :hit="true"
                            :size="getTagProps(item.used_count).size"
                            :type="getTagProps(item.used_count).type"
                        ><div @click="getThisTagArticle">{{item.name}}</div></el-tag>
                    </el-tooltip>
                </li>
            </ul>

        </div>
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
        name: 'TagsPage',
        computed: {
            showTagList() {
                return this.$store.getters.getShowTagsList;
            }
        },
        beforeCreate () {
            this.$store.dispatch('getAllTagsList');
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
                        size: 'mini',
                        type: 'danger'
                    }
                }
                else if (size > 5 && size <= 20) {
                    return {
                        size: 'small',
                        type: 'info'
                    }
                }
                else if (szie > 20 && size <= 50) {
                    return {
                        size: 'medium',
                        type: 'success'
                    }
                }
                else {
                    return {
                        size: '',
                        type: 'warning'
                    }
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .tags-page {
        padding-left: 10px;
        padding-top: 10px;
        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .tags-main {

            .list {
                margin: 10px;
            }
        }
    }
</style>
