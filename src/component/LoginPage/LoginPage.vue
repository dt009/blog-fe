/*
 * @Author: duantao-ds
 * @Date: 2018-08-26 18:50:50
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-26 19:54:12
 */

<template>
    <div class="login-page">
        <h2>登录页面</h2>
        <div class="form-content">
            <el-form :model="formData" status-icon label-width="100px" class="form-main">
                <el-form-item label="用户名: ">
                    <el-input style="width: 500px" type="text" v-model="formData.user" auto-complete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码: ">
                    <el-input style="width: 500px" type="password" v-model="formData.pass" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>{{userInfo}}</div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        Form,
        FormItem,
        Input,
        Button
    } from 'element-ui';

    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Button);

    export default {
        name: 'LoginPage',
        computed: {
            userInfo() {
                return JSON.stringify(this.$store.state.userInfo);
            }
        },
        data() {
            return {
                formData: {
                    user: '',
                    pass: ''
                },
                message: 'dfadf'
            }
        },
        methods: {
            handleSubmit() {
                alert(JSON.stringify(this.formData));
                this.$store.dispatch('login', this.formData)
            }
        }
    }
</script>

<style lang="less" scoped>
    .login-page {
        padding-left: 10px;
        padding-top: 10px;

        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }
    }
</style>
