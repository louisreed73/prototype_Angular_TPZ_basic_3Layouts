const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");


module.exports = {
    entry: {
        bundle: './src/assets/js/index.js',
        contact: './src/assets/js/contact.js',
        sobremi: './src/assets/js/sobremi.js'
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
            filename: "contact/contact.html", template: "./src/contact/contact.html",
            // inject:true,
            chunks: ["contact"]
        }),
        new HtmlWebpackPlugin({
            filename: "sobremi/sobremi.html", template: "./src/sobremi/sobremi.html",
            // inject:true,
            chunks: ["sobremi"]
        }),
        new webpack.ProvidePlugin({$: 'jquery'}),

        new MiniCssExtractPlugin({filename: "assets/css/[name].css"})

    ]
}
