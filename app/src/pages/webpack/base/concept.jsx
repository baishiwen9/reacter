import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Concept extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">概念</span></p>
                <p className="item-title"><span className="textShadow">一、 webpack</span></p>
                <div className="article-desc">
                   webpack是一个现代js应用程序的静态模块打包器（module bundler）。当webpack处理应用程序时，它会递归的构建一个依赖图， 其中包含
                   应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。
                </div>

                <p className="item-title"><span className="textShadow">二、 入口（entry）</span></p>
                <div className="article-desc">
                    入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。<br /><br />
                    配置：<br/>
                    可以通过在 webpack 配置中配置 entry 属性，来指定一个入口起点（或多个入口起点）。默认值为 ./src。<br /><br/>
                    简单实例：<br/>
                    <Code code={`
//webpack.confing.js
module.exports = {
    entry: './scr/index.js',
}`} />
                </div>

                <p className="item-title"><span className="textShadow">三、 出口（output）</span></p>
                <div className="article-desc">
                    出口属性告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件，默认值为./dist<br/><br/>
                    简单实例：<br/>
                    <Code code={`
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-fitst-webpack-demo.js',
    }
}`} />
                </div>

                <p className="item-title"><span className="textShadow">四、 loader</span></p>
                <div className="article-desc">
                    loader让webpack能够处理js以外的文件（webpack只能理解js），loader可以将所有类型的文件转换为webpack能够处理的有效模块，
                    然后利用webpack的打包能力，对它们进行处理。<br/><br/>
                    在webpack中配置loader的两个目标：<br/>
                    1. test属性： 用于标示出，应该被对应的loader进行转换的文件；<br/>
                    2. use属性： 表示进行转换时，应该用哪个loader。<br/><br/>

                    简单实例：<br/>
                    <Code code={`
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack-demo.js',
    },
    module: {
        rules: [
            {
                test: /\.test$/,
                use: 'raw-loader',
            }
        ]
    }
}
`}/>
                </div>


                <p className="item-title"><span className="textShadow">五、 插件（plugin）</span></p>
                <div className="article-desc">
                    插件的范围包括：从打包优化，压缩，一直到重新定义环境中的变量。<br/><br/>
                    使用一个插件，首先需要require它，把它添加到plugins数组中。多数插件可以通过option来自定义。
                    也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。<br/><br/>

                    简单实例：<br/>
                    <Code code={`
// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack-demo.js',
    },
    module: {
        rules: [
            {
                test: /\.text$/,
                use: 'raw-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
        })
    ]
}`} />
                </div>

                <p className="item-title"><span className="textShadow">六、 模式</span></p>
                <div className="article-desc">
                    通过选择 development 或 production 之中的一个，来设置 mode 参数，可以启用相应模式下的 webpack 内置的优。<br/><br/>

                    简单实例：<br/>
                    <Code code={`
// webpack.config.js

module.exports = {
    mode: 'production',
}`} />
                </div>
            </div>
        )
    }
}