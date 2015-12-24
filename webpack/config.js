'use strict';

global.PATHS = {
    app: './app',
    build: './build'
};

var devServer = require('./components/dev-server');
var plugins = require('./components/plugins');

var webpackConfig = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ['react']
            }
        }, {
            test: /\.scss$/,
            loaders: ["style", "css?sourceMap", "sass?sourceMap", "import-glob-loader"]
        }]
    },
    devtool: "source-map",
    plugins: plugins,
    devServer: devServer
};

module.exports = webpackConfig;