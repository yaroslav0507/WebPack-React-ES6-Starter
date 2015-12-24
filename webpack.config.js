'use strict';

global.path = require('path');
global.config = require('./webpack/config.js')();
require('dotenv').load();

module.exports = require('./webpack');