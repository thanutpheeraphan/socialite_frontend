const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/auth', {
      target: 'http://localhost:5000', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/auth": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/rooms', {
      target: 'http://localhost:5000', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/rooms": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/test', {
      target: 'http://localhost:8000', // API endpoint 3
      changeOrigin: true,
      pathRewrite: {
        "^/": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}