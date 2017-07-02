const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './dist/index.html'})
    ]
};

module.exports = config;