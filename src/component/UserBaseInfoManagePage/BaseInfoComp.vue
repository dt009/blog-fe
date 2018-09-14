/*
 * @Author: duantao-ds
 * @Date: 2018-09-13 18:21:55
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 14:55:17
 */

<template>
    <div class="base-info">
        <h3>基本信息</h3>
        <el-form size="mini" class="form-base-info" inline label-position="right" label-width="60px" :model="baseInfo">
            <el-form-item>
                <div slot="label">姓名: </div>
                <el-input size="mini" v-model="baseInfo.name" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item>
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
            <el-form-item>
                <div slot="label">职业: </div>
                <el-input size="mini" v-model="baseInfo.profession" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item>
                <div slot="label">性别: </div>
                <el-radio-group size="mini" v-model="baseInfo.gender">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                    <el-radio :label="0">保密</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Form,
        FormItem,
        Input,
        DatePicker,
        RadioGroup,
        Radio,
    } from 'element-ui';

    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(DatePicker);
    Vue.use(RadioGroup);
    Vue.use(Radio);

    export default {

        name: 'BaseInfoComp',

        props: {
            baseInfo: Object
        },

        data() {
            return {

            }
        },

        watch: {
            baseInfo(val) {
                this.$emit('update:baseInfo', val)
            }
        }
    }
</script>

<style lang="less" scoped>

    .base-info {
        width: 700px;

        h3 {
            height: 20px;
            line-height: 10px;
            margin-bottom: 10px;
            border-bottom: 1px double #eee;
            padding-bottom: 5px;
        }
    }

</style>
