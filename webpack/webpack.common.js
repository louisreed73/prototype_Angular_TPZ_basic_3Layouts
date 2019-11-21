const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");


module.exports = {
    entry: {
        bundle: './src/assets/js/index.js',
        pagina1: './src/assets/js/pagina1.js',
        pagina2: './src/assets/js/pagina2.js'
    },
    output: {
        filename: "assets/js/[name].js",
        chunkFilename: "assets/js/[name]-shared.js"
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.(svg|gif|png|jpe?g)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src',
                    publicPath: "../"
                }
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env", {


                                    useBuiltIns: "usage"
                                }
                            ]
                        ],
                        plugins: [
                            [
                                '@babel/plugin-proposal-pipeline-operator', {
                                    proposal: "minimal"
                                }
                            ]
                        ]
                    }
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", template: "./src/index.html",
            // inject:true,
            chunks: ["bundle"]
        }),

        new HtmlWebpackPlugin({
            filename: "pagina1/pagina1.html", template: "./src/pagina1/pagina1.html",
            // inject:true,
            chunks: ["pagina1"]
        }),
        new HtmlWebpackPlugin({
            filename: "pagina2/pagina2.html", template: "./src/pagina2/pagina2.html",
            // inject:true,
            chunks: ["pagina2"]
        }),
    

        new MiniCssExtractPlugin({filename: "assets/css/[name].css"})

    ]
}
