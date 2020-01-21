# 一、起步



- 学习react 基本语法
- 熟悉官方create-react-app脚手架
- 掌握JSX语法
- 掌握setState
- 掌握react声明周期
- 掌握props传递参数
- 掌握react组件通信



官方网站:  https://reactjs.org/



https://github.com/search?q=create-react-app



## 1、上手

- 全局安装官方脚手架

  ```
  npm install -g create-react-app   // -g 是全局安装的意思
  ```

- 初始化

  ```
  cd 工程目录
  create-react-app react_01
  ```

- react的Api比较少, 基本学一次就不再看文档了, 核心是JS的功力

  

  

  



# webpack 疑问? 



1、浏览器不能直接运行jsx, 为什么用了webpack就可以了呢? 

2、我们为什么能在js里面require图片、css 这些非js内容呢? 

3、为什么我们能够在不刷新页面的情况下展示刚刚修改的代码呢? 

4、我们如何操作能让正式上线的代码优化到极致呢? 

5、如何配合webpack调试React的服务端渲染呢? 

以上这些都是webpack给我们带来的疑问?  



毫无疑问webpack 作为一个大包工具是出色的, 下面就让我们来了解下webpack

![Snip20200120_1](images/Snip20200120_1.png) 

如上图所示, webpack 可以将我们开发时离散的开发资源,拼凑打包成一个更适合我们 线上项目运行时的静态资源.  中间就是webpack在帮我们处理. 



在后面我们会一一介绍:

-  `webpcak的配置` 
- `搭建项目的过程`  
- `了解前端工程的意义` 

可能你会说, 我只想学react, 但是在现在的前端市场, 前端工程已经是一个逃不开的问题. 用react写页面逻辑只是一个基本功. 但是难的是把一个项目组织起来. 从开发到上线流程, 这是一个高级工程师必备的技能. 



1、你会使用React的服务端渲染吗? 

在使用React框架以后, 我们所有的HTML内容都是通过JS在浏览器中进行生成的.  也就是说我们在浏览器中输入一个URL. 得到的是一个没有任何内容的HTML, 要等这个HTML中引用的javaScript代码加载完成之后,才能渲染出HTML显示的内容. 这样用户才能看到.  这样就带来了几个问题:

- 第一、SEO不友好.
  - 因为SEO需要去解析URL返回的HTML文档中的内容. 才去做HTML推广, 因为通过URL获取到的HTML中是没有任何内容的. 所以SEO根本抓不到网页中的任何东西. 
- 第二、首屏时间较长, 用户体验差.
  - 因为我们要去等所有的javaScript加载完成之后采取渲染HTML的内容, 这种情况下是要比我们直接加载有内容的HTML是要长很多的. 所以我们的首屏时间要较长些. 

于是,服务端渲染就此诞生了, 依旧是React作为先驱, 为我们带来了可以前后端同构的可能. 同时随着React框架使用的越来越多, 服务器端渲染的需求越来越大. 当然这里指的不是简单给你一个打包完成的App, 然后你调用React的Dom Server  然后就完了. 

我们的难点在于如何去配置, 能够打包出一个在服务器端渲染的的app.

既然我们要服务器端渲染, 我们肯定要考虑: **数据同步、路由跳转、 SEO信息.** 等问题. 这些问题如何去解决.

还有我们在开发时使用webpack deb server,根本在本地拿不到开发完成的app,我们如何在开发的时候方便的进行服务端渲染的测试? 总不能每写几句就打包出一个新的app 进行测试吧?  下面我们将从零开始配置我们的项目. 一步一步的去学习服务器端渲染的代码.  开发阶段和正式上线阶段不同环境的处理. 随着业务加深, 进一步掌握服务器端渲染的细节, 最终达到一个完整项目需要要完成服务端渲染的所有配置. 同时会教会你为什么可以这样配置,及一些原理性的内容. 让你充分理解服务器端渲染的细节. 以便于你在将来的时候自己搭建项目的时候根据自己的需求进行修改. 



