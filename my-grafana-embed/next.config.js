const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://200.137.220.250:3000/:path*', // Sua URL do Grafana
      },
    ];
  },
};
