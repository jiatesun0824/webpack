const path = require('path');

const webpack = require('webpack');

const config = require('./config')

const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader 15之后的都需要伴生着VueLoaderPlugin插件一起使用

const htmlWebpackPlugin = require('html-webpack-plugin') // 处理html

const miniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css到单独的文件

function resolve (dir) {
  return path.join(__dirname, './', dir) // ./表示这个文件的根目录
}

module.exports = {
  entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
  output: { // 输出
    path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
    // publicPath: config.dev.assetsPublicPath, // 通过devServer访问路径
    filename: 'static/js/[name].[chunkhash].js' // 打包后的文件名
  },
  devServer: { // 本地服务配置
    historyApiFallback: true, // 如果是404页面，自动回到index.html
    overlay: true, // 是否显示错误
    host: 'localhost', // 域名
    port: 3030, // 端口号
    compress: false // 这里是开启gzip压缩，需要服务器一起配合
  },
  resolve: { // 快捷解析
    extensions: [" ",".js",".css",".json", '.vue'], // 自动补全后缀
    alias: { // 配置别名，加快webpack的查找
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'image': resolve('static/image')
    }
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [ // 这里是使用一些插件的地方
    new VueLoaderPlugin(), // 配合vue-loader一起使用
    new webpack.DefinePlugin({ // 配置全局变量
      'process.env': {
          NODE_ENV: JSON.stringify('development') // "'development'" 这样也可以
      }
    }),
    new htmlWebpackPlugin({ // 解析html
      filename: 'index.html', // 生成的文件名称,默认是index.html
      template: './index.html', // 这个相当于入口文件
      inject: true,
      hash: true,
      chunks: ['manifest','vendor','index']
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
      // chunkFilename: "[id].css"
    })
  ],
  module: {
    // 使用loader， 所谓的loader，就是把各种不同后缀的文件，都转化成js
    rules: [
      {
        test: /\.css$/, // 匹配文件名的正则表达式
        use: [miniCssExtractPlugin.loader,'vue-style-loader', 'css-loader'], // ：匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析,解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
      },
      { // 配置sass
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
        // 也可以写成这样 loader："vue-style-loader!css-loader!sass-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader', // 跟fileloaer配合使用，超过10000的就会使用file-loader
        options: {
          limit: 10000
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              miniCssExtractPlugin.loader,
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              miniCssExtractPlugin.loader,
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      }
    ]
  }
};