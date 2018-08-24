/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 14:48:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 18:52:38
 */

<template>
    <div class="home-page">
        <h2>全部文章列表</h2>
        <div class="blog-list-box">
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
</template>

<script>
    import Vue from "vue";
    import {
        Pagination,
        Table,
        TableColumn,
        Tag,
        Form,
        FormItem
    } from "element-ui";

    Vue.use(Pagination);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Tag);
    Vue.use(Form);
    Vue.use(FormItem);

    export default {
        name: "HomePage",
        data() {
            return {
                message: "这是主页的页面"
            };
        },
        computed: {
            articleTotal() {
                return this.$store.state.allArticleList.length;
            },

            pageSize() {
                return this.$store.state.pageSize;
            },

            pageNumber() {
                return this.$store.state.pageNumber;
            },

            showArticleList() {
                return this.$store.getters.showArticleList;
            }
        },
        methods: {
            handleSizeChange(size) {
                this.$store.commit("changePageSize", size);
            },

            handlePageNumberChange(number) {
                this.$store.commit("changePageNumber", number);
            },
        },

        beforeCreate() {
            this.$store.dispatch("getAllArticle");
        }
    };
</script>

<style lang="less" scoped>
    .home-page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #fff;
        padding-top: 10px;
        padding-bottom: 20px;
        padding-left: 10px;

        h2 {
            height: 30px;
            font-size: 18px;
            line-height: 30px;
            padding-left: 7px;
            border-left: 5px solid #409eff;
        }

        .blog-list-box {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #fff;
            padding-top: 10px;
            padding-right: 12px;
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
