/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:24:28
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 16:21:59
 */

<template>
    <div class="nav-page">
        <el-menu
            mode="horizontal"
            background-color="#509eff"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :default-active="activeIndex"
        >
            <el-menu-item
                :route="{name: 'HomePage', path: '/', params: {}}"
                index="1"
            >
                <p><span class="font">&#xe618;</span> 首页</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'AboutPage', path: '/about', params: {}}"
                index="2"
            >
                <p><span  class="font">&#xe653;</span> 关于</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'TagsPage', path: '/tags', params: {}}"
                index="3"
            >
                <p><span  class="font">&#xe69e;</span> 标签</p>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        Menu,
        MenuItem
    } from 'element-ui';

    Vue.use(Menu);
    Vue.use(MenuItem)
    export default {
        name: 'NavPage',
        computed: {
            activeIndex() {
                let active = '';
                switch (this.$route.name) {
                    case 'HomePage':
                        active = '1'
                        break;

                    case 'AboutPage':
                        active = '2'
                        break;

                    case 'TagsPage':
                        active = '3'
                        break;

                    default:
                        break;
                }
                return active;
            }
        }
    }
</script>

<style lang="less" scoped>
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
</style>
