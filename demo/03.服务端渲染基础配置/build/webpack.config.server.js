
const path = require('path')

// 导出一个webpack配置对象
module.exports = {

    // 在webpack 中有一个配置项, 就是说 用于说明webpack打包出来的内容用在哪种环境下
    // 这里配置 target: 'node' 是告诉webpack, 打包出来的内容是用的node.js环境下的
    // target 对应的取值可以是 'web' 表示在浏览器环境上使用, 也可以是'node'表示在node.js环境
    // 上使用, 当然还有其它的取值...
     target: 'node',
     entry : {
            app : path.join(__dirname, '../client/server_entry.js')
        },
        output : {
            // 因为我们后面要手动 import 这个文件, 所以名字最好固定, 不能动态生成
            filename: 'server_entry.js',
            path: path.join(__dirname, '../dist'),
            publicPath : '/public',
            // 使用libraryTarget指定打包出去的js的方案, eg:  umd, cmd, amd, commonjs, global 等
            libraryTarget: 'commonjs2' // 使用最新的commonjs的方案
        },

        // 因为JSX是HTML和JS的混合, 默认webpack 是不认识的. 我们要配置一下loader来解析
        // 配置各种loader
        module :{
            rules : [
                {
                    test: /.jsx$/ ,
                    loader: 'babel-loader'
                }
                ,
                {   test: /.js$/ ,
                    loader: 'babel-loader',
                    exclude : [
                        path.join(__dirname, '../node_modules')
                    ]
                }
            ]
        }
}

