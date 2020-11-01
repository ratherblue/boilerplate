const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: {
    styles: './src/styles.js',
    bootstrap: './src/bootstrap.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'src', 'assets')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: ['style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new ManifestPlugin()
  ]
}

module.exports = config
