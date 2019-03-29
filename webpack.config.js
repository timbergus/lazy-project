const merge = require('webpack-merge');

const {
  baseFragment,
  devServerFragment,
  esFragment,
  graphqlFragment,
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
  graphqlFragment,
  stylesFragment,
  pluginsFragment,
);
