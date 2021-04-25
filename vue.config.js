const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@atom': path.join(__dirname, 'src/components/atom'),
        '@molecules': path.join(__dirname, 'src/components/molecules'),
        '@organisms': path.join(__dirname, 'src/components/organisms'),
        '@utils': path.join(__dirname, 'src/utils'),
        '@config': path.join(__dirname, 'src/config'),
      },
    },
    devServer: {
      proxy: 'http://localhost:8000/api',
    },
  },
};
