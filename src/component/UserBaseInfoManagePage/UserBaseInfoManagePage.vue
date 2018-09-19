/*
 * @Author: duantao-ds
 * @Date: 2018-09-10 10:21:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-19 11:35:19
 */

<template>
    <div class="user-base-info-manage">
        <h2>作者信息管理</h2>

        <div class="user-info-manage-main">
            <BaseInfoComp
                :baseInfo.sync="info"
                :name.sync="info.name"
                :birthday.sync="info.birthday"
                :gender.sync="info.gender"
                :profession.sync="info.profession"
            ></BaseInfoComp>
            <SelectShowComp v-if="!!info.contact_way" :selectShow.sync="info.contact_way" :education="info.education"></SelectShowComp>
            <ProfessionalSkill v-if="!!info.skill" :professionalSkill.sync="info.skill"></ProfessionalSkill>
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
        Dialog,
        Message
    } from 'element-ui';

    Vue.use(Button);
    Vue.use(Dialog);

    import URL from '../../request_api/request_api.js';
    import Fetch from '../../common/fetch.js';

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
            info: {
                get() {
                    return this.$store.state.aboutUserInfo
                },
                set(newValue) {
                    this.aboutUserInfo = newValue
                }
            }
        },

        data() {
            return {
                isDialogShow: false,
            }
        },

        beforeCreate () {
            this.$store.dispatch('getAboutUserInfo');
        },

        created () {
            console.log('info ==>> ', this.info.contact_way);
        },

        methods: {

            handleHideDialog() {
                this.isDialogShow = false;
            },

            handleSaveData() {

                let session = sessionStorage.getItem('userInfo');
                let id = 1, user = 'dt009';
                if (session) {
                    id = JSON.parse(session).id;
                    user = JSON.parse(session).user;
                }

                let data = {
                    ...this.info,
                }

                Fetch.post(URL.updateUserInfoUrl, data)
                    .then(res => {
                        let {status, message, data} = res;

                        if(status === 'ok') {
                            Message.success(message);
                            this.handleHideDialog();
                        }
                    })


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