大家在网上都能找到很多关于React的资料, 教程,分享之类的文章. 也有一些最佳实践之类的项目等等. 但是这些都是在说React如何去写一个组件, 或者扔给你一堆代码, 给你说运行某个命令就能跑起来. 在一些公司里面也会出现这样的体验. 	 比如说: 我构建好了一个项目,然后给开发业务的同事说, 你按照我的规范去写组件就可以了. 因为在公司里面我们要以效率为主, 没有时间去等每一位同事都学会所有的知识. 这就导致了现在市场上有很多会写React Vue的同学, 但是大部分的人都不知道如何让一个项目跑起来.  如果你不知道项目是如何运转的,一旦遇到问题, 或者是新的需求你就很难去做修改.  



 下面我们就来学习一下如何从零去构建一个前端工程, 没有使用任何代码生成工具, 每一行代码都是自己敲出来的. 希望由此,让大家由浅入深的学习前端工程.  以目前最流行的前端架构工具 webpack作为基础,建立知识底蕴, 为自己将来的发展打好地基.





后面我们主要学会以下几点内容:

- 工程架构的概念, 为什么我们要做架构
- 服务端渲染的难点以及如何解决
- React + React-Router + Mobx的项目架构模式



> 适合人群:
>
> - 希望进阶学习前端
> - 能够就掌控整个项目的同学
> - 希望学习一个完整React应用如何泡起来的同学



> 学习准备:
>
> - ES6基础
> - React基础用法, 最好有一些项目经验
> - 基本的Node.js知识
> - 基本的webpack知识







# 二、工程架构

## 1、webpack 配置



### 1、WebPack 介绍

webpack is  a module bundler for modern JavaScript applications.

这是webpack 官方给的介绍. 一个为现代JS应用诞生的模块打包器. 但, 其实webpack 不仅仅用来打包JS、CSS、图片、字体、甚至是你自己发明的东西都可以用webpack来打包.  我们前端的所有资源都可以使用webpack来打包.  

webpack 打包的核心是有一个laoder机制, webpack通过一个loader去处理你指定的资源某个资源,比如javaScript代码、CSS文件等, 这些loader处理好这些资源文件后会将这些资源文件(比如: javaScript代码, 如果你是用ES6来写的, 他会将它处理成ES5, 浏览器能执行的代码.)最终经过webpack的处理生成一个完整的JavaScript文件. 

所以说, 如果你发现你使用的某种资源文件,但是你没有找到对应的loader, 你甚至可以自己写一个webpack的loader来处理自己的文件. 





###2、Webpack基础配置



#### 1、初始化项目

```
npm init  // 一顿回车
```

命令执行完成后会在当前项目生成一个`package.json` 文件,详细内容如下:

```
{
  "name": "demo_01",
  "version": "1.0.0",
  "description": "webpack 学习入门 01",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "tom",
  "license": "ISC"
}
```



####2、使用 npm 安装 webpack

```
npm install webpack  // 本地安装
```



#### 3、使用npm 安装 react

```
npm install react  // 本地安装
```



#### 4、配置项目目录

- 在当前目录下新建一个 build目录

  - 在这个目录下, 我们会放一些配置文件,一些webpack的config文件, 以及在工程中会用到的一些脚本文件. 
  - 在build目录下我们再新建一个 webpack.config.js
    - 在webpack.config.js 中我们主要做一些

- 在当前目录下新建一个 client 目录

  - 这个目录主要放我们前端的应用的软件
  - 在client目录中, 我们再新建一个 app.js文件和 App.jsx文件
    - app.js 文件作为我们应用的入口文件, 把它mount到我们的html里面
    - App.jsx文件主要做的就是声明我们整个页面的内容

  

####5、编写webpack.config.js 配置文件

```
const path = require('path')
 
module.exports = { 
    entry : {
        app : path.join(__dirname, '../client/app.js')	// webpack打包入口文件
    }, 
    output : { 
        filename: '[name].[hash].js',    // 打包输出文件名 app名+hash
        path: path.join(__dirname, '../dist'), 	// 打包输出路径
        publicPath : '/public'	// 静态文件路径
    }
}
```

编写webpack.config.js文件主要工作有几点

- `entry` : 说明webpack打包app的入口文件是什么
- `output`: 说明webpack打包后的输出文件路径是什么, 输出文件名是什么, 静态资源路径是什么



