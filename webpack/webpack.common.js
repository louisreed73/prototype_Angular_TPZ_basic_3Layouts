const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');





module.exports={
    entry:{
        // estilo:'./src/js/estilo.js',
        bundle:'./src/js/index.js'
    },
    output:{
        filename:"js/[name].js",
        chunkFilename:"js/[name]-shared.js"
        // path:path.resolve(__dirname,"../dist"),
        // publicPath:'../dist'
    },
    module:{
        rules:[
            {
                test:/\.(woff|woff2)$/,
                loader:"url-loader?limit=100000"
            },
            {
                test:/\.(svg|gif|png|jpe?g)$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]',
                    outputPath:'imgs/',
                    publicPath: "../imgs"
                }
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: "babel-loader"
            }
    
          

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        })


    ]
}