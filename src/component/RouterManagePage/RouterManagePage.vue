/*
 * @Author: duantao-ds
 * @Date: 2018-08-31 10:54:32
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 12:39:16
 */

<template>
    <div class="router-manage-page">
        <h2>路由管理</h2>
        <div class="page-main">
            <el-button @click="handleAddNewRouter" size="small" type="primary" icon="el-icon-plus">新增一个路由</el-button>
            <el-table
                :data="showList"
                :border="true"
            >
                <el-table-column label="" prop="sign" width="50">

                </el-table-column>
                <el-table-column label="name" prop="name"></el-table-column>
                <el-table-column label="path" prop="path"></el-table-column>
                <el-table-column label="label" prop="label"></el-table-column>
                <el-table-column label="type" prop="type"></el-table-column>
                <el-table-column label="icon" prop="icon">
                    <div slot-scope="scope">
                        <span>{{scope.row.icon}}</span><span class="font" v-html="scope.row.icon"></span>
                    </div>
                </el-table-column>
                <el-table-column label="操作">
                    <div slot-scope="scope">
                        <el-button @click="handleChangeRouter(scope.row)" type="text" size="small">修改</el-button>
                        <el-popover placement="top" v-model="showPopover">
                            <p><i style="color: #0f0" class="el-icon-warning"></i> 确定要删除这条信息吗?</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="showPopover=false">取消</el-button>
                                <el-button type="primary" size="mini" @click="handleDeleteRouter(scope.$index, scope.row)">确定</el-button>
                            </div>
                            <el-button size="small" type="text" slot="reference">删除</el-button>
                        </el-popover>
                    </div>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {
        Table,
        TableColumn,
        Button,
        Popover
    } from 'element-ui';
    import Vue from 'vue';

    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Button);
    Vue.use(Popover);

    export default {
        name: 'RouterMangePage',
        computed: {
            showList() {
                return this.$store.state.routerList
            }
        },
        beforeCreate () {
            this.$store.dispatch('getRouterList')
        },
        data() {
            return {
                showPopover: false
            }
        },
        methods: {
            handleChangeRouter(value) {
                console.log(value);
            },
            handleDeleteRouter(index, value) {
                console.log(index, value);
                this.showPopover = false;
            },
            handleAddNewRouter() {
                console.log('新增一个路由');
            }
        }
    }
</script>

<style lang="less" scoped>

    .router-manage-page {
        padding-left: 10px;
        padding-top: 10px;

        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .page-main {
            padding: 10px;

            & > .el-button {
                margin-bottom: 10px;
            }
        }
    }


</style>
