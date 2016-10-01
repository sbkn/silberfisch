var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname, //current folder as the reference to the other paths
    entry: {
        demo: './demo.js' //entry point for building scripts
    },
    output: {
        path: path.resolve('./dist'), //save result in 'dist' folder
        filename: 'demo.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};