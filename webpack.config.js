//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {//注意这里是exports不是export

    entry: __dirname + "/src/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
//node服务器，实时预览
//     devServer: {
//         contentBase: __dirname + "/build",//本地服务器所加载的页面所在的目录
//         historyApiFallback: true,//不跳转
//         inline: true,//当源文件改变时会自动刷新页面
//         port: 8080//端口
//     },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]

    },
    //吃屎吧cnm
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        })
    ],
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        port: '8888',
        inline: true//实时刷新
    },
};
