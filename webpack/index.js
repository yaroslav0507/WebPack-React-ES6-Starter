'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
    entry: './app/index.web.js',
    output: {
        path: './build',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets:['react']
            }
        }]
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