/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:25:58
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-12 14:20:38
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

let hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: ['./src/index.js', hotMiddlewareScript],
        vendor: [
            'vue',
            'vue-router',
            'vuex',
            'element-ui',
            hotMiddlewareScript
        ]
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },

    devtool: 'inline-source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            }
        ]
    }
})
