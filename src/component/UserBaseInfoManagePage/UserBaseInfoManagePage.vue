/*
 * @Author: duantao-ds
 * @Date: 2018-09-10 10:21:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-14 15:19:18
 */

<template>
    <div class="user-base-info-manage">
        <h2>作者信息管理</h2>
        <button @click="getState">点击我</button>
        <div class="user-info-manage-main">
            <BaseInfoComp :baseInfo.sync="baseInfo"></BaseInfoComp>
            <SelectShowComp :selectShow.sync="selectShow"></SelectShowComp>
            <ProfessionalSkill :professionalSkill.sync="professionalSkill"></ProfessionalSkill>
        </div>
        <div class="save-btn">
            <el-button type="primary" @click="isDialogShow = true">保存</el-button>
            <el-dialog
                title="提示"
                :visible.sync="isDialogShow"
                width="30%"
                center>
                <span>是否保存</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleHideDialog">取 消</el-button>
                    <el-button type="primary" @click="handleSaveData">确 定</el-button>
                </span>
            </el-dialog>

        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {
        Button,
        Dialog
    } from 'element-ui';

    Vue.use(Button);
    Vue.use(Dialog);

    import BaseInfoComp from './BaseInfoComp.vue';

    import SelectShowComp from './SelectShowComp.vue';

    import ProfessionalSkill from './ProfessionalSkillComp.vue';

    export default {
        name: 'WebsiteBaseInfoManagePage',

        components: {
            BaseInfoComp,
            SelectShowComp,
            ProfessionalSkill
        },

        computed: {

        },

        data() {
            return {
                isDialogShow: false,
                baseInfo: {
                    name: '',
                    gender: 0,
                    birthday: '',
                    profession: '',
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
                },

                professionalSkill: [
                    {
                        label: 'HTML',
                        isShow: true,
                        value: 1
                    },
                    {
                        label: 'CSS',
                        isShow: true,
                        value: 1
                    },
                    {
                        label: 'JavaScript',
                        isShow: true,
                        value: 1
                    },
                    {
                        label: 'NodeJs',
                        isShow: true,
                        value: 1
                    },
                ]


            }
        },

        updated () {
            console.log(this.$data);
        },

        methods: {
            getState() {
                console.log('data ===>>> ', this.$data);
            },
            handleHideDialog() {
                this.isDialogShow = false;
            },

            handleSaveData() {
                console.log(this.$data);

                this.handleHideDialog();
            }
        }
    }
</script>

<style lang="less" scoped>
    .user-base-info-manage {
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 20px;

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
