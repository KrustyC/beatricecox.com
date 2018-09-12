
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    inline: true,
    publicPath: '/',
    hot: true,
    contentBase: 'build',
    port: '3000',
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify('/') // Probably not needed
      }
    })
  ]
})
