const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler))

const server = app.listen(9000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
