import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class WebpackLoader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">loader</span></p>
                <p className="item-title"><span className="textShadow">一、loader</span></p>
                <div className="article-desc">
                    loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许直接在 JavaScript 模块中 import CSS文件！ <br /><br />
                    示例：<br />
                    <Code code={`
npm install --save-dev css-loader
npm install --save-dev ts-loader

// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader',
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    }
}`} />       
                </div>

                <p className="item-title"><span className="textShadow">二、使用loader</span></p>
                <div className="article-desc">
                    在应用程序中有三种使用loader的方式：<br /><br />
                    1. 配置（推荐）：在webpack.config.js文件中指定loader；<br />
                    2. 内联：在每个import语句中显式的指定loader；<br />
                    3. CLI：在shell命令中指定loader；<br /><br />

                    <span className="mark">1. 配置</span><br />
                    module.rules 允许你在 webpack 配置中指定多个 loader。 这是展示 loader 的一种简明方式，并且有助于使代码变得简洁。同时让你对各个 loader 有个全局概览：
                    <Code code={`
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }`} />
                    <span className="mark">2. 内联</span><br />
                    可以在 import 语句或任何等效于 "import" 的方式中指定 loader。使用 ! 将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。
                    <div className="code-desc">
                        import Styles from 'style-loader!css-loader?modules!./styles.css';
                    </div>
                    通过前置所有规则及使用 !，可以对应覆盖到配置中的任意 loader。<br /><br />


                    <span className="mark">3. CLI</span><br />
                    也可以通过 CLI 使用 loader：
                    <div className="code-desc">
                        webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader';
                    </div>
                </div>

                <p className="item-title"><span className="textShadow">三、loader特性</span></p>
                <div className="article-desc">
                    1. loader支持链式传递，一组链式的 loader 将按照相反的顺序执行。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。<br/><br/>
                    2. loader可以是同步的，也可以是异步的；<br/><br/>
                    3. loader运行在node.js环境中，能够执行任何可能的操作；<br/><br/>
                    4. loader接受查询参数，用于对loader传递配置；<br/><br/>
                    5. loader也可以通过options对象进行配置；<br/><br/>
                    6. 除了使用 package.json 常见的 main 属性，还可以将普通的 npm 模块导出为 loader，做法是在 package.json 里定义一个 loader 字段。<br/><br/>
                    7. 插件可以为loader带来更多的特性；<br/><br/>
                    8. loader能够产生额外的任意文件；<br/><br/>
                </div>

                <p className="item-title"><span className="textShadow">四、解析loader</span></p>
                <div className="article-desc">
                    loader 遵循标准的模块解析。多数情况下，loader 将从模块路径（通常将模块路径认为是 npm install, node_modules）解析。
                    loader 模块需要导出为一个函数，并且使用 Node.js 兼容的 JavaScript 编写。通常使用 npm 进行管理，但是也可以将自定义 loader 作为应用程序中的文件。按照约定，loader 通常被命名为 xxx-loader（例如 json-loader）。
                </div>
            </div>
        )
    }
}