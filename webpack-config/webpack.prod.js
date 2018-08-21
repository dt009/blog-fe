/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 14:57:24
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-21 17:21:37
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: './src/index.js',
        vendor: [
            'vue',
            'vue-router',
            'vuex',
            'element-ui',
        ]
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },

    optimization: {
        minimizer: [
            new UglifyjsWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                js: 'happypack/loader?id=js',
                                css: [
                                    {
                                        loader: MiniCssExtractPlugin.loader,
                                        options: {
                                            publicPath: '/'
                                        }
                                    },
                                    {loader: 'happypack/loader?id=css'},
                                    {loader: 'happypack/loader?id=less'}
                                ],
                                less: [
                                    {
                                        loader: MiniCssExtractPlugin.loader,
                                        options: {
                                            publicPath: '/'
                                        }
                                    },
                                    {loader: 'happypack/loader?id=css'},
                                    {loader: 'happypack/loader?id=less'}
                                ]
                            }
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/'
                        }
                    },
                    {loader: 'happypack/loader?id=css'},
                    {loader: 'happypack/loader?id=less'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/'
                        }
                    },
                    {loader: 'happypack/loader?id=css'},
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "css/[name].[contenthash].css"
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader']
        }),
        new HappyPack({
            id: 'css',
            cache: false,
            loaders: ['css-loader']
        }),
        new HappyPack({
            id: 'less',
            cache:false,
            loaders: ['less-loader']
        })
    ]
})
