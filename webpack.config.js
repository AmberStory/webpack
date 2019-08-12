const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    otherModule: './src/output-management/print.js'
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // devtool: 'inline-source-map',
  // devServer: { contentBase: './dist', hot: true },
  mode:'development',
  optimization: {
    usedExports: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'caching',
      inject: "true",
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}