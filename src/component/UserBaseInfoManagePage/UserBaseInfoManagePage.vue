/*
 * @Author: duantao-ds
 * @Date: 2018-09-10 10:21:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-13 17:49:59
 */

<template>
    <div class="user-base-info-manage">
        <h2>作者信息管理</h2>

        <div class="user-info-manage-main">
            <div class="base-info">
                <h3>基本信息</h3>
                <el-form size="mini" class="form-base-info" inline label-position="right" label-width="60px" :model="baseInfo" >
                    <el-form-item >
                        <div slot="label">姓名: </div>
                        <el-input size="mini" v-model="baseInfo.name" style="width: 200px"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <div slot="label">生日: </div>
                        <el-date-picker
                            size="mini"
                            v-model="baseInfo.birthday"
                            type="date"
                            placeholder="请选择生日"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            :clearable="false"
                        ></el-date-picker>
                    </el-form-item>
                    <el-form-item >
                        <div slot="label">性别: </div>
                        <el-radio-group size="mini" v-model="baseInfo.gender">
                            <el-radio :label="1">男</el-radio>
                            <el-radio :label="2">女</el-radio>
                            <el-radio :label="0">保密</el-radio>
                        </el-radio-group>
                    </el-form-item>

                </el-form>
            </div>
            <div>
                <h3>未知</h3>
                <el-form size="mini" :model="selectShow" label-position="right">
                    <el-form-item >
                        <div slot="label">电话: </div>
                        <el-checkbox size="mini" v-model="selectShow.mobile.isShow"></el-checkbox>
                        <el-input size="mini" style="width: 300px" v-model="selectShow.mobile.value"></el-input>
                        <span>状态: <span :style="{color: selectShow.mobile.isShow ? '#409eff' : 'red' }">{{selectShow.mobile.isShow ? '显示' : '隐藏'}}</span></span>
                    </el-form-item>
                    <el-form-item >
                        <div slot="label">邮箱: </div>
                        <el-checkbox size="mini" v-model="selectShow.email.isShow"></el-checkbox>
                        <el-input size="mini" style="width: 300px" v-model="selectShow.email.value"></el-input>
                        <span>状态: <span :style="{color: selectShow.email.isShow ? '#409eff' : 'red' }">{{selectShow.email.isShow ? '显示' : '隐藏'}}</span></span>
                    </el-form-item>
                    <el-form-item >
                        <div slot="label">电话: </div>
                        <el-checkbox size="mini" v-model="selectShow.qq.isShow"></el-checkbox>
                        <el-input size="mini" style="width: 300px" v-model="selectShow.qq.value"></el-input>
                        <span>状态: <span :style="{color: selectShow.qq.isShow ? '#409eff' : 'red' }">{{selectShow.qq.isShow ? '显示' : '隐藏'}}</span></span>
                    </el-form-item>
                    <el-form-item >
                        <div slot="label">电话: </div>
                        <el-checkbox size="mini" v-model="selectShow.weiChat.isShow"></el-checkbox>
                        <el-input size="mini" style="width: 300px" v-model="selectShow.weiChat.value"></el-input>
                        <span>状态: <span :style="{color: selectShow.weiChat.isShow ? '#409eff' : 'red' }">{{selectShow.weiChat.isShow ? '显示' : '隐藏'}}</span></span>
                    </el-form-item>
                    <el-form-item >
                        <div slot="label">学历: </div>
                        <el-checkbox size="mini" v-model="selectShow.weiChat.isShow"></el-checkbox>
                        <el-input size="mini" style="width: 300px" v-model="selectShow.weiChat.value"></el-input>
                        <span>状态: <span :style="{color: selectShow.weiChat.isShow ? '#409eff' : 'red' }">{{selectShow.weiChat.isShow ? '显示' : '隐藏'}}</span></span>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Form,
        FormItem,
        Button,
        Tag,
        Input,
        Upload,
        DatePicker,
        RadioGroup,
        Radio,
        Checkbox,
        Select,
        Option
    } from 'element-ui';

    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Button);
    Vue.use(Tag);
    Vue.use(Input);
    Vue.use(DatePicker);
    Vue.use(RadioGroup);
    Vue.use(Radio);
    Vue.use(Checkbox);
    Vue.use(Select);
    Vue.use(Option);

    export default {
        name: 'WebsiteBaseInfoManagePage',

        computed: {

        },

        data() {
            return {
                baseInfo: {
                    name: '',
                    gender: 0,
                    birthday: '',
                    avatar: '',
                },
                selectShow: {
                    mobile: {
                        isShow: true,
                        value: '',
                    },
                    email: {
                        isShow: true,
                        value: '',
                    },
                    qq: {
                        isShow: true,
                        value: '',
                    },
                    weiChat: {
                        isShow: true,
                        value: '',
                    },
                    education: {
                        isShow: false,
                        value: ''
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .user-base-info-manage {
        padding-left: 10px;
        padding-top: 10px;
        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .user-info-manage-main {
            padding-top: 10px;

            .base-info {
                width: 700px;
            }


        }
    }

    h3 {
        height: 20px;
        line-height: 10px;
        margin-bottom: 10px;
        border-bottom: 1px double #eee;
        padding-bottom: 5px;
    }
</style>
