/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 14:48:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 17:27:48
 */

<template>
    <div class="home-page">
        <h2>全部文章列表</h2>
        <div class="blog-list-box">
            <el-table
                :data="showArticleList"
                stripe max-height="100%"
                height="400"
                style="width: 100%; flex: 1; overflow: auto; margin-bottom: 10px;"
                :row-style="{cursor: 'pointer'}"
                border="true"
            >

                <el-table-column label="#" prop="sign" width="60" fixed="left" />

                <el-table-column label="标题" prop="title" show-overflow-tooltip="true" width="150" fixed="left"></el-table-column>

                <el-table-column label="简介" show-overflow-tooltip="true" prop="description" width="370"></el-table-column>

                <el-table-column label="创建日期" prop="date" width="120" />

                <el-table-column label="评论数量" align="right" prop="comment_count" />

                <el-table-column label="分类"  prop="comment_count" fixed="right" show-overflow-tooltip="true" width="110">
                    <template slot-scope="scope">
                        <el-tag
                            v-for="(category, index) in scope.row.categories"
                            :key="index"
                            size="mini"
                            style="margin-right: 5px;">{{category}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column label="标签" prop="tag"  min-width="150" width="200">
                    <template slot-scope="scope">
                        <el-tag
                            v-for="(tag, index) in scope.row.tag"
                            :key="index"
                            size="mini"
                            style="margin-right: 5px;">{{tag}}</el-tag>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                background
                layout="total, prev, pager, next, ->, sizes"
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
        Tag
    } from "element-ui";

    Vue.use(Pagination);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Tag);

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
            }
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
        h2 {
            height: 30px;
            font-size: 18px;
            line-height: 30px;
            padding-left: 10px;
            border-left: 5px solid #409eff;
        }
        .blog-list-box {
            flex: 1;
            margin: 10px 0;
            padding: 15px;
            border: 1px solid #409eff;
            box-shadow: 5px 5px 5px #409eff;
            display: flex;
            flex-direction: column;
            background: #fff;
            ul {
                flex: 1;
                overflow: auto;
                li {
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #555;
                }
            }
        }
    }
</style>
