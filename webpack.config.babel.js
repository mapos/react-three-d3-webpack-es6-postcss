const path = require('path')

// var webpack = require('webpack')
var loaders = require('./webpack/loaders')
var plugins = require('./webpack/plugins')

module.exports = {
  name: 'Three and d3 Test',
  entry: [
    'react-hot-loader/patch', 'babel-polyfill', './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '../../'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    plugins.HtmlWebpackPlugin,
    plugins.ExtractTextPlugin
  ],
  module: {
    loaders: [
      loaders.babelLoader,
      loaders.cssLoader
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/public/'),
    host: '192.168.1.18',
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
}
