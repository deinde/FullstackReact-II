



//path is the connection and the KEY TO USING BOTH EXPRESS AND REACT!!
var path = require('path');
const webpack = require('webpack');

module.exports ={
    entry:'./src/app.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    mode:'development',
    watch:true,
    resolve: {
        alias: {
            "react": __dirname + "/node_modules/react"
        }
    },
    module:{
       rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015','stage-1']
                }
            }
        ]
    }

}