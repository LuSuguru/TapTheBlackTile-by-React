var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval-source-map',

    entry: [__dirname + "/app/main.js"],

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    module: {
        loaders: [{
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css'],
        alias: {
            js: path.join(__dirname, 'app/js'),
            css: path.join(__dirname, 'app/css')
        }
    }
}