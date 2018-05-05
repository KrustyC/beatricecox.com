const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'eval-source-map',
  output: {
    publicPath: '/'
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: 'src',
    port: '3000',
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify('/')
      }
    })
  ]
})
