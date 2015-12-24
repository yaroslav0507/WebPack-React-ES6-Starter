'use strict';

require("./scss/core.scss");

var component = require("./src/component.js")();
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component);