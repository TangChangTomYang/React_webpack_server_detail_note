

import React from 'react'   // 因为我们后边要使用到 JSX 的语法, 所以必须要导入 react
import App from './App.jsx'

export default  <App />


// 我们为甚要要直接 将 <App /> 导出呢?
// 是因为我们在服务端渲染的时候要使用它,
// 且,JSX的代码是不能直接在服务端node环境中使用
// 所以我们要自己编写一个js代码来包装 JSX 代码
// 这样 webpack 就会将js中的JSX代码编译出, 生成最终的js代, node环境的服务端的就可以使用了


// 为了让webpack 将我们写的 server_entry.js 代码也打包出来
// 因此我们要再建一个 webpack.config.server.js 配置文件, 来配置我们的webpack
