'use strict';

global.config = require('./config.js')();

require('dotenv').load();


module.exports = {
    entry: config.paths.scripts.input,
    output: {
        paths: __dirname,
        filename: config.paths.scripts.output
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css'}
        ]
    }
};