'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
    entry: config.paths.app,
    output: {
        path: config.paths.build,
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'projectX app'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: config.paths.build,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT
    }
};

module.exports = webpackConfig;