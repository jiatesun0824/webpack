const path = require('path'); // 用于处理路径

const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader 15之后的都需要伴生着VueLoaderPlugin插件一起使用

const htmlWebpackPlugin = require('html-webpack-plugin') // 处理根路径的index.html

const CleanWebpackPlugin = require('clean-webpack-plugin') // 用于清空之前的dist目录

const miniCssExtractPlugin = require('mini-css-extract-plugin') // 匹配

const ExtractTextPlugin = require("extract-text-webpack-plugin") // css、scss文件的提取

function resolve (dir) {
  return path.join(__dirname, '../', dir) // ../表示webpack.base.js的根目录
}
module.exports = {
  entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
  resolve: { // 快捷解析
    extensions: [" ",".js",".css",".json", '.vue'], // 自动补全后缀
    alias: { // 配置别名，加快webpack的查找
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'image': resolve('static/image')
    }
  },
  plugins: [
    new htmlWebpackPlugin({ // 编译html
      filename: 'index.html',
      template: './index.html',
      inject: true,
      // chunks: ['index'] // 配置多页面的时候要用到
    }),
    new VueLoaderPlugin(), // vue-loader 15之后，必须与之一起使用
    new CleanWebpackPlugin(), // 清空之前的dist
    require("autoprefixer")
    // new miniCssExtractPlugin({
    //   filename: "css/[name][chunkhash].css",
    //   // chunkFilename: "[id].css"
    // })
  ],
  module: {
    // 使用loader， 所谓的loader，就是把各种不同后缀的文件，都转化成js
    rules: [
      // {
      //   test: /\.css$/, // 匹配文件名的正则表达式
      //   use: [
      //     {
      //       loader: miniCssExtractPlugin.loader,
      //     },
      //     {
      //       loader: 'css-loader'
      //     },
      //     // {
      //     //   loader: "postcss-loader",
      //     //   options: {
      //     //     plugins: require("autoprefixer")
      //     //   }
      //     // },
      //   ], // ：匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析,解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
      // },
      // { // 配置sass
      //   test: /\.scss$/,
      //   use: [
      //     miniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      { // 用于ES6转ES5
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader', // 超过一定一的大小就会使用file-loader
        options: {
          limit: 10000  
        }
      },
      { // 配置vue-loader 用于解析.vue结尾的文件，同时配置
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
            ]
          }
        }
      }
    ]
  }
};