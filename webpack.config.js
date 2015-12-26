const webpack = require('webpack');
const path = require('path');

const babelConfig = {
  presets: ['react', 'es2015', 'stage-0'],
  env: {
    development: {
      presets: ['react-hmre'],
    },
  },
};

const babelQs = JSON.stringify(babelConfig);

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
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolveLoader: {
    alias: {
      babel: __dirname + '/node_modules/babel-loader' + '?' + babelQs,
    },
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
