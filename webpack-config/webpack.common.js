/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 16:29:51
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-21 17:11:05
 */

const webpack = require('webpack');
const path = require('path');
const config = require('../config/config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
    optimization: {
        runtimeChunk: 'multiple',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    resolve: {
        alias:  {
            comp: path.resolve(__dirname, '../src/component/'),
            api: path.resolve(__dirname, '../src/request_api/'),
            public: path.resolve(__dirname, '../src/public/'),
            common: path.resolve(__dirname, '../src/common/')
        },

        extensions: ['.js', '.vue', '.css', '.less', '.png', '.jpg', '.jpeg', '.gif', '.json']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'happypack/loader?id=js'
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'image/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'iconfont/[name].[ext]'
                }
            }

        ]
    },

    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: config.pageTitle
        }),
        new VueLoaderPlugin(),
        new HappyPack({
            id: 'js',
            loaders: [
                {
                    loader: 'babel-loader'
                }
            ],
        })
    ],
}
