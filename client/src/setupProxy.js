const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api/customers', {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true
    })
  );
};