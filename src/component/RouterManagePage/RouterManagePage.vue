/*
 * @Author: duantao-ds
 * @Date: 2018-08-31 10:54:32
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-10 18:21:41
 */

<template>
    <div class="router-manage-page">
        <h2>路由管理</h2>
        <div class="page-main">
            <el-button @click="handleAddNewRouter" size="small" type="primary" icon="el-icon-plus">新增一个路由</el-button>
            <!-- dialog -->
            <el-dialog :visible.sync="isDialogShow" :title="dialogType === 'add' ? '新增路由' : '修改路由'">
                <!-- dialog 里嵌套的 form -->
                <el-form :model="dialogForm" status-icon :rules="dialogFormRules" ref="dialogForm">

                    <el-form-item label="路由名称" :label-width="'120px'" xsize="small" prop="name">
                        <el-input style="width: 400px" v-model="dialogForm.name" auto-complete="off" placeholder="路由名称 eg: HomePage"></el-input>
                    </el-form-item>

                    <el-form-item label="路由路径" :label-width="'120px'" size="small" prop="path">
                        <el-input style="width: 400px" v-model="dialogForm.path" auto-complete="off" placeholder="路由的路径 eg: /home"></el-input>
                    </el-form-item>

                    <el-form-item label="路由页面" :label-width="'120px'" size="small" prop="label">
                        <el-input style="width: 400px" v-model="dialogForm.label" auto-complete="off" placeholder="页面名称: eg: 主页"></el-input>
                    </el-form-item>

                    <el-form-item label="路由展示icon" :label-width="'120px'" size="small" prop="icon">
                        <el-input style="width: 400px" v-model="dialogForm.icon" auto-complete="off" placeholder="页面图标 eg: &#xe653;"></el-input>
                        <span style="color: #509eff;" class="font" v-html="dialogForm.icon"></span>
                    </el-form-item>

                    <el-form-item label="路由的分类" :label-width="'120px'" size="small">
                        <el-radio-group v-model="dialogForm.type">
                            <el-radio label="other"></el-radio>
                            <el-radio label="own"></el-radio>
                            <el-radio label="not_nav"></el-radio>
                            <el-radio label="params"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item :label-width="'120px'">
                        <el-button @click="handleHideDialog('dialogForm')" :disabled="isDialogLoading">取消</el-button>
                        <el-button type="primary" :loading="isDialogLoading" @click="handleAddAndUpdateRouter('dialogForm')">{{dialogType === 'add' ? '确认添加' : '确认修改'}}</el-button>
                    </el-form-item>

                </el-form>

            </el-dialog>

            <!-- table 展示 tags 数据 -->
            <el-table
                :data="showList"
                stripe
                :header-cell-style="{background: '#f5f7fa'}"
            >
                <el-table-column label="" prop="sign" width="50">

                </el-table-column>
                <el-table-column label="name" prop="name"></el-table-column>
                <el-table-column label="path" prop="path"></el-table-column>
                <el-table-column label="label" prop="label" width="120"></el-table-column>
                <el-table-column label="type" prop="type" width="80"></el-table-column>
                <el-table-column label="icon" prop="icon" width="150">
                    <div slot-scope="scope">
                        <span>{{scope.row.icon}}</span> <span style="color: #509eff;">预览:</span><span style="color: #509eff;" class="font" v-html="scope.row.icon"></span>
                    </div>
                </el-table-column>
                <el-table-column label="操作" width="80">
                    <div slot-scope="scope">
                        <el-button @click="handleChangeRouter(scope.row)" type="text" size="small">修改</el-button>
                        <el-popover placement="top" v-model="scope.row.popover">
                            <p><i style="color: #0f0" class="el-icon-warning"></i> 确定要删除这条信息吗?</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="scope.row.popover = false">取消</el-button>
                                <el-button type="primary" :loading="isDeleteLoading" size="mini" @click="handleDeleteRouter(scope.$index, scope.row)">确定</el-button>
                            </div>
                            <el-button size="small" type="text" @click="scope.row.popover = true" slot="reference">删除</el-button>
                        </el-popover>
                    </div>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {
        Table,
        TableColumn,
        Button,
        Popover,
        Dialog,
        Form,
        FormItem,
        Input,
        RadioGroup,
        Radio,
        Message
    } from 'element-ui';
    import Vue from 'vue';
    import Fetch from '../../common/fetch';
    import URL from '../../request_api/request_api.js';

    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Button);
    Vue.use(Popover);
    Vue.use(Dialog);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Radio);
    Vue.use(RadioGroup);

    export default {
        name: 'RouterMangePage',
        computed: {
            // table 中展示的 数据
            showList() {
                return this.$store.getters.getShowRouterList;
            },

            //  dialog 中 form 需要的数据
            dialogForm() {
                return this.dialogType === 'add' ? this.dialogNewForm : this.updateRouterForm
            }
        },
        beforeCreate () {
            this.$store.dispatch('getRouterList');
        },
        data() {

            // dialog 表单中 name 的验证规则
            let validateName = (rule, value, callback) => {
                value = value.trim();
                let reg = /^[A-Z][a-zA-Z]+Page$/;
                if (!value) {
                    callback(new Error('路由名称不能为空'));
                }
                else if (!reg.test(value)){
                    callback(new Error('路由名都是一个大写字母开头 以 Page 结尾的'));
                }
                else{
                    callback();
                }
            };

            // dialog 表单中 path 的验证规则
            let validatePath = (rule, value, callback) => {
                value = value.trim();
                let reg = /^\/[a-zA-z]+/;
                if (!value) {
                    callback(new Error('路由的路径不能为空'));
                }
                else if (!reg.test(value) && value !== '/') {
                    callback(new Error('路由路径请以 "/" 开头'));
                }
                else {
                    callback();
                }
            }

            // dialog 表单中 Label 的验证规则
            let validateLabel = (rule, value, callback) => {
                value = value.trim();
                if (!value) {
                    callback(new Error('路由页面不能为空'));
                }
                else if (value.length > 2 && value.length > 8){
                    callback(new Error('路由页面的长度应该为 3-8 个字'));
                }
                else {
                    callback();
                }
            }

            // dialog 表单中 Icon 的验证规则
            let validateIcon = (rule, value, callback) => {
                value = value.trim();
                let reg = /^(&#).+;$/;
                if (value && !reg.test(value)) {
                    callback(new Error('输入不正确'));
                }
                else {
                    callback();
                }
            }

            return {
                isDialogShow: false, // dialog 是否展示
                // 添加 router 时 表单的数据
                isDeleteLoading: false, // 删除 router 时 请求 loading
                dialogNewForm: {
                    name: '',
                    label: '',
                    path: '',
                    icon: '',
                    type: 'other'
                },
                isDialogLoading: false, // dialog 里确认按钮是否 loading 中
                updateRouterForm: {}, // 修改 router 时的表单数据
                dialogType: 'add', // dialog 是添加 router 还是更新 router
                // 表单的验证规则
                dialogFormRules: {
                    name: [
                        {validator: validateName, trigger: 'blur'}
                    ],
                    path: [
                        {validator: validatePath, trigger: 'blur'}
                    ],
                    label: [
                        {validator: validateLabel, trigger: 'blur'}
                    ],
                    icon: [
                        {validator: validateIcon, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            // 修改路由
            handleChangeRouter(value) {
                this.dialogType = 'update';
                this.updateRouterForm = value;
                this.isDialogShow = true;
            },

            // 删除路由
            handleDeleteRouter(index, value) {

                this.isDeleteLoading = true;

                Fetch.post(URL.deleteRouterUrl, value)
                    .then(res => {
                        let {status, message, data} = res;
                        if (status === 'ok') {
                            this.isDeleteLoading = false;
                            value.popover = false;
                            Message.success(message);
                            this.$store.dispatch('getRouterList');
                        }
                        else {
                            this.isDeleteLoading = false;
                        }
                    })
            },

            // 打开 dialog
            handleAddNewRouter() {
                this.dialogType = 'add';
                this.isDialogShow = true;
            },

            // 隐藏 dialog
            handleHideDialog(value) {
                this.$refs[value].resetFields();
                this.isDialogShow = false;
            },

            // 添加和修改路由的请求操作
            handleAddAndUpdateRouter(value) {

                let url = this.dialogType === 'add' ? URL.addRouterUrl : URL.updateRouterUrl;

                // 验证
                this.$refs[value].validate(valid => {
                    if (valid) {
                        this.isDialogLoading = true;
                        Fetch.post(url, this.dialogForm)
                            .then(res => {
                                console.log(res);
                                let {status, message, data} = res;
                                if (status === 'ok') {
                                    this.isDialogLoading = false;
                                    Message.success(message);
                                    this.handleHideDialog(value);
                                    this.$store.dispatch('getRouterList');
                                }
                                else {
                                    this.isDialogLoading = false;
                                }
                            })
                    }
                    else {
                        return false;
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>

    .router-manage-page {
        padding-left: 10px;
        padding-top: 10px;

        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .page-main {
            padding: 10px;

            & > .el-button {
                margin-bottom: 10px;
            }
        }
    }


</style>
