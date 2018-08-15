/*
 * @Author: duantao-ds
 * @Date: 2018-08-15 17:29:51
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-15 17:36:53
 */

<template>
    <div class="info-page">
        <div class="avatar-box">
            <img src="" alt="头像">
        </div>
        <div class="user-name">
            <p>段涛</p>
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

        </div>
    </div>
</template>
