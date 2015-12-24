'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
    entry: config.paths.app,
    output: {
        path: config.paths.build,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap", "import-glob-loader"]
            },{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets:['react']
                }
            }
        ]
    },
    devtool: "source-map",
    sassLoader: {
        includePaths: [path.resolve(config.paths.app, '/')]
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
        contentBase: config.paths.build,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        quiet: true
    }
};

module.exports = webpackConfig;