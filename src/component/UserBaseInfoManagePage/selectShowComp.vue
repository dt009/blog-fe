/*
 * @Author: duantao-ds
 * @Date: 2018-09-13 19:02:38
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 17:11:00
 */

<template>
    <div class="select-show">
        <div>
            <h3>未知</h3>
            <el-form size="mini" label-position="right">
                <el-form-item>
                    <div slot="label">学历: </div>
                    <el-checkbox size="mini" v-model="education.isShow"></el-checkbox>
                        <el-select v-model="education.value">
                            <el-option v-for="(education, index) in educationList" :key="index" :label="education.label" :value="education.value"></el-option>
                        </el-select>
                        <span>状态: <span :style="{color: education.isShow ? '#409eff' : 'red' }">{{education.isShow ? '显示' : '隐藏'}}</span></span>
                </el-form-item>
                <el-form-item v-for="(item, index) in selectShow" :label="'联系方式' + (index + 1)" :key="index">
                    <el-checkbox size="mini" v-model="item.isShow"></el-checkbox>
                    <el-input size="mini" style="width: 100px" v-model="item.label"></el-input>
                    <el-input size="mini" style="width: 200px" v-model="item.value"></el-input>
                    <span>状态: <span :style="{color: item.isShow ? '#409eff' : 'red' }">{{item.isShow ? '显示' : '隐藏'}}</span></span>
                    <el-button @click="handleDeleteWay(index)" v-if="selectShow.length !== 1" type="danger" style="margin-left: 20px"> 删除</el-button>
                    <el-button @click="handleAddWay" v-if="selectShow.length - 1 === index" type="primary" style="margin-left: 20px"> 添加</el-button>
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
        Option,
        Button
    } from 'element-ui';

    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Checkbox);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(Button);

    export default {
        name: 'SelectShowComp',
        props: {
            selectShow: Array,
            education: Object
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
            },
            education(val) {
                this.$emit('update:education', val)
            }
        },

        methods: {
            handleDeleteWay(index) {
                this.selectShow.splice(index, 1);
            },

            handleAddWay() {
                this.selectShow.push({
                    label: '',
                    isShow: true,
                    value: ''
                })
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
