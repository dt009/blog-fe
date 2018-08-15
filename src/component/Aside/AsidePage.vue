/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 15:29:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-15 16:51:46
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
            <nav>
                <ul>
                    <li>
                        <router-link to="/">
                            <span>&#xe618;</span>
                            首页
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            <span>&#xe653;</span>
                            关于
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AsidePage',
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
        border: 1px solid #409eff;
        .aside-top {

            box-shadow: 10px 10px 5px #409eff;

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
            nav {
                padding-top: 10px;
                ul {
                    li {
                        height: 30px;
                        line-height: 30px;
                        padding-left: 30px;

                        span {
                            font-family: 'iconfont'
                        }

                        &:hover {
                            background: #ccc;
                        }
                    }
                }
            }
        }
    }
</style>
