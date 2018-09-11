/*
 * @Author: duantao-ds
 * @Date: 2018-09-10 10:21:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-11 18:35:03
 */

<template>
    <div class="website-base-info-manage">
        <h2>站点基本信息管理</h2>

        <div class="website-base-info-main">
            <el-button type="primary" icon="el-icon-edit" size="small" @click="handleEditInfo">编辑</el-button>
            <!-- 信息编辑 -->
            <el-dialog :visible.sync="isDialogShow" title="编辑信息">

                <el-form :model="baseInfo" label-position="right" size="mini" status-icon label-width="100px" ref="dialogForm">
                    <el-form-item label="标题: " prop="title">
                        <el-input v-model="baseInfo.title" auto-complete="off" style="width: 300px"></el-input>
                    </el-form-item>

                    <el-form-item label="姓名: " prop="name">
                        <el-input v-model="baseInfo.name" auto-complete="off" style="width: 300px"></el-input>
                    </el-form-item>

                    <el-form-item label="关键字: " prop="keyword">
                        <el-input
                            v-for="(item, index) in baseInfo.keyword"
                            :key="index"
                            v-model="baseInfo.keyword[index]"
                            auto-complete="off"
                            style="width: 300px; margin-top: 10px">

                            <!-- 删除关键词的按钮 -->
                            <i
                                slot="suffix"
                                class="el-icon-delete"
                                @click="handleDeleteKeyword(index)"
                                v-if="baseInfo.keyword.length !== 1"
                                style="color: #409eff; cursor: pointer;"></i>
                        </el-input>

                        <!-- 添加关键词的按钮 -->
                        <el-button type="text" icon="el-icon-plus" size="small" @click="handleAddKeyword()"></el-button>
                    </el-form-item>

                    <el-form-item v-for="(item, index) in baseInfo.contactList" :key="index" :label="`联系方式${index + 1}: `">

                        <el-form :model="baseInfo.contactList[index]" label-position="right" label-width="50px" size="mini" ref="contactForm">
                            <el-form-item>
                                <!-- 删除联系方式按钮 -->
                                <el-button
                                    type="danger"
                                    icon="el-icon-delete"
                                    size="mini"
                                    @click="handleDeleteContactList(index)"
                                    v-if="baseInfo.contactList.length !== 1"
                                >删除</el-button>
                            </el-form-item>

                            <el-form-item label="icon: " prop="icon">
                                <el-input v-model="baseInfo.contactList[index].icon" auto-complete="off" style="width: 300px"></el-input>
                                <span style="color: #409eff;">预览: <span v-html="baseInfo.contactList[index].icon" style="font-size: 18px" class="font"></span></span>
                            </el-form-item>

                            <el-form-item label="name: " prop="linkName">
                                <el-input v-model="baseInfo.contactList[index].name" auto-complete="off" style="width: 300px"></el-input>
                            </el-form-item>

                            <el-form-item label="link: ">
                                <el-input v-model="baseInfo.contactList[index].link" auto-complete="off" style="width: 300px"></el-input>
                            </el-form-item>

                            <el-form-item label="img: ">
                                <el-input v-model="baseInfo.contactList[index].img" auto-complete="off" style="width: 300px"></el-input>
                            </el-form-item>
                        </el-form>

                        <!-- 新增联系方式按钮 -->
                        <el-button
                            type="primary"
                            size="mini"
                            v-if="index === baseInfo.contactList.length - 1"
                            icon="el-icon-plus"
                            @click="handleAddContactList"
                        >新增联系方式</el-button>

                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" size="medium" @click="handleCloseDialog">取消</el-button>
                        <el-button size="medium" type="primary" :loading="isUpdateLoading" @click="handleUpdateInfo">确认</el-button>
                    </el-form-item>
                </el-form>

            </el-dialog>

            <!-- 信息展示 -->
            <div class="show-info">
                <el-form label-position="right" inline label-width="100px" :model="baseInfo">
                    <el-form-item label="站点标题: ">
                        <span>{{websiteInfo.title}}</span>
                    </el-form-item>

                    <el-form-item label="作者姓名: ">
                        <span>{{websiteInfo.name}}</span>
                    </el-form-item>

                    <el-form-item label="关键字: ">
                        <p v-for="(item, index) in websiteInfo.keyword" :key="index"> {{item}}</p>
                    </el-form-item>

                    <el-form-item label="联系方式: ">
                        <div class="link-us" v-for="(item, index) in websiteInfo.contactList" :key="index">

                            <el-popover
                                v-if="!!item.img && !item.link"
                                placement="top-start"
                                width="200"
                                trigger="hover"
                            >
                                <img :src="item.img" alt="item.name" style="width: 170px">
                                <div slot="reference">
                                    <span class="font" v-html="item.icon"></span> <span>{{item.name}}</span>
                                </div>
                            </el-popover>

                            <a :href="item.link" v-if="!!item.link">
                                <span class="font" v-html="item.icon"></span> <span>{{item.name}}</span>
                            </a>
                            <div v-if="!item.img && !item.link">
                                <span class="font" v-html="item.icon"></span> <span>{{item.name}}</span>
                            </div>
                        </div>
                    </el-form-item>
                </el-form>

            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Button,
        Dialog,
        Form,
        FormItem,
        Input,
        Message,
        Popover
    } from 'element-ui';

    Vue.use(Button);
    Vue.use(Dialog);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Popover);

    import URL from '../../request_api/request_api.js';
    import Fetch from '../../common/fetch.js';

    export default {
        name: 'WebsiteBaseInfoManagePage',
        computed: {
            websiteInfo() {
                return this.$store.state.websiteInfo;
            }
        },
        data() {
            return {
                baseInfo: {},
                isDialogShow: false,
                isUpdateLoading: false
            }
        },
        methods: {
            handleEditInfo() {
                this.baseInfo = JSON.parse(JSON.stringify(this.websiteInfo));
                this.isDialogShow = true;
            },
            handleDeleteKeyword(index) {
                this.baseInfo.keyword.splice(index, 1);
            },
            handleAddKeyword() {
                this.baseInfo.keyword.push('关键词' + (this.baseInfo.keyword.length + 1));
            },
            handleDeleteContactList(index) {
                this.baseInfo.contactList.splice(index, 1);
            },

            handleAddContactList() {
                this.baseInfo.contactList.push({
                    icon: '',
                    name: '',
                    link: '',
                    img: ''
                })
            },

            handleCloseDialog() {
                this.isDialogShow = false;
            },

            handleUpdateInfo() {

                this.isUpdateLoading = true;

                Fetch.post(URL.updateWebsiteInfoUrl, this.baseInfo)
                    .then(res => {
                        let {status, message, data} = res;
                        if (status === 'ok') {
                            Message.success(message);
                            this.$store.dispatch('getWebsiteInfo', data.userId);
                            this.handleCloseDialog();
                        }
                        else {
                            Message.error(message);
                        }
                        this.isUpdateLoading = false;
                    })

                console.log(this.baseInfo);
            }

        }
    }
</script>

<style lang="less" scoped>
    .website-base-info-manage {
        padding-left: 10px;
        padding-top: 10px;
        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .website-base-info-main {

            .show-info {
                padding: 10px;

                .el-form-item {
                    width: 40%;

                    label {
                        color: #99a9bf;
                    }

                }
            }


        }

        .link-us {
            cursor: pointer;

            &:hover {
                color: #409eff;
            }
        }

    }
</style>
<style lang="less">
    .website-base-info-main {
        .el-form-item {
            .el-form-item {
                label {
                    color: #99a9bf;
                }
            }
        }
        .show-info {
            .el-form-item {
                label {
                    color: #99a9bf;
                }
            }
        }

    }
</style>
