import  React from 'react'

// react-dom 模块(框架)是用来将我们的 React 组件渲染到DOM里面的.
// 从react-dom 这个名字, 我们可以猜想到右 react-native 这样的模块, 使用来将我们react里面的组件渲染到 app 里面运行的
import ReactDOM  from 'react-dom'

import {AppContainer} from 'react-hot-loader'

// 引入我们的App.jsx, 因为我们现在还没配置忽略后缀名, 因此这里需要写上后缀, 后面我们配置了忽略后缀名后就可以不用写后缀名了, 他会自动解析
import App from './App.jsx'


// 让ReactDOM 执行它的render方法, 将APP挂载到页面上的某个地方.
// 将App挂在到 id=root的标签上
//ReactDOM.hydrate(<App /> , document.getElementById('root'));

const root = document.getElementById('root')

const render = Conponent => {
    ReactDOM.hydrate(
        <AppContainer>
            <Conponent/>
        </AppContainer>,
        root
    )
}


render(App)

if (module.hot){
    module.hot.accept('./App.jsx', ()=>{
        const NextApp = require('./App.jsx').default

        //ReactDOM.hydrate(<NextApp /> , document.getElementById('root'));
        render(NextApp)
    })
}