#### 6、添加 build脚本

- 在 package.json 文件中添加 build 脚本, 使用webpack 打包app 

  ```
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack --config build/webpack.config.js"  // 在scripts标签中增加这个配置即可
    }
  ```

  - 配置了build 脚本后, 执行命令`npm run build` 即可打包

> 更详细的说明看demo:  `01.Webpack基础配置 `





### 3、Webpack loader基础应用


####1、在App.jsx文件中编写 react 组件

在jsx 文件中编写react 组件主要有几步:

1、引入react模块, 这个模块是我们编写react的基础,必须导入

> 如果当前项目中没有安装react 可以使用命令 `npm install react` 安装

2、继承React中的Component 模块, 编写class. 

​	其实我们写React组件就是写class, 这些class 都是继承自 `React.Component` 

3、在class中定义 render函数,  React 组件里面必须要有render函数. 

​	render函数的返回值就是我们的React组件在渲染时, 要生成一个什么样的HTML代码. 因此在定义render方法时,直接返回我们想要的HTML就可以了, 不过在返回是 HTML代码要使用小括号`()` 包裹 

> 注意:
>
> 我们在编写JSX代码的时候需要配置好我们的编辑器, 因为JSX里面的代码是 JS代码和HTML代码混合的, 编辑器会报错, 直接安装对应的插件即可,
>
> webstorm 默认情况下是支持JSX语法的, 所以使用webstorm编辑器不用安装格外的插件



App.jsx 中的代码如下:

```
import  React from 'react'
export default class App extends  React.Component {
    render (){
        return (
            <div> this is app </div>
        )
    }
}
```



####2、编写app.js代码

1、引入react-dom 模块 ReactDOM

```
import ReactDOM  from 'react-dom'
```

> react-dom 模块是将我们的React组件渲染到DOM里面的
>
> 从react-dom 这个名字, 我们可以猜想到 有 react-native 这样的模块, 使用react-native可以将React组件渲染到iOS app 或者 android app 里面运行

2、 引入 App.jsx 中编写的 React 组件App

```
import App from './App.jsx'
```

3、让ReactDOM 执行render方法, 将组件App挂载到页面上某个标签上

```
ReactDOM.render(App, document.body);
```

> 我们这里直接将组件挂载到body节点下, 其实React官方是不推荐之间挂载到body标签上的, 推荐挂载到body里面的其它标签上



app.js 代码如下: 

```
import ReactDOM  from 'react-dom' 
import App from './App.jsx'
ReactDOM.render(App, document.body);
```



#### 3 、配置webpack 识别React代码 (即识别 JSX代码)(添加loader)

因为我们的React代码不是标准的javaScript 代码 (jsx代码), webpack默认的情况下是不识别的, 因此我们要在`webpack.config.js` 文件中对webpack进行配置, 让webpack支持是被React代码(即让webpack 识别jsx代码). 

- 在webpack.config.js中增加一个 module, 在module 中增加一个 rules, rules对应的是一个数组, 在rules对应的这个数组中我们可以配置很多的loader, 每个loader 都可以解决对应的问题.

  - 新增的module配置如下:

    ```
    module :{
      rules : [
              { 
                test: /.jsx$/ , 
                loader: 'babel-loader'
              }
      ]
    }
    ```

    > - `rules`  对应的是一个数组,说明有哪些loader.具体 loader的描述信息使用`{}` 说明, 比如: 使用什么loader, 处理哪些哪类文件.
    >   - `loader`: 用于指定loader的名字(即使用哪个loader), 比如: 此处使用的是`babel-loader`
    >   - `test` :   就是说明loader要处理哪个 、哪些文件. 比如: 此处使用正则`/.jsx$` 表示使用`babel-loader` 处理使用的 `.jsx` 文件

  

  
> webpack.config.js 的详细内容如下:
  
  ```
  const path = require('path')
  
  module.exports = { 
  		// webpack 的入口
      entry : {
          app : path.join(__dirname, '../client/app.js')
      },
   
   		// webpack 的输出
      output : { 
          filename: '[name].[hash].js', 
          path: path.join(__dirname, '../dist'), 
          publicPath : '/public'
      }, 
      
      // webpack 的配置信息 (load描述信息)
      module :{
          rules : [
              { 
                  test: /.jsx$/ , 
                  loader: 'babel-loader'
              }
          ]
      } 
  }
```
  



