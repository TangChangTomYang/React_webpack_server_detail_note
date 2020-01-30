
const express = require('express')
// 导出 react-dom 下的server 服务端渲染
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')


// 因为server_entry.js中使用的是 commonjs2的规范, 直接require后的内容如下:
/*
 { __esModule: true,
 default:
 { '$$typeof': Symbol(react.element),
 type: [Function: t],
 key: null,
 ref: null,
 props: {},
 _owner: null } }
*/
// 在node中我们需要使用default 对应的内容
const serverEntry = require('../dist/server_entry.js').default
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

const app = express()

// 处理所有的静态文件请求
app.use('/public', express.static(path.join(__dirname, '../dist')))

// 启动服务
app.get('*', function(req, res){
    const appString = ReactSSR.renderToString(serverEntry)
    console.log('===', appString, '===')
    console.log('===', template, '===')

    // 使用react 组件 替换 <app> </app>
    res.send (template.replace('<app> </app>', appString));
})

// 监听端口
app.listen(3333, function () {
    console.log('服务端 渲染 server 启动 ok, 端口 3333')
})



