'use strict';

require("./scss/core.scss");

var ReactDOM = require('react-dom');
var React = require('react');
var HomePage = require("./pages/homePage.js");

var app = document.getElementById('content')
ReactDOM.render(<HomePage />, app);
