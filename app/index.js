'use strict';

require('!style!css!./style.css');

var component = require("./src/component.js")();
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component);