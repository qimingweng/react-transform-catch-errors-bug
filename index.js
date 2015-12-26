import 'file?name=index.html!./index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/Root';

const mountNode = document.getElementById('application');

ReactDOM.render(
  <Root/>,
  mountNode,
);
