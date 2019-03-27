const merge = require('webpack-merge');

const {
  baseFragment,
  devServerFragment,
  esFragment,
  pluginsFragment,
  stylesFragment,
} = require('./config/webpack.fragments');

module.exports = merge(
  baseFragment,
  {
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss'],
    },
  },
  devServerFragment,
  esFragment,
  stylesFragment,
  pluginsFragment,
);
