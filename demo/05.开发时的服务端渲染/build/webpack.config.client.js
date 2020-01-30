//webpack配置文档的官网地址: https://webpack.js.org/concepts/configuration/



// (在js中使用相对路径有时会出问题, 因此尽量使用绝对路径)
// 引入node 中的 path模块, 后面使用绝对路径防止路径错误
const path = require('path')

const webpack = require('webpack')

// 引入 html-webpack-plugin 将js 代码转为html
const HTMLPlugin = require('html-webpack-plugin')

// 判断当前的执行环境 是否是development 开发模式
const isDev = process.env.NODE_ENV === 'development'


// 导出一个webpack配置对象
const config = {

    // 1. 指定webpack 打包的入口
    // entry 就是告诉webpack , app 是打包的一个入口, 然后根据app里面的依赖关系一层一层的迭代下去形成一个依赖树, 然后把所有的依赖文件打包成一个js文件
    entry : {
        app : path.join(__dirname, '../client/app.js')
    },


    // 2. 说明webpack打包的输出
    output : {
        // 2.1 指定输出文件名
        // 指定文件的输出名, 可以是一个固定的名字,比如: app.js, 也可以动态生成(建议)
        // []表示的是变量 , output 里面有那些变量呢? 一个是name 代表entry中一项的名子就是 app  , 一个是hash 表示对整个app打包完后计算的哈希值, 这样的话, 一旦我们app依赖树里面任何一个文件改变了,哈希值就变化了, 这样我们在网站上引用输出文件名就变化了, 浏览器就会自动刷新缓存跟新页面
        // [name] 表示的entry 中第一项的名字就是 app
        // [hash] 表示整个app打包后计算出的哈希值
        filename: '[name].[hash].js',

        // 2.2 指定输出文件路径 (放在根目录下的dist 目录中)
        path: path.join(__dirname, '../dist'),

        // 2.3 指定静态资源引用的路径
        // 生成的路径是 /public/app.hash.js
        publicPath : '/public/'
    },

    // 因为JSX是HTML和JS的混合, 默认webpack 是不认识的. 我们要配置一下loader来解析
    // 配置各种loader
    module :{
        rules : [
            {
                // 正则, 所有的以 .jsx结尾的文件
                test: /.jsx$/ ,
                // babel可以编译我们的jsx 语法的工具, 编译出来的是浏览器可以执行的ES5语法
                // babel 可以编译很多, 比如: ES6 ES7 ,现在官方的react 使用的JSX编译工具就是babel
                // 因为我们在开发环境才会用到 babel-loader, 因此使用 npm install babel-loader -D 安装到开发时依赖
                // 因为 babel-loader 只是babel-core的一个插件, 因此我们还需要安装 babel-core, npm install babel-core -D
                loader: 'babel-loader'
            }
            ,
            {   // 配置 当前项目下所有的 .js 文件按照 jsx语法让babel处理, 除了  node_modules 目录
                test: /.js$/ ,
                loader: 'babel-loader',
                exclude : [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },

    // 配置各种插件
    plugins : [
        new HTMLPlugin({
            // 以'../client/template.html' 目录下的html为模板, 插入js
            template: path.join(__dirname, '../client/template.html')
        })
    ]


}




if(isDev){// 开发环境
    config.entry = {
        app : [
            'react-hot-loader/patch',
            path.join(__dirname, '../client/app.js')
        ]
    }

    // 如果是开发环境就增加配置项
    // 开发环境安装webpack-dev-server 命令: npm install webpack-dev-server -D
    config.devServer = {
        // 因为我们是在本地开发, 需要说明指向本机的方式,
        // 第一种: 使用 "0.0.0.0" 表示允许使用任何方式访问, 比如:127.0.0.1, 或者 localhost
        // 第二种: 使用 "localhost"  这种方式不能使用 127.0.0.1 的方式访问
        // 第三种: 使用 "ip 地址 "  这种方式不能使用 localhost 访问
        host: "0.0.0.0",

        // 指定服务的端口
        port: 8888,
        // 指定 contentBase 因为我们启动 webpack_dev_server 就是为了服务与我们经过webpack编译出的静态文件
        // 静态文件编译输出在 output 里面的path路径, 我们的 contentBase 就是这个path
        // contentBase 就是启动服务的目录
        contentBase: path.join(__dirname, '../dist'),

        // hot 表示的是启动我们的
        hot: true,
        overlay:{ // 表示我们在webpack 编译的过程中出现的任何错误,我们就让它在我们的网页中
                  // 显示出来, 这样在开发中就能很容易看到错误
            errors: true   // errors=true表示只显示错线错误的信息,像warning就不显示了
        },
        publicPath: "/public",
        historyApiFallback: {
            index: "/public/index.html"
        }


    // 配置完成后, 我们在浏览器下就能通过 localhost:8888/文件名, 直接访问 dist 目录下的内容
    }

    config.plugins.push(new webpack.HotModuleReplacementPlugin())

}


module.exports = config;