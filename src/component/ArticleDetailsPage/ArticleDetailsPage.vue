/*
 * @Author: duantao-ds
 * @Date: 2018-08-20 10:27:17
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-23 19:51:26
 */
<template>
    <div class="article-details-page">
        <h1>博客详情 {{filename}}</h1>

        <div class="markdown-body" v-html="getHtmlByMarkdown" ref="myMarkdown">
        </div>
        <div id="list">
            <el-tree
                :data="listData"
                :default-expand-all="true"
                :expand-on-click-node="false"
            >
                <div class="list-content" slot-scope="{node, data}">
                    <a :href="`#${data.name}`">{{`${data.sign}  ${node.label}`}}</a>
                </div>
            </el-tree>
        </div>
        <div>测试</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Fetch from 'common/fetch';
    import {Tree} from 'element-ui';
    import URL from 'api/request_api';
    import markdownIt from 'markdown-it';
    import markdownIthightlight from 'markdown-it-highlight';
    import mili from 'markdown-it-linkify-images';
    import getTree from './getTreeData.js';
    const mdi = markdownIt({html: true});
    mdi.use(markdownIthightlight);
    mdi.use(mili, {
        target: '_blank'
    });
    Vue.use(Tree);
    export default {
        name: 'ArticleDetailsPage',

        props: ['filename'],

        async created() {

            let filename = this.filename;

            let res = await Fetch.post(URL.getArticleDetailUrl, {
                filename: this.filename
            })

            if (res) {
                let {
                    status,
                    message,
                    data
                } = res;

                if (status === 'ok') {



                    let html = mdi.render(data);

                    let {treeData, htmlString} = getTree(html, this.filename);

                    console.log(treeData);
                    this.listData = treeData;

                    this.getHtmlByMarkdown =htmlString;
                }
            }
        },

        data() {
            return {
                getHtmlByMarkdown: '',
                listData: []
            }
        }

    }
</script>

<style lang="less" scoped>
    @import '../../style/index.css';
    @import '../../style/github-markdown.css';

    .article-details-page {
        height: 100%;
        // max-height: 300px;
        overflow: auto;
    }

    .markdown-body {
        width: 100%;
        background: #fff;
        padding: 15px;
    }

    #list {
        position: fixed;
        right: 20px;
        top: 100px;
        background: #eee;

        .list-content {
            cursor: pointer;

            &:hover {
                color: #509eff;
            }
        }
    }
</style>
