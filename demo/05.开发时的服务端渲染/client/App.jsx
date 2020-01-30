


import  React from 'react'

// 我们写React的组件就是去写 class,   这些class 都需要继承于 React.Component
// 这样的话, 我们写的东西就是在组件的声明周期里面的内容
export default class App extends  React.Component {

    // react 里面必须要有的方法就是 render 方法, render 这个方法是什么意思呢?
    // 就是代表我们要去渲染这个组件的时候, 要生成一个什么样的HTML代码
    // 因此, 在这里我们要定义一个render 方法, 方法体将我们要生成的 HTML 代码返回出去即可, 如下:
    // 注意, 我们需要将编辑器配置好, 否则的话你在js代码里面写 HTML代码会报错的, 装个插件就可以了, webstorm默认是支持JSX语法的

    render (){
        return (
            <div> this is app async </div>
        )
    }

}