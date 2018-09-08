/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 11:10:08
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-07 10:09:31
 */

const config = require('../config/config');
const Koa = require('koa');
const app = new Koa();

// 中间件容器，把webpack处理后的文件传递给一个服务器
const devMiddleware = require('./middleware/devMiddleware');
// 在内存中编译的插件，不写入磁盘来提高性能
const hotMiddleware = require('./middleware/hotMiddleware');

const webpack = require('webpack');

const webpackConfig = require('../webpack-config/webpack.dev');

const compiler = webpack(webpackConfig);


app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}))

app.use(hotMiddleware(compiler));

app.listen(config.port)

console.log('http://localhost:' + config.port);
