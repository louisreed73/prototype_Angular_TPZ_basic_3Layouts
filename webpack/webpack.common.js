const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/js/index.js',
        contact: './src/js/contact.js'
    },
    output: {
        filename: "js/[name].js",
        chunkFilename: "js/[name]-shared.js"
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
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/env", {

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
            filename: "contact.html", template: "./src/contact.html",
            // inject:true,
            chunks: ["contact"]
        }),
        new webpack.ProvidePlugin({$: 'jquery'})

    ]
}
