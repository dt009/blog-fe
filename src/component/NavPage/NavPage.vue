/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:24:28
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-13 17:49:45
 */

<template>
    <div class="nav-page">
        <el-menu
            mode="horizontal"
            background-color="#509eff"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :default-active="$route.name"
        >
            <el-menu-item
                v-for="(router, index) in routerList"
                :key="index"
                :route="{name: router.name, path: router.path, params: {}}"
                :index="router.name"
                v-if="router.type === 'other'"
            >
                <p><span class="font" v-html="router.icon"></span> {{router.label}}</p>
            </el-menu-item>

            <el-submenu style="height: 50px, line-hight: 50px" index="manage" v-if="userInfo.isLogin || isLogin">

                <span class="item-title" style="height: 50px; line-height: 50px;" slot="title"><span  class="font">&#xe670;</span> 后台管理系统</span>

                <el-menu-item
                    v-for="(router, index) in routerList"
                    :key="index"
                    v-if="router.type === 'own'"
                    :route="{name: router.name, path: router.path, params: {}}"
                    :index="router.name"
                    >
                    <p><span  class="font" v-html="router.icon"></span> {{router.label}}</p>
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="logout" v-if="userInfo.isLogin || isLogin" @click="logout">
            <span class="font">&#xe616;</span>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        Menu,
        MenuItem,
        Submenu,
        Button
    } from 'element-ui';

    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);
    Vue.use(Button);

    export default {
        name: 'NavPage',
        computed: {
            routerList() {
                return this.$store.getters.getShowRouterList;
            },

            userInfo() {
                return this.$store.state.userInfo;
            }
        },
        data () {
            return {
                isLogin: false
            }
        },
        created() {
            let data = sessionStorage.getItem('userInfo');

            if (data) {
                let userInfo = JSON.parse(data);
                this.isLogin = userInfo.isLogin;
                this.$store.commit('changeUserInfoValue', userInfo);
            }
        },
        methods: {
            logout() {
                this.isLogin = false;
                this.$store.commit('changeUserInfoValue', {});
                sessionStorage.clear();
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-page {
        height: 51px;
        position: relative;

        .el-menu {
            height: 100%;
            padding-left: 15px;
            .el-menu-item {
                height: 50px;
                line-height: 50px;
            }
        }

        .logout {
            position: absolute;
            top: 0;
            right: 30px;
            font-size: 25px;
            line-height: 51px;
            color: #fff;
        }
    }
</style>

<style>

.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 50px;
    line-height: 50px;
}
</style>
