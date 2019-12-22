const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.baseFragment = ({
  mode: process.env.NODE_ENV,
  entry: ['@babel/polyfill', resolve('src', 'index.tsx')],
  output: {
    filename: '[name].[hash].js',
    path: resolve('dist'),
  },
});

module.exports.devServerFragment = ({
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 3000,
    open: true,
    inline: true,
    hot: true,
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

module.exports.tsFragment = ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
});

module.exports.graphqlFragment = ({
  module: {
    rules: [
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: 'graphql-import-loader',
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

module.exports.postCssFragment = ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
});

module.exports.pluginsFragment = ({
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html'),
      favicon: resolve('src', 'assets', 'logo.png'),
    }),
  ],
});
