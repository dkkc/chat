var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'development';
// var plugins = [
//     new HtmlWebpackPlugin({template: 'src/index.html', filename: 'index.html', inject: 'body'})
// ];

// if(env === 'production') {
//     plugins.push(
//         new webpack.optimize.UglifyJsPlugin(),
//         new OptimizeJsPlugin({sourceMap: false})
//     );
// }

// console.log('NODE_ENV :' ,env);

module.exports = {
    entry: './client/index.js',
    // entry: (env !== 'production' ? [
    //     'react-hot-loader/patch',
    //     'webpack-dev-server/client?http://localhost:8080',
    //     'webpack/hot/only-dev-server',
    // ] : []).concat(['./client/index.js']),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                

            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {loader: 'react-hot-loader/webpack'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                    
                ]
            }
        ]
    },
// plugins : [
//     new HtmlWebpackPlugin({template: 'src/index.html', filename: 'index.html', inject: 'body'}),
//     // new webpack.optimize.UglifyJsPlugin(),
//     new OptimizeJsPlugin({sourceMap: false})
// ],


}