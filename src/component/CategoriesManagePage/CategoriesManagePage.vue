/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 10:09:11
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-08 22:39:30
 */

<template>
    <div class="tags-manage-page">
        <h2>分类管理</h2>
        <div class="tags-manage-page">
            <el-button @click="handleAddNewCategories" size="small" type="primary" icon="el-icon-plus">新增一个分类</el-button>

            <!-- 添加和修改分类的 dialog -->
            <el-dialog :visible.sync="isDialogShow" :title="dialogType === 'add' ? '新增分类' : '修改分类' ">

                <el-form :model="dialogForm" status-icon :rules="dialogFormRules" ref="dialogForm">
                    <el-form-item label="分类的 Code" :label-width="'120px'" xsize="small" prop="code">
                        <el-input style="width: 400px" v-model="dialogForm.code" auto-complete="off" placeholder="分类的 Code eg: test || study"></el-input>
                    </el-form-item>

                    <el-form-item label="分类的 Name" :label-width="'120px'" xsize="small" prop="name">
                        <el-input style="width: 400px" v-model="dialogForm.name" auto-complete="off" placeholder="分类名称 eg: 测试 || 数据库"></el-input>
                    </el-form-item>

                    <el-form-item label="分类的描述" :label-width="'120px'" xsize="small" prop="description">
                        <el-input style="width: 400px" v-model="dialogForm.description" auto-complete="off" placeholder="分类描述 eg: 这是分类标示测试"></el-input>
                    </el-form-item>

                    <el-form-item :label-width="'120px'">
                        <el-button @click="handleHideDialog('dialogForm')">取消</el-button>
                        <el-button type="primary" :loading="isDialogLoading" @click="handleAddAndUpdateCategories('dialogForm')">{{dialogType === 'add' ? '确认添加' : '确认修改'}}</el-button>
                    </el-form-item>
                </el-form>

            </el-dialog>

            <!-- 分类的展示 -->
            <el-table
                :data="showCategoriesList"
                stripe
                :header-cell-style="{background: '#f5f7fa'}"
            >
                <el-table-column label="" prop="sign" width="50"></el-table-column>

                <el-table-column label="分类 Code" prop="code" width="150"></el-table-column>

                <el-table-column label="分类名称" prop="name" width="200"></el-table-column>

                <el-table-column label="使用次数" prop="used_count" width="100"></el-table-column>

                <el-table-column label="分类描述" prop="description" :show-overflow-tooltip="true"></el-table-column>

                <el-table-column label="预览" width="200">
                    <div slot-scope="scope">
                        <el-tooltip :content="scope.row.description" placement="top" effect="light">
                            <el-tag
                                :hit="true"
                                :size="getTagProps(scope.row.used_count).size"
                                :type="getTagProps(scope.row.used_count).type"
                            ><div>{{scope.row.name}}</div></el-tag>
                        </el-tooltip>
                    </div>
                </el-table-column>

                <el-table-column label="操作">
                    <div slot-scope="scope">
                        <el-button @click="handleChangeTag(scope.row)" type="text" size="small">修改</el-button>
                        <el-popover placement="top" v-model="scope.row.popover">
                            <p><i style="color: #0f0" class="el-icon-warning"></i> 确定要删除这条信息吗?</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="scope.row.popover = false">取消</el-button>
                                <el-button type="primary" :loading="isDeleteLoading" size="mini" @click="handleDeleteTag(scope.$index, scope.row)">确定</el-button>
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
    import Vue from 'vue';
    import {
        Tag,
        Table,
        TableColumn,
        Button,
        Popover,
        Dialog,
        Form,
        FormItem,
        Input,
        Message,
        Tooltip
    } from 'element-ui';
    import URL from '../../request_api/request_api.js';
    import Fetch from '../../common/fetch';

    Vue.use(Tag);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Button);
    Vue.use(Popover);
    Vue.use(Dialog);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Tooltip);

    export default {
        name: 'CategoriesManagePage',

        computed: {

            // table 展示的 tag的列表
            showCategoriesList() {
                return this.$store.getters.getShowCategoriesList;
            },

            // dialog 的 form 数据
            dialogForm() {
                return this.dialogType === 'add' ? this.dialogAddForm : this.dialogUpdateFrom
            },
        },

        data() {

            // 验证 code
            let validateCode = (rule, value, callback) => {
                value = value.trim();
                let reg = /^[a-zA-Z]{2,10}$/;
                if (!value) {
                    callback(new Error('分类的 code 不能为空'));
                }
                else if (!reg.test(value)){
                    callback(new Error('code 只能2-10位, 以字母数字下划线组成'));
                }
                else{
                    callback();
                }
            };

            // 验证 name
            let validateName = (rule, value, callback) => {
                value = value.trim();
                let reg = /[A-Za-z0-9_\-\u4e00-\u9fa5]{2,8}/;
                if (!value) {
                    callback(new Error('分类的名称 不能为空'));
                }
                else if (!reg.test(value)){
                    callback(new Error('code 只能2-8位, 以字母数字下划线和汉字组成'));
                }
                else{
                    callback();
                }
            };

            // 验证 name
            let validateDescription = (rule, value, callback) => {
                value = value.trim();
                let reg = /[A-Za-z0-9_\-\u4e00-\u9fa5]{2,50}/;
                if (value && !reg.test(value)){
                    callback(new Error('分类的描述只能2-50位, 以字母数字下划线和汉字组成'));
                }
                else{
                    callback();
                }
            };

            return {
                dialogType: 'add', // dialog里面表单的类型
                // 添加分类的的 form 数据
                dialogAddForm: {
                    code: '',
                    name: '',
                    used_count: 0,
                    description: ''
                },
                // 修改分类的 from 数据
                dialogUpdateFrom: {},
                // dialog 的表单验证
                dialogFormRules: {
                    code: [
                        {validator: validateCode, trigger: 'blur'}
                    ],
                    name: [
                        {validator: validateName, trigger: 'blur'}
                    ],
                    description: [
                        {validator: validateDescription, trigger: 'blur'}
                    ],
                },
                isDialogShow: false, // dialog 是否展示
                isDialogLoading: false, // dialog 的 loading
                isDeleteLoading: false, // 删除是的 loading
            }
        },

        beforeCreate () {
            this.$store.dispatch('getAllCategoriesList');
        },

        methods: {
            // 展示 dialog
            handleAddNewCategories() {
                this.dialogType = 'add';
                this.isDialogShow = true;
            },

            // 取消 dialog, 重置 dialog 里的内容
            handleHideDialog(value) {
                this.$refs[value].resetFields();
                this.isDialogShow = false;
            },

            // tag 的大小
            getTagProps(size) {

                if (size >= 0 && size <= 5) {
                    return {
                        size: 'small',
                        type: 'danger'
                    }
                }
                else if (size > 5 && size <= 20) {
                    return {
                        size: 'medium',
                        type: 'info'
                    }
                }
                else if (szie > 20 && size <= 50) {
                    return {
                        size: '',
                        type: 'success'
                    }
                }
                else {
                    return {
                        size: '',
                        type: ''
                    }
                }
            },

            // 添加分类和修改
            handleAddAndUpdateCategories(value) {
                let url = this.dialogType === 'add' ? URL.addCategoriesUrl : URL.updateCategoriesUrl;

                this.$refs[value].validate(valid => {

                    if (valid) {
                        this.isDialogLoading = true;
                        Fetch.post(url, this.dialogForm)
                            .then(res => {
                                let {status, message, data} = res;
                                if (status === 'ok') {
                                    this.isDialogLoading = false;

                                    Message.success(message);
                                    this.handleHideDialog(value); // 关闭 dialog

                                    this.$store.dispatch('getAllCategoriesList');
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
            },

            // 修改分类
            handleChangeTag(value) {
                this.dialogType = 'update';
                this.dialogUpdateFrom = value;
                this.isDialogShow = true;
            },

            // 删除分类
            handleDeleteTag(index, value) {

                this.isDeleteLoading = true;

                Fetch.post(URL.deleteCategoriesUrl, value)
                    .then(res => {
                        let {status, message, data} = res;
                        if (status === 'ok') {
                            this.isDeleteLoading = false;
                            value.popover = false;
                            Message.success(message);
                            this.$store.dispatch('getAllCategoriesList');
                        }
                        else {
                            this.isDeleteLoading = false;
                        }
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    .tags-manage-page {
        padding-left: 10px;
        padding-top: 10px;
        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .tags-manage-page {
            padding-right: 10px;

            .el-table {
                margin-top: 10px;
            }
        }
    }
</style>
