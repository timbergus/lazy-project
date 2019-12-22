const merge = require('webpack-merge');

const {
  baseFragment,
  devServerFragment,
  tsFragment,
  graphqlFragment,
  pluginsFragment,
  postCssFragment,
} = require('./config/webpack.fragments');

module.exports = merge(
  baseFragment,
  {
    resolve: {
      extensions: [
        '.mjs',
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.css',
        '.scss',
        '.json',
        '.graphql',
      ],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  },
  devServerFragment,
  tsFragment,
  graphqlFragment,
  postCssFragment,
  pluginsFragment,
);
