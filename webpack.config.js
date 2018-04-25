// 'use strict';


// var path = require('path');
// const webpack = require('webpack');


// module.exports={
//     entry:'./src/app.js',
//     output:{
//         filename:'bundle.js',
//         path:path.resolve(__dirname,'public')
//     },
//     mode:'development',
//     watch:true,
//     module:{
//         rules:[
//             {
//               test:/\.js$/,
//               exclude:/node_module/,
//               loader:'babel-loader',
//               query:{
//                   preset:['react','ex2015','stage-1']
//               }
//         }
//     ]

        
//   }
// }




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