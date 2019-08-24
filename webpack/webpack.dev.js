const merge=require('webpack-merge');
const common=require('./webpack.common.js');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports=merge(common,{

    mode: "development",
    devServer: {
        // port: 3000,
        index: 'index.html'
    },
    // devtool:"inline-source-map",
    module: {
        rules: [

            {
                test: /\.s?css$/,
                use: [
                    { loader:MiniCssExtractPlugin.loader, options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            }


        ]
    },

    plugins:[

        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        })
    ]



})