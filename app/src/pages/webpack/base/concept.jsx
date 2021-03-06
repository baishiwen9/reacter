import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Concept extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">webpack基础</span></p>
                <div className="quote">
                    webpack原理<br /><br />
                    webpack的运行是一个串行的过程，从启动到结束会执行以下的流程：<br />
                    1. 初始化参数：从配置文件和shell语句中读取与合并参数，得到最终的参数。<br />
                    2. 开始编译：用第一步得到的参数初始化Compiler对象，加载所有配置的插件，执行对象的run方法开始执行编译。<br />
                    3. 确定入口：根据entry找出所有文件<br />
                    4. 编译模块：从入口文件开始出发，调用所有配置的Loader对模块进行编译，再找到模块依赖的模块，再递归本步骤，直到所有入口文件都经过本步骤的处理<br />
                    5. 完成编译：在第四步后，得到了每个模块被编译的内容和他们直接的依赖关系。<br />
                    6. 输出资源：根据入口和模块之间的依赖关系组装成一个个包含多个模块的chunk，再把每个chunk转换成一个单独的文件加入到输出内容后，这一步是可以修改输出内容的最后机会。<br />
                    7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入系统。<br />
                </div>

                <div className="quote">
                    webpack优化<br /><br />
                    1. 缩小文件搜索范围<br />
                        a、优化loader配置： loader对文件的转换操作很耗时，需要让尽可能少的文件被loader处理。<br />
                        在使用loader时可以通过test，include，exclude三个配置项来命中loader要应用规则的文件。<br />
                        <Code code={`
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory'],
                include: path.resolve(__dirname, 'src'),
            }
        ]
    }
}`} />  
                        b、优化resolve.modules配置：resolve.modules用于配置webpack去哪些目录寻找第三方模块。默认值为node_modules。
                        如果知道安装的模块在项目的根目录下的./node_modules时候，没有必要按照默认的方式一层层找：
                        <Code code={`
module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
    }
}`} />
                        c、优化resolve.alias的配置：resolve.alias配置通过别名来把原导入路径映射成一个新的导入路径，可以减少耗时的递归解析操作。
                </div>

                <div className="quote">
                    1. Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。<br />
                    2. Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。<br />
                    3. Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。<br />
                    4. Loader：模块转换器，用于把模块原内容按照需求转换成新内容。<br />
                    5. Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。<br />
                    6. Output：打包后文件输出的位置。
                </div>

                <p className="item-title">一、 webpack</p>
                <div className="quote">
                   webpack是一个现代js应用程序的静态模块打包器（module bundler）。当webpack处理应用程序时，它会递归的构建一个依赖图， 其中包含
                   应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。
                </div>

                <p className="item-title">二、 入口（entry）</p>
                <div className="quote">
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

                <p className="item-title">三、 出口（output）</p>
                <div className="quote">
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

                <p className="item-title">四、 loader</p>
                <div className="quote">
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


                <p className="item-title">五、 插件（plugin）</p>
                <div className="quote">
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

                <p className="item-title">六、 模式</p>
                <div className="quote">
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