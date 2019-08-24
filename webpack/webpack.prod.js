const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglify=require('uglifyjs-webpack-plugin');
const OptimizeCssAssets=require('optimize-css-assets-webpack-plugin');

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}


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
        splitChunks: {
            cacheGroups: {
                bundleStyles: {
                    name: 'bundle',
                    test: (m, c, entry = 'bundle') =>
                        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true,
                },
                contactStyles: {
                    name: 'contact',
                    test: (m, c, entry = 'contact') =>
                        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
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
            filename: "css/[name].css",
            // chunkFilename: '[id].css',
        })

    ]


})