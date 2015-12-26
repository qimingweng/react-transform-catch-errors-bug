const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: [
      './index.js',
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
