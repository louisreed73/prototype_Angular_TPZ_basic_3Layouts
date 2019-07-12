const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglify=require('uglifyjs-webpack-plugin');
const OptimizeCssAssets=require('optimize-css-assets-webpack-plugin');



module.exports = merge(common, {

    
    mode:"production",
    // devtool:'source-map',
    module: {
        rules: [

            {
                test: /\.s?css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            }


        ]
    },
    optimization:{
        splitChunks:{
            chunks:"all",
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer:[
            new uglify(),
            new OptimizeCssAssets(),
        ]
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/estilo.css"
        })

    ]


})