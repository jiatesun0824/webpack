const webpack = require('webpack')

const webpackBaseConfig = require('./webpack.base')

const merge = require('webpack-merge') //使用 webpack 配置合并插件

const config = require('../config')

const miniCssExtractPlugin = require('mini-css-extract-plugin') // 匹配

module.exports = merge({
  output: { // 输出
    path: config.dev.assetsRoot, // 项目的打包文件路径
    publicPath: config.dev.assetsPublicPath, // 通过devServer访问路径
    filename: 'static/js/[name].[name].js', // 打包后的文件名
    chunkFilename: 'static/js/[name].[name].chunk.js' // 路由懒加载
  },
  devServer: { // 本地服务配置
    historyApiFallback: true, // 如果是404页面，自动回到index.html
    overlay: true, // 是否显示错误
    host: 'localhost', // 域名
    port: 3030, // 端口号
    open: true,
    compress: false // 这里是开启gzip压缩，需要服务器一起配合
  },
  devtool: '#cheap-module-eval-source-map', // 这个属性用于开发中调试使用，生产中用#source-map
  plugins: [
    new webpack.DefinePlugin({ // 配置全局变量
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(), // 适用于开发环境，在页面变更的时候只会重绘对应的模块，不会重绘整个html
    new miniCssExtractPlugin({
      filename: "css/[name][chunkhash].css",
      // chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      { // 配置sass
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  }
}, webpackBaseConfig)