/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 17:34:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-19 14:48:29
 */

<template>
    <div class="upload-page">
        <h2>博客上传</h2>
        <div class="page-main">
            <div class="blog-title">
                <label for="title">
                        博客标题:
                        <input name="title" id="title" type="text" v-model="title" placeholder="请输入博客的标题">
                    </label>
            </div>
            <div class="blog-title">
                <label for="description">
                        博客标题:
                        <input name="description" id="description" type="text" v-model="description" placeholder="请输入博客的描述">
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
                        :label="categories"
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
                        :label="tags"
                    >
                        {{tags.label}}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="upload-box">
                <h3>上传博客文件:</h3>
                <el-upload
                    class="upload-blog"
                    ref="upload"
                    :action="uploadUrl"
                    :multiple="false"
                    accept=".md"
                    :file-list="UploadFileList"
                    :on-preview="handlePreview"
                    :limit="1"
                    :on-success="handleUploadSuccess"
                >
                      <el-button slot="trigger" size="small" type="primary">选取上传文件</el-button>
                </el-upload>
            </div>

            <div class="submit-btn">
                <el-button type="success" @click="handleSubmitData">上传</el-button>
            </div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        CheckboxGroup,
        Checkbox,
        Upload,
        Button,
        Message
    } from 'element-ui';
    import URL from 'api/request_api';
    import Fetch from 'common/fetch';

    Vue.use(CheckboxGroup);
    Vue.use(Checkbox);
    Vue.use(Upload);
    Vue.use(Button);
    Vue.use(Message);

    export default {
        name: 'UploadPage',

        beforeCreate() {
            this.$store.dispatch('getAllCategoriesList');
            this.$store.dispatch('getAllTagsList')
        },

        data () {
            return {
                selectCategoriesList: [],
                selectTagsList: [],
                uploadUrl: URL.uploadBlogUrl,
                UploadFileList: [],
                filename: '',
                title: '',
                description: ''
            }
        },

        computed: {
            categoriesList() {
                return this.$store.state.allCategoriesList;
            },

            tagsList() {
                return this.$store.state.allTagsList;
            },

            getSubmitData() {
                return {
                    title: this.title,
                    tags: this.selectTagsList,
                    filename: this.filename,
                    categories: this.selectCategoriesList,
                    description: this.description
                }
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

            handlePreview(file) {
                console.log(file);
            },

            handleUploadSuccess(res) {

                let {status, message, data} = res;

                if (status === 'ok') {
                    Message.success({
                        message: data.message,
                        duration: '1500'
                    });

                    this.filename = data.filename
                }
            },

            handleSubmitData() {
                let fetchData = this.getSubmitData;
                Fetch.post(URL.addBlogArticleUrl, fetchData)
                    .then(res => {
                        let {status, message, data} = res;

                        if (status === 'ok') {
                            Message.success({
                                message: data.message,
                                duration: '1500'
                            })
                        }
                    })
            }

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
                margin-bottom: 10px;

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

            .upload-box {
                padding-top: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #ccc;

                h3 {
                    height: 30px;
                    font-size: 16px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }

                .upload-blog {
                    width: 300px;
                }


            }

            .submit-btn {
                padding-top: 10px;
                padding-bottom: 10px;

                .el-button {
                    margin-left: 200px;
                }
            }
        }
    }
</style>
