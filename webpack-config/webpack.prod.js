/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 14:57:24
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-20 10:08:52
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/'
                        }
                    },
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
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
                    {loader: 'css-loader'},
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
    ]
})
