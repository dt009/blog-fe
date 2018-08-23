/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 15:29:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-23 19:21:16
 */

<template>
    <div class="aside-page">
        <div class="aside-top">
            <header>
                <h1>{{title}}</h1>
                <div class="page-keywords">
                    {{keywords}}
                </div>
            </header>
        </div>
        <WebsiteOverviewPage/>
    </div>
</template>

<script>
    import WebsiteOverviewPage from '../WebsitOverviewPage/WebsiteOverviewPage.vue';
    export default {
        name: 'AsidePage',
        components: {
            WebsiteOverviewPage
        },
        data() {
            return {
                title: '段涛的博客'
            }
        },

        computed: {
            keywords() {
                return ['段涛', 'blog', '学习', 'xxx'].join(' ')
            }
        }
    }
</script>

<style lang="less" scoped>
    .aside-page {
        width: 100%;

        .aside-top {
            width: 95%;
            box-shadow: 5px 5px 5px #409eff;
            border: 1px solid #409eff;
            margin-bottom: 30px;
            header {
                color: #fff;
                height: 100px;
                background: #409EFF;
                h1 {
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 20px;
                    letter-spacing: 3px;
                }
                .page-keywords {
                    text-align: center;
                    font-size: 14px;
                    line-height: 50px;
                }
            }
        }
    }
</style>
