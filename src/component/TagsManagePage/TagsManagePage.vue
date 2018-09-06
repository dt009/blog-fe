/*
 * @Author: duantao-ds
 * @Date: 2018-09-06 10:09:11
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-06 11:45:12
 */

<template>
    <div class="tags-manage-page">
        <h2>标签管理</h2>
        <div class="tags-manage-page">
            <el-button @click="handleAddNewRouter" size="small" type="primary" icon="el-icon-plus">新增一个标签</el-button>
            <!-- 添加和修改标签的 dialog -->
            <el-dialog></el-dialog>

            <!-- 标签的展示 -->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Tag,
        Table,
        TableColumn,
        Button,
        Popover,
        Dialog,
        Form,
        FormItem,
        Input,
        Message
    } from 'element-ui';

    Vue.use(Tag);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Button);
    Vue.use(Popover);
    Vue.use(Dialog);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);

    export default {
        name: 'TagsManagePage',
        computed: {
            showTagsList() {
                return this.$store.state.allTagsList;
            }
        },
        data() {
            return {
                dialogType: 'add', // dialog里面表单的类型
                // 添加标签的的 form 数据
                dialogAddForm: {
                    code: '',
                    name: '',
                    used_count: 0,
                    description: ''
                },
                // 修改标签的 from 数据
                dialogUpdateFrom: {}
            }
        },
        methods: {
            handleAddNewRouter() {
                console.log('新增一个路由');
            }
        }
    }
</script>

<style lang="less" scoped>
    .tags-manage-page {
        padding-left: 10px;
        padding-top: 10px;
        h2 {
            border-left: 5px solid #409eff;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-bottom: 10px;
        }
    }
</style>
