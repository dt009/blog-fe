/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 15:29:16
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-15 17:41:56
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
                    <router-link tag="li" to="/" exact-active-class="link-active" exact>
                        <a><span>&#xe618;</span> 首页</a>
                    </router-link>
                    <router-link tag="li" to="/about" exact-active-class="link-active" exact>
                        <a><span>&#xe653;</span> 关于</a>
                    </router-link>
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
                        a {
                            display: block;
                            height: 100%;
                            width: 100%;
                        }

                        &.link-active {
                            background: #ccc;
                            color: #409eff;
                        }
                        span {
                            font-family: 'iconfont'
                        }
                        &:hover {
                            background: #e5e5e5;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>
