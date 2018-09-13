/*
 * @Author: duantao-ds
 * @Date: 2018-09-10 10:21:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-13 19:10:53
 */

<template>
    <div class="user-base-info-manage">
        <h2>作者信息管理</h2>
        <button @click="getState">点击我</button>
        <div class="user-info-manage-main">
            <BaseInfoComp :baseInfo.sync="baseInfo"></BaseInfoComp>
            <SelectShowComp :selectShow.sync="selectShow"></SelectShowComp>
        </div>
    </div>
</template>

<script>

    import BaseInfoComp from './BaseInfoComp.vue';

    import SelectShowComp from './selectShowComp.vue';

    export default {
        name: 'WebsiteBaseInfoManagePage',

        components: {
            BaseInfoComp,
            SelectShowComp
        },

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
                },


            }
        },

        updated () {
            console.log(this.baseInfo);
        },

        methods: {
            getState() {
                console.log('data ===>>> ', this.$data);
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
