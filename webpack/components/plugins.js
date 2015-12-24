var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'projectX app',
        template: path.join(PATHS.app, '/index.html')
    })
];