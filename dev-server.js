const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

const app = express();

// Use the dev server middleware
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  stats: {
    colors: true,
  },
}));

// Use the hot loading middleware
app.use(webpackHotMiddleware(compiler))

const server = app.listen(9000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
