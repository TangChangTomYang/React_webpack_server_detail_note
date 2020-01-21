

// (在js中使用相对路径有时会出问题, 因此尽量使用绝对路径)
// 引入node 中的 path模块, 后面使用绝对路径防止路径错误
const path = require('path')



// 导出一个webpack配置对象
module.exports = {

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
        publicPath : '/public'
    },

    // 因为JSX是HTML和JS的混合, 默认webpack 是不认识的. 我们要配置一下loader来解析
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
        ]
    }


}

