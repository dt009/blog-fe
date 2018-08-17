/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 17:34:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 19:57:09
 */

<template>
    <div class="upload-page">
        <h2>博客上传</h2>
        <div class="page-main">
            <div class="blog-title">
                <label for="title">
                        博客标题:
                        <input name="title" id="title" type="text" placeholder="请输入博客的标题">
                    </label>
            </div>
            <div class="blog-categories">
                <h3>选择博客的分类: </h3>
                <el-checkbox-group
                    v-model="selectCategoriesList"
                    :min="0"
                    :max="2"
                    @change="handleSelectCategoriesListChange"
                >
                    <el-checkbox
                        v-for="(categories, index) in categoriesList"
                        :key="index"
                        :label="categories.code"
                    >
                        {{categories.label}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="blog-categories">
                <h3>选择博客的标签: </h3>
                <el-checkbox-group
                    v-model="selectTagsList"
                    :min="0"
                    :max="5"
                    @change="handleSelectTagsListChange"
                >
                    <el-checkbox
                        v-for="(tags, index) in tagsList"
                        :key="index"
                        :label="tags.code"
                    >
                        {{tags.label}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        CheckboxGroup,
        Checkbox
    } from 'element-ui';

    Vue.use(CheckboxGroup);
    Vue.use(Checkbox);
    export default {
        name: 'UploadPage',

        beforeCreate() {
            this.$store.dispatch('getAllCategoriesList');
            this.$store.dispatch('getAllTagsList')
        },

        data () {
            return {
                selectCategoriesList: [],
                selectTagsList: []
            }
        },

        computed: {
            categoriesList() {
                return this.$store.state.allCategoriesList;
            },

            tagsList() {
                return this.$store.state.allTagsList;
            }
        },

        methods: {
            handleSelectCategoriesListChange(value) {
                console.log('选中的值  ===>> ', value);
                this.selectCategoriesList = value;
            },

            handleSelectTagsListChange(value) {
                console.log('选中的值  ===>> ', value);
                this.selectTagsList = value;
            },

        }
    }
</script>

<style lang="less" scoped>
    .upload-page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        h2 {
            height: 30px;
            font-size: 18px;
            line-height: 30px;
            padding-left: 10px;
            border-left: 5px solid #409eff;
            margin-bottom: 10px;
        }
        .page-main {
            border: 1px solid #509eff;
            padding: 20px;
            box-shadow: 5px 5px 5px #509eff;
            background: #fff;

            .blog-title {
                font-size: 16px;
                line-height: 40px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 10px;

                input {
                    margin-left: 12px;
                    width: 300px;
                    height: 40px;
                    font-size: 16px;
                    padding-left: 10px;
                }
            }

            .blog-categories {
                padding-top: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #ccc;

                h3 {
                    height: 30px;
                    font-size: 16px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }

                .el-checkbox-group {
                    padding-left: 20px;
                }
            }
        }
    }
</style>
