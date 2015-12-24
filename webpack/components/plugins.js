var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'projectX app'
    })
];