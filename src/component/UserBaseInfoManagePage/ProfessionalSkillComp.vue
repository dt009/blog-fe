/*
 * @Author: duantao-ds
 * @Date: 2018-09-14 10:13:53
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 14:51:03
 */

<template>
    <div class="professional-skill">
        <h3>专业技能</h3>
        <div class="skill-list">
            <el-form label-position="right" size="mini">
                <el-form-item
                    v-for="(item, index) in professionalSkill"
                    :key="index"
                    :label="'技能' + (index + 1)"
                >
                    <el-checkbox v-model="item.isShow"></el-checkbox>
                    <el-input v-model="item.label" style="width: 200px"></el-input>
                    <el-rate
                        v-model="item.value"
                        allow-half
                        show-text
                        style="display: inline-block"
                        :texts="['了解', '一般', '良好', '熟练', '精通']"
                        ></el-rate>
                    <span style="margin-left: 20px">状态: <span :style="{color: item.isShow ? '#409eff' : 'red' }">{{item.isShow ? '展示' : '隐藏'}}</span></span>
                    <el-button @click="handleDeleteSkill(index)" v-if="professionalSkill.length !== 1" style="margin-left: 20px" type="danger">删除</el-button>
                    <el-button style="margin-left: 20px" v-if="professionalSkill.length - 1 === index" @click="handleAddSkill" type="primary">添加</el-button>
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
        Checkbox,
        Rate,
        Input,
        Button,
    } from 'element-ui';

    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Checkbox);
    Vue.use(Rate);
    Vue.use(Input);
    Vue.use(Button);

    export default {
        name: 'ProfessionalSkillComp',
        props: {
            professionalSkill: Array
        },

        computed: {

        },

        data() {
            return {
                showList: [],
            }
        },

        watch: {
            professionalSkill(val) {
                this.$emit('update:professionalSkill', val);
                this.getSkillArr(val);
            }
        },

        created() {
            this.getSkillArr(this.professionalSkill);
        },

        methods: {

            getSkillArr(val) {
                this.showList = Object.keys(val);
            },

            handleDeleteSkill(index) {
                this.professionalSkill.splice(index, 1)
            },

            handleAddSkill() {
                this.professionalSkill.push({
                    isShow: true,
                    label: '',
                    value: 1
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .professional-skill {
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
