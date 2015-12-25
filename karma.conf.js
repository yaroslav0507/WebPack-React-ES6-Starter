var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true, //just run once by default
        frameworks: ['mocha', 'chai', 'sinon-chai'], //use the mocha test framework
        files: [
            'tests.webpack.js' //just load this file
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
        },
        reporters: ['dots'], //report results in this format
        webpack: {
            devtool: "source-map",
            module: {
                loaders: [{
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: "babel",
                    query: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};