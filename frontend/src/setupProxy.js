const {createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', { // 碰到 api 前缀触发代理
        target: 'http://localhost:8080', // 转发到的目标服务（转发给谁）
        pathRewrite: {
            '/': '', // 重定向路径，这里不做重定向
            // '^/api': '', // api 重写成空，即去掉 api
        },
        changeOrigin: true,
        secure: false
    }));
}