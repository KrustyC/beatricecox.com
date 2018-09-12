const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, '../src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      app: path.join(__dirname, '../src/app/'),
      assets: path.join(__dirname, '../src/assets/')
    },
    extensions: ['.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      chunksSortMode: (a, b) => ((a.names[0] < b.names[0]) ? 1 : -1),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../src/assets'), to: 'assets' }
    ])
  ]
}
