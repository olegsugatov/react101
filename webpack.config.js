const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
    	path: path.resolve(__dirname, '/dist')﻿,
        filename: 'app.bundle.js'
    },
    module: {
    	rules: [
    		{
                test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: 'babel-loader'
            }
    	]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [  new HtmlWebpackPlugin({
    	title: 'Project Demo',
    	minify: {
    		collapseWhitespace: true
    	},
    	hash: true,
    	template: './src/index.ejs'
 	 })
   ]
}
