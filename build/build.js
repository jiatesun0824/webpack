const webpack = require('webpack')

const webpackBaseConfig = require('./webpack.base')

const merge = require('webpack-merge') //使用 webpack 配置合并插件

const config = require('../config')

const copyWebpackPlugin = require('copy-webpack-plugin') // 可以将单个或者多个文件复制到构建目录中

const path = require('path')

const miniCssExtractPlugin = require('mini-css-extract-plugin') // 匹配

module.exports = merge(webpackBaseConfig, {
  output: { // 输出
    path: config.build.assetsRoot, // 项目的打包文件路径
    publicPath: config.build.assetsPublicPath, // 通过devServer访问路径
    filename: 'static/js/[name].[chunkhash].js', // 打包后的文件名
    chunkFilename: 'static/js/[name].[chunkhash].chunk.js' // 路由懒加载
  },
  devtool: '#source-map', // 这个属性用于开发中调试使用，生产中用#source-map
  // devtool: '#cheap-module-eval-source-map', // 这个属性用于开发中调试使用，生产中用#source-map
  plugins: [
    new webpack.DefinePlugin({ // 配置全局变量
      'process.env': require('../config/prod.env')
    }),
    new copyWebpackPlugin([ //复制自定义的静态文件到dist/static中
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new miniCssExtractPlugin({
      filename: "./static/css/[name][chunkhash].css",
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
          'sass-loader',
        ]
      },
    ]
  }
})