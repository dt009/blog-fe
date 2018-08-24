/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 17:29:51
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-24 15:24:26
 */

<template>
    <div class="info-page">
        <div class="avatar-box">
            <img :src="imgSrc" alt="头像">
        </div>
        <div class="user-name">
            <h2>段涛</h2>
            <ul class="blog-tag">
                <li>段涛</li>
                <li>段涛fas</li>
                <li>段dfadf涛</li>
                <li>段dfadf涛</li>
            </ul>
        </div>
        <div class="blog-info">
            <ul>
                <router-link tag="li" to="/all">
                    <a>
                        <span class="count">200</span>
                        <span class="message">日志</span>
                    </a>
                </router-link>
                <router-link tag="li" to="/categories ">
                    <a>
                        <span class="count">200</span>
                        <span class="message">分类</span>
                    </a>
                </router-link>
                <router-link tag="li" to="/tags">
                    <a>
                        <span class="count">200</span>
                        <span class="message">标签</span>
                    </a>
                </router-link>
            </ul>
        </div>
        <div class="contact-us">
            <ul>
                <li>
                    <a href="https://github.com/dt009"><span class="font">&#xe606;</span>Github</a>
                </li>
                <li>
                    <a href="https://github.com/dt009"><span class="font">&#xe606;</span>Github</a>
                </li>
                <li>
                    <a href="https://github.com/dt009"><span class="font">&#xe606;</span>Github</a>
                </li>
                <li>
                    <a href="https://github.com/dt009"><span class="font">&#xe606;</span>Github</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import imgSrc from 'public/images/avatar.gif';
    export default {
        name: 'WebsiteOverviewPage',
        data() {
            return {
                imgSrc: imgSrc
            }
        },
        computed: {
            blogTags() {
                return ['段涛', 'dt009', 'blog', '学习'].join(' ')
            }
        }
    }
</script>

<style lang="less" scoped>
    .info-page {


        .avatar-box {
            height: 100px;
            width: 100%;
            position: relative;

            img {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .user-name {
            h2 {
                height: 20px;
                text-align: center;
                line-height: 20px;
                font-size: 16px;
                letter-spacing: 5px;
            }

            .blog-tag {
                display: flex;
                color: #999;
                flex-flow: wrap;
                align-content: center;
                justify-content: center;
                margin-bottom: 5px;

                li {
                    padding: 0 5px;
                    height: 20px;
                    font-size: 12px;
                    line-height: 24px;
                }
            }

        }

        .blog-info {

            width: 100%;
            margin-bottom: 10px;

            ul {
                display: flex;
                margin: 0 auto;
                width: 150px;
                padding: 10px;

                li {
                    flex: 1;
                    text-align: center;
                    border-right: 1px solid #999;
                    height: 30px;

                    &:last-child {
                        border: none
                    }

                    a {
                        display: block;
                        color: #666;

                        span {
                            height: 15px;
                            line-height: 15px;
                            display: block;

                            &:first-child:hover {
                                color: #222;
                            }
                        }
                    }
                }
            }
        }

        .contact-us {

            ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    font-size: 14px;
                    width: 50%;
                    text-align: center;
                    line-height: 24px;

                    a {
                        span {
                            margin-right: 5px;
                        }

                        &:hover {
                            color: #405eff;
                        }
                    }


                }
            }
        }

    }
</style>
