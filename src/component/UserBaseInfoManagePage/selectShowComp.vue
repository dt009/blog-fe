/*
 * @Author: duantao-ds
 * @Date: 2018-09-13 19:02:38
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-13 19:11:40
 */

<template>
    <div class="select-show">
        <div>
            <h3>未知</h3>
            <el-form size="mini" :model="selectShow" label-position="right">
                <el-form-item>
                    <div slot="label">电话: </div>
                    <el-checkbox size="mini" v-model="selectShow.mobile.isShow"></el-checkbox>
                    <el-input size="mini" style="width: 300px" v-model="selectShow.mobile.value"></el-input>
                    <span>状态: <span :style="{color: selectShow.mobile.isShow ? '#409eff' : 'red' }">{{selectShow.mobile.isShow ? '显示' : '隐藏'}}</span></span>
                </el-form-item>
                <el-form-item>
                    <div slot="label">邮箱: </div>
                    <el-checkbox size="mini" v-model="selectShow.email.isShow"></el-checkbox>
                    <el-input size="mini" style="width: 300px" v-model="selectShow.email.value"></el-input>
                    <span>状态: <span :style="{color: selectShow.email.isShow ? '#409eff' : 'red' }">{{selectShow.email.isShow ? '显示' : '隐藏'}}</span></span>
                </el-form-item>
                <el-form-item>
                    <div slot="label">电话: </div>
                    <el-checkbox size="mini" v-model="selectShow.qq.isShow"></el-checkbox>
                    <el-input size="mini" style="width: 300px" v-model="selectShow.qq.value"></el-input>
                    <span>状态: <span :style="{color: selectShow.qq.isShow ? '#409eff' : 'red' }">{{selectShow.qq.isShow ? '显示' : '隐藏'}}</span></span>
                </el-form-item>
                <el-form-item>
                    <div slot="label">电话: </div>
                    <el-checkbox size="mini" v-model="selectShow.weiChat.isShow"></el-checkbox>
                    <el-input size="mini" style="width: 300px" v-model="selectShow.weiChat.value"></el-input>
                    <span>状态: <span :style="{color: selectShow.weiChat.isShow ? '#409eff' : 'red' }">{{selectShow.weiChat.isShow ? '显示' : '隐藏'}}</span></span>
                </el-form-item>
                <el-form-item>
                    <div slot="label">学历: </div>
                    <el-checkbox size="mini" v-model="selectShow.education.isShow"></el-checkbox>
                    <el-select v-model="selectShow.education.value">
                        <el-option v-for="(education, index) in educationList" :key="index" :label="education.label" :value="education.value"></el-option>
                    </el-select>
                    <span>状态: <span :style="{color: selectShow.education.isShow ? '#409eff' : 'red' }">{{selectShow.education.isShow ? '显示' : '隐藏'}}</span></span>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        Form,
        FormItem,
        Input,
        Checkbox,
        Select,
        Option
    } from 'element-ui';

    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Checkbox);
    Vue.use(Select);
    Vue.use(Option);

    export default {
        name: 'SelectShowComp',
        props: {
            selectShow: Object
        },

        data() {
            return {
                educationList: [
                    {value: '0', label: '初中以下'},
                    {value: '1', label: '初中'},
                    {value: '2', label: '高中'},
                    {value: '3', label: '中专'},
                    {value: '4', label: '大专'},
                    {value: '5', label: '本科'},
                    {value: '6', label: '研究生, 硕士, 博士'},
                    {value: '7', label: '其他'},

                ]
            }
        },

        watch: {
            selectShow(val) {
                this.$emit('update:selectShow', val)
            }
        }
    }
</script>

<style lang="less" scoped>
    .select-show {

        width: 80%;

        h3 {
            height: 20px;
            line-height: 10px;
            margin-bottom: 10px;
            border-bottom: 1px double #eee;
            padding-bottom: 5px;
        }
    }
</style>
