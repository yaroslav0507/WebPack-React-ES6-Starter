'use strict';

global.gulp = require('gulp');
global.config = require('./config');

require('dotenv').load();
require('require-dir')('./tasks');