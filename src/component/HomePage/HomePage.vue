/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 14:48:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-16 16:18:22
 */

<template>
    <div class="home-page">
        <h1>{{message}}</h1>
        <button @click="fetch">点击我请求</button>
    </div>
</template>

<script>
    import URL from 'api/request_api.js';
    import Fetch from 'common/fetch.js';

    export default {
        name: 'HomePage',
        data() {
            return {
                message: '这是主页的页面'
            }
        },
        methods: {
            fetch() {
                Fetch.post(URL.getAllArticleUrl, {
                        data: {
                            pageNumber: 1,
                            pageSize: 10
                        }
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
