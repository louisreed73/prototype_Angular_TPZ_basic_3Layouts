const merge=require('webpack-merge');
const common=require('./webpack.common.js');

module.exports=merge(common,{

    mode: "development",
    devServer: {
        // port: 3000,
        // contentBase:"src",
        // index: 'pagina1/pagina1.html'
        index: 'index.html'
    },
    devtool:"inline-source-map",

})