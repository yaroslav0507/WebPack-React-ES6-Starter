'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: './app',
    build: './build'
};

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
    sassLoader: {
        includePaths: [path.resolve(PATHS.app, '/')]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'projectX app'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: PATHS.build,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        quiet: true
    }
};

module.exports = webpackConfig;