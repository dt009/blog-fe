/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 10:55:22
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-19 18:38:20
 */

<template>
    <div class="about-page">
        <h2>这是关于我的页面</h2>

        <div class="about-page-mian">
            <div class="base-info">
                <h3><span class="font">&#xe61e;</span> 基本信息</h3>
                <el-form label-position="right" size="mini" label-width="80px">
                    <el-form-item>
                        <div slot="label"><span class="font">&#xe61c;</span> 姓名:</div>
                        <p>{{info.name}}</p>
                    </el-form-item>
                    <el-form-item>
                        <div slot="label"><span class="font">&#xe602;</span> 性别:</div>
                        <p>{{info.gender | getGender}}</p>
                    </el-form-item>
                    <el-form-item>
                        <div slot="label"><span class="font">&#xe7ba;</span> 年龄:</div>
                        <p>{{getAge}}</p>
                    </el-form-item>
                    <el-form-item>
                        <div slot="label"><span class="font">&#xe61b;</span> 生日:</div>
                        <p>{{info.birthday | formatBirthday}}</p>
                    </el-form-item>
                    <el-form-item v-if="info.education && info.education.isShow">
                        <div slot="label"><span class="font">&#xe617;</span> 学历:</div>
                        <p>{{info.education.value | getEducation}}</p>
                    </el-form-item>
                </el-form>
            </div>
            <div class="avatar">
                <img src="http://owtyucuge.bkt.clouddn.com/WechatIMG11.jpeg" alt="">
            </div>
            <div class="cantact-way">
                <h3><span class="font">&#xe62a;</span> 联系方式</h3>
                <el-form label-position="right" size="mini" label-width="80px">
                    <el-form-item v-if="info && item.isShow" v-for="(item, index) in info.contact_way" :key="index">
                        <div slot="label"><span class="font" v-html="getContactIcon(item.label)"></span> :</div>
                        <p>{{item.value}}</p>
                    </el-form-item>
                </el-form>
            </div>
            <div class="cantact-way">
                <h3><span class="font">&#xe7b6;</span> 专业技能</h3>
                <el-form label-position="right" size="mini" label-width="120px">
                    <el-form-item v-if="info && item.isShow" v-for="(item, index) in info.skill" :key="index">
                        <div slot="label"><span class="font" v-html="getSkillIcon(item.label).icon"></span> <span v-html="getSkillIcon(item.label).name"></span>:</div>
                        <el-rate
                            v-model="item.value"
                            allow-half
                            show-text
                            disabled
                            style="display: inline-block"
                            :texts="['了解', '一般', '良好', '熟练', '精通']"
                        ></el-rate>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Form,
        FormItem,
        Rate
    } from 'element-ui';
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Rate);
    export default {
        name: 'AboutPage',
        props: ['anchor'],
        computed: {
            info() {
                return this.$store.state.aboutUserInfo
            },

            getAge() {

                if (!!this.info.birthday) {
                    let now = new Date().getFullYear();
                    let last = this.info.birthday.split('-')[0];
                    return now - last
                }
            },
        },
        filters: {
            getGender(gender) {
                if (gender === 2) {
                    return '女'
                }
                else if (gender === 1) {
                    return '男'
                }
                else {
                    return '保密'
                }
            },

            formatBirthday(birthday) {
                if (birthday) {
                    let arr = birthday.split('-');
                    return `${arr[0]}年${arr[1]}月${arr[2]}日`
                }
            },

            getEducation(value) {
                let arr = [
                    {value: '0', label: '初中以下'},
                    {value: '1', label: '初中'},
                    {value: '2', label: '高中'},
                    {value: '3', label: '中专'},
                    {value: '4', label: '大专'},
                    {value: '5', label: '本科'},
                    {value: '6', label: '研究生, 硕士, 博士'},
                    {value: '7', label: '其他'},
                ]
                return arr[value].label
            },


        },
        beforeCreate () {
            this.$store.dispatch('getAboutUserInfo');
        },
        methods: {
            getContactIcon(value) {
                switch (value) {
                    case '电话':
                        return '&#xe606;'
                        break;
                    case 'QQ':
                        return '&#xe6b2;'
                        break;
                    case '微信':
                        return '&#xe634;'
                        break;
                    case '邮箱':
                        return '&#xe694;'
                        break;

                    default:
                        return '&#xe607;'
                        break;
                }
            },

            getSkillIcon(value) {

                let arr = [
                    {label: 'html', name: 'HTML', icon: '&#xe6b1;'},
                    {label: 'css', name: 'CSS', icon: '&#xe653;'},
                    {label: 'js', name: 'JavaScript', icon: '&#xf1db;'},
                    {label: 'node', name: 'NodeJS', icon: '&#xf1fd;'},
                    {label: 'react', name: 'React', icon: '&#xf21a;'},
                    {label: 'vue',  name: 'Vue', icon: '&#xe640;'},
                    {label: 'angular', name: 'Angular', icon: '&#xe61f;'},
                    {label: 'sass', name: 'Sass', icon: '&#xf22a;'},
                    {label: 'less', name: 'Less', icon: '&#xe653;'},
                    {label: 'bootstrap', name: 'BootStrap', icon: '&#xe653;'},
                    {label: 'jq', name: 'JQuery', icon: '&#xe653;'},
                ]

                let obj = arr.filter(item => item.label === value)[0];

                return  obj
            }
        }
    }
</script>

<style lang="less" scoped>
    .about-page {

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

        h3 {
            height: 20px;
            line-height: 10px;
            margin-bottom: 10px;
            border-bottom: 1px double #eee;
            padding-bottom: 5px;
        }

        .about-page-mian {

            display: flex;
            width: 100%;
            flex-wrap: wrap;

            & > div {
                width: 40%;
                margin-left: 20px;
                padding: 10px;
                border: 1px solid #eee;
                margin-bottom: 20px;
            }

            .avatar {
                border: 0;
                img {
                    width: 200px;
                }
            }
        }

    }
</style>
