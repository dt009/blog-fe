/*
 * @Author: duantao-ds
 * @Date: 2018-08-23 16:05:21
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-23 16:11:15
 */


const history = require('connect-history-api-fallback');

module.exports = options => {
    const middleware = history(options);
    const noop = ()  => {
    };

    return async (ctx, next)=> {
        middleware(ctx, null, noop);
        await next();
    };
};
