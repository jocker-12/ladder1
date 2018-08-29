const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackkPlugin = require('clean-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let cleanWebpack = process.env.NODE_ENV ? new CleanWebpackkPlugin(['build/assets']) : () => {};
const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MinCssExtractPlugin({
        filename: '[name].[hash:6].css'
    }),
    cleanWebpack,
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './src/index.html',
        minify: {
            minimize: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJs: false
        }
    })
]
module.exports = {
    mode: process.env.NODE_ENV || 'development',
    extry: {
        index: './src/js/index.js',
        vendors: ['juqery']
    },
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve(__dirname, 'build/assets'),
        publicPath: 'assets/'
    },
    devtool: 'eval-source-map',
    devserver: {
        contentBase: './build',
        port: 9000,
        open: true,
        watchContentBase: true,
        setup: function(app) {
            app.get('/login', (req, res) => {
                let username = req.query.username,
                    password = req.query.password;
                let isLogin = username == 'CHENMANJIE' && password == '123456';
                res.json({
                    code: isLogin ? 1 : 0,
                    msg: isLogin ? '登录成功' : '登录失败'
                })
            })
        },
        compress: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                options: {
                    presets: ['react', 'stage-0']
                }
            }, {
                test: /\.css$/,
                use: [MinCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MinCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:6].[ext]',
                        limit: 1024
                    }
                }]
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: ['url-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins
};