##### 1、babel 介绍

babel 是一个能够编译各种最新JS语法的工具, 它编译出来的是浏览器默认可以执行的ES5的语法. babel可以编译非常多, 比如: ES6、ES7、 ES8 等等 最新的ES语法都可以编译. 然后它也支持JSX的编译, 现在React默认的官方编译工具就是使用babel进行编译的.



####4、安装配置babel-loader 编译JSX

- 安装`babel-loader` 

  ```
  npm install babel-loader@7.1.5 -D // -D 表示的是开发依赖安装
  
  // babel-loader@7.1.5 表示安装指定版本的babe-loader
  ```

  > 经过测试发现, 使用`npm install babel-loader -D `安装的babel-loader版本要高些编译JSX时要报错, 因此,此处选择安装指定版本的babel-loader, 解决编译问题 

- 配置bable-loader 支持编译 JSX **(默认只能编译ES6为ES5, 不能编译jsx)**     

  - 在项目的根目录下新建一个`.babelrc` 文件,说明当前项目使用的javaScript的版本及说明当前项目中安装的babel-loader要用来编译JSX, 具体配置及说明内容如下:

  ```
  {
  	// presets 代表babel支持的语法, 因为现在javaScript的版本非常的多,eg: ES5、ES6、ES7 JSX 等等. babel 默认情况下把这些版本拆分出去了. 在babel-core里面是没有指定具体版本的. 
  	
  	"presets" : [
		["es2015", {"loose": true}], // 指定我们现在写的javaScript语言的版本
  		"react"			// 说明当前babel可以编译react的代码
	]
  }
  ```
  
  > - `presets` : 对应的是一个数组, 里面可以有很多的说明项, 在这个presets里面我们可以告诉babel, 我们在项目里使用的是那个版本的JS语言, 以及我们希望babel具备哪些功能
  >
  >   因为现在javaScript的版本非常的多,eg: ES5、ES6、ES7 JSX 等等. babel 默认情况下把这些版本拆分出去了. 在babel-core里面是没有指定具体版本的. 如果不说明清除,babel是不知道我们使用的是那个版本的JS在写代码, 无法准确的帮助我们编译对应的JS代码
  >
  >   - `["es2015", {loose:true}]` : 表示告诉babel我们项目采用的是 es5的松散语法
  >   - `"react"` :  添加这一项表示告诉babel我们需要编译react的代码
  
有了上面对`.babelrc` 文件对babel 的配置后还不够, 因为babel-loader只是babel的一个插件, 还需要安装`babel-core` (babel的核心)
  
```
  npm install babel-core -D // -D 表示的是开发环境依赖
  ```
  
- 除了安装 babel-core, 还不够, 还要安装下面几个babel的插件:  `babel-preset-es2015`  `babel-preset-es2015-loose`  `babel-preset-react` , 安装完成后才能使用babel-loader编译JSX
  
  ```
  npm install babel-core babel-preset-es2015 babel-preset-es2015-loose babel-preset-react -D
  ```










>  更详细的说明看demo:  `02.Webpack loader基础应用` 











## 2、node服务



## 3、服务端渲染基础





















# 三、 项目架构



## 1、React



## 2、React-Router 配置



## 3、Mobx配置



## 4、服务端渲染优化





# 四、业务开发



## 1、页面开发



## 2、登陆服务



## 3、服务端渲染优化





# 五、项目部署



## 1、PM2



## 2、Nginx



## 3、一键部署

 





# 六、单页应用

## 特征

- 所有内容都在前端生成
- JS承担更多的业务逻辑, 后端只提供API
- 页面路由跳转不需要经过后端, 全部前端处理. 



## 常用类库

- React
- Vue
- Angular



## 架构工具

- npm
- bower
- jspm



## 模块化工具

- webpack
  - 官网: https://webpack.org 
- rollup
- browserify
- 