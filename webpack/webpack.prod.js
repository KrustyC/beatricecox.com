const webpack = require('webpack')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     BASE_URL: JSON.stringify('/react-router-v4-tutorial')
    //   }
    // }),
    new ExtractTextPlugin('[name].css')
  ]
})