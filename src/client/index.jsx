import 'babel-polyfill';
import 'airbnb-browser-shims';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// global styles
import './style.scss';

// const abc = require('../../results.js');

// console.log(abc);

// debugger;

ReactDOM.render(<App />, document.getElementById('app'));
