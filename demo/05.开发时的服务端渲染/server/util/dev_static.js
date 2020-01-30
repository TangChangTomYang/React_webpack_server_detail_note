
// 导入HTTP 请求模块 axios
const axios = require('axios')
const path = require('path')
const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const proxy = require ('http-proxy-middleware')
const ReactMomServer = require('react-dom/server')
const serverConfig = require('../../build/webpack.config.server.js')




// 通过http 请求的方式, 实时的获取最新的template文件
const getTemplate = () => {
   return  new Promise((resolve, reject) => {
       axios.get('http://localhost:8888/public/index.html')
           .then(res => {
               resolve(res.data)
           })
           .catch(reject)
   })
}

const Module = module.constructor

const mfs = new MemoryFS

// 传给webpack 对应的配置参数, 即可获取一个编译器
// compiler 可以监听entry下面依赖的文件是否有变化, 一旦有变化它会重新去打包
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs
let serverBundle
serverCompiler.watch({}, (err, stats)=>{

    if (err) throw err

    // stats 就是webpack 打包时输出的信息
    stats = stats.toJson()
    // 逐个输出
    stats.errors.forEach(err => console.log(err))
    stats.warnings.forEach(warning => console.log(warning))

    const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename)

    const  bundle = mfs.readFileSync(bundlePath,'utf-8')
    const m = new Module()
    m._compile(bundle, 'server_entry.js')
    serverBundle = m.default



})


module.exports = function (app) {
    // 所有的静态请求都代理到  'http://localhost:8888'
    app.use('/public', proxy({
        target:'http://localhost:8888'
    }))

    app.get('*',function (req, res) {

        getTemplate().then(template => {
            const content = ReactDOMServer.renderToString(serverBundle)
            res.send(template.replace('<!-- app -->',content ))
        })
    })
}