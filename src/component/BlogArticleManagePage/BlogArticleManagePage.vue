/*
 * @Author: duantao-ds
 * @Date: 2018-09-10 10:21:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-21 16:50:05
 */

<template>
    <div class="blog-article-manage">
        <h2>博客文章管理</h2>
        <div class="article-manage-main">
            <el-button @click="handleAddAndUpdateArticle" size="small" type="primary">添加新的文章</el-button>

            <el-dialog :title="'新增文章'" :visible.sync="isDialogShow">
                <el-form size="mini" label-width="100px" label-position="right">
                    <el-form-item label="文章标题: ">
                        <el-input style="width: 200px" v-model="newFormData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="文章描述: ">
                        <el-input style="width: 200px" v-model="newFormData.description"></el-input>
                    </el-form-item>
                    <el-form-item label="文章分类: ">
                        <el-checkbox-group
                            v-model="newFormData.categoties"
                            :min="0"
                            :max="2"
                        >
                            <el-checkbox
                                v-for="(categories, index) in categoriesList"
                                :key="index"
                                :label="categories"
                            >
                                {{categories.name}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="文章标签: ">
                        <el-checkbox-group
                            v-model="newFormData.tags"
                            :min="0"
                            :max="5"
                        >
                            <el-checkbox
                                v-for="(tags, index) in tagsList"
                                :key="index"
                                :label="tags"
                            >
                                {{tags.name}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="上传博客文章: ">
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
                            <el-button slot="trigger" size="mini" type="primary">选取上传文件</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleHideDialog" size="small" type="info">取消</el-button>
                        <el-button size="small" type="primary">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>

            <div class="all-article-list">
                <el-table
                    :data="showArticleList"
                    style="width: 100%; margin-bottom: 10px;">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="上传时间">
                                    <span>{{ props.row.date }}</span>
                                </el-form-item>
                                <el-form-item label="博客ID">
                                    <span>{{ props.row.id }}</span>
                                </el-form-item>
                                <el-form-item label="标签">
                                    <el-tag size="mini" v-for="(tag, index) in props.row.tags" :key="index">{{tag}}</el-tag>
                                </el-form-item>
                                <el-form-item label="分类">
                                    <el-tag size="mini" v-for="(category, index) in props.row.categories" :key="index">{{category}}</el-tag>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="编号"
                        prop="sign"
                        width="100"
                    >
                    </el-table-column>
                    <el-table-column
                        label="标题"
                        width="250"
                        :show-overflow-tooltip="true"
                        class-name="table-column-blog-title"
                    >
                        <div slot-scope="scope">
                            <router-link :to="{name: 'ArticleDetailsPage', params: {filename: scope.row.filename}}">{{scope.row.title}}</router-link>
                        </div>
                    </el-table-column>
                    <el-table-column
                        label="描述"
                        prop="description"
                        :show-overflow-tooltip="true"
                    >
                    </el-table-column>

                    <el-table-column
                        label="评论数量"
                        prop="comment_count"
                        width="100"
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="150"
                    >
                        <div slot-scope="scope">
                            <router-link style="color: #409eff;" :to="{name: 'ArticleDetailsPage', params: {filename: scope.row.filename}}">查看</router-link>
                        </div>
                    </el-table-column>
                </el-table>

                <el-pagination
                    background
                    layout="total, prev, pager, next, jumper, ->, sizes"
                    :total="articleTotal"
                    :page-sizes="[7, 8, 10, 15, 20]"
                    :page-size="pageSize"
                    @size-change="handleSizeChange"
                    @current-change="handlePageNumberChange"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Pagination,
        Table,
        TableColumn,
        Tag,
        Form,
        FormItem,
        Button,
        Dialog,
        Input,
        CheckboxGroup,
        Checkbox,
        Upload,
        Message
    } from 'element-ui';

    Vue.use(Pagination);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Tag);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Button);
    Vue.use(Dialog);
    Vue.use(Input);
    Vue.use(CheckboxGroup);
    Vue.use(Checkbox);
    Vue.use(Upload);

    import URL from '../../request_api/request_api.js';

    export default {
        name: 'BlogArticleManagePage',
        computed: {
            // 所有的文章的个数
            articleTotal() {
                return this.$store.state.allArticleList.length;
            },

            // 每页显示多少条数据
            pageSize() {
                return this.$store.state.pageSize;
            },

            // 第几页
            pageNumber() {
                return this.$store.state.pageNumber;
            },

            // 要展示的文章列表
            showArticleList() {
                return this.$store.getters.showArticleList;
            },

            // 所有的分类
            categoriesList() {
                return this.$store.state.allCategoriesList;
            },

            // 所有的标签
            tagsList() {
                return this.$store.state.allTagsList;
            },
        },
        data() {
            return {
                isDialogShow: false, // dialog 是否展示
                uploadUrl: URL.uploadBlogUrl, // 上传文件的地址
                UploadFileList: [], // 上传文件的列表
                filename: '', // 文件名
                newFormData: {
                    title: '', // 文章标题
                    description: '', // 文章描述
                    tags: [], // 文章标签
                    categories: [], // 文章分类
                }
            }
        },

        beforeCreate() {
            this.$store.dispatch("getAllArticle");
            this.$store.dispatch('getAllCategoriesList');
            this.$store.dispatch('getAllTagsList');
        },

        methods: {
            // 每页展示数据的条数改变
            handleSizeChange(size) {
                this.$store.commit("changePageSize", size);
            },

            // 展示的是第几页改变
            handlePageNumberChange(number) {
                this.$store.commit("changePageNumber", number);
            },

            // 添加新的和更新文章
            handleAddAndUpdateArticle() {
                this.isDialogShow = true;
            },

            // 上传文章前
            handlePreview(file) {
                console.log(file);
            },

            // 隐藏 dialog
            handleHideDialog() {
                this.isDialogShow = false;
            },

            // 文章上传成功后的操作
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
        },


    }
</script>

<style lang="less" scoped>
    .blog-article-manage {
        padding-left: 10px;
        padding-top: 10px;
        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .article-manage-main {

            .all-article-list {
                padding-right: 10px;
                padding-bottom: 10px;
            }
        }
    }
</style>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .table-column-blog-title div {
        cursor: pointer;
    }
    .table-column-blog-title div:hover {
        color: #409eff;
        text-decoration: underline;
    }


</style>
