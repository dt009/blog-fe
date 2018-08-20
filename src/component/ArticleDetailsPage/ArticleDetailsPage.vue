/*
 * @Author: duantao-ds
 * @Date: 2018-08-20 10:27:17
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-20 16:23:11
 */
<template>
    <div class="article-details-page">
        <h1>博客详情 {{filename}}</h1>

        <div class="markdown-body" v-html="getHtmlByMarkdown" ref="myMarkdown">
            {{getHtmlByMarkdown}}
        </div>
    </div>
</template>

<script>
    import Fetch from 'common/fetch';
    import URL from 'api/request_api';
    import markdownIt from 'markdown-it';
    import markdownIthightlight from 'markdown-it-highlight';
    import mili from 'markdown-it-linkify-images';
    const mdi = markdownIt({html: true});
    mdi.use(markdownIthightlight);
    mdi.use(mili, {
        target: '_blank'
    })

    export default {
        name: 'ArticleDetailsPage',

        props: ['filename'],

        async created() {

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

                    this.getHtmlByMarkdown = mdi.render(data);
                }
            }
        },

        data() {
            return {
                getHtmlByMarkdown: ''
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
</style>
