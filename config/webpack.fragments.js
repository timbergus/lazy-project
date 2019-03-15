const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.baseFragment = ({
  mode: process.env.NODE_ENV,
  entry: resolve('src', 'index.jsx'),
  output: {
    filename: '[name].[hash].js',
    path: resolve('dist')
  },
});

module.exports.devServerFragment = ({
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 3000,
    open: false,
    proxy: {
      '/api': 'http://localhost:3500',
    },
  },
});

module.exports.esFragment = ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
});

module.exports.stylesFragment = ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
});

module.exports.pluginsFragment = ({
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html'),
      favicon: resolve('src', 'assets', 'logo.png')
    }),
  ],
});
