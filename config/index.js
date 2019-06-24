const path = require('path');

module.exports = {
  dev: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    host: 'localhost',
    port: 3030,
    env: 'dev',
    devtool: '#cheap-module-eval-source-map',
    assetsRoot: path.join(__dirname, 'dist')
  },
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    env: 'pro',
    devtool: '#source-map',
    assetsRoot: path.join(__dirname, '../dist')
  }
}