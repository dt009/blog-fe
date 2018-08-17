/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:24:28
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 11:16:45
 */

<template>
    <div class="nav-page">
        <el-menu
            mode="horizontal"
            background-color="#509eff"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            default-active="1"
        >
            <el-menu-item
                :route="{name: 'HomePage', params: {}}"
                index="1"
            >
                <p><span class="font">&#xe618;</span> 首页</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'AboutPage', params: {}}"
                index="2"
            >
                <p><span  class="font">&#xe653;</span> 关于</p>
            </el-menu-item>
            <el-menu-item
                :route="{name: 'TagsPage', params: {}}"
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
        name: 'NavPage'
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
