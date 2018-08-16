/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 14:48:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-16 17:47:44
 */

<template>
    <div class="home-page">
        <h2>全部文章列表</h2>
        <div class="blog-list-box">
            <ul>
                <li>afafdasdfasdf</li>
            </ul>
            <el-pagination
                background
                layout="prev, pager, next, sizes, ->, total"
                :total="1000"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="10"
            />
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {Pagination} from 'element-ui';
    Vue.use(Pagination);

    export default {
        name: 'HomePage',
        data() {
            return {
                message: '这是主页的页面'
            }
        },
        methods: {
            fetch() {
                Fetch.post(URL.getAllArticleUrl, {
                        data: {
                            pageNumber: 1,
                            pageSize: 10
                        }
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        }
    }
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

            ul {
                flex: 1;
            }
        }
    }

</style>
