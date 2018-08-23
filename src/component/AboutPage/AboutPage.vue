/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:55:22
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-23 17:19:17
 */

<template>
    <div class="about-page">
        <h2>这是关于我的页面</h2>
                <a href="#/about#A">A</a>
                <a href="#/about#B">B</a>
                <div>nihao </div>
                <div name="/about/A" id="/about#A">AAAAAAAAA</div>
                <div name="/about/B" id="/about#B">BBBBBBBBB</div>
                <div name="/about/C" id="/about#C">CCCCCCCCC</div>
    </div>
</template>

<script>
    export default {
        name: 'AboutPage',
        props: ['anchor']
    }
</script>

<style lang="less" scoped>
    .about-page {
        div {
            height: 300px;
            border: 1px solid #f00;
            margin-bottom: 10px;
        }
    }
</style>
