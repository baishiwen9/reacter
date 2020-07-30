import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class WebpackPlugins extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">plugins</span></p>
                <p className="item-title"><span className="textShadow">一、plugins</span></p>
                <div className="article-desc">
                    插件目的在于解决 loader 无法实现的其他事。<br /><br />
                    webpack 插件是一个具有 apply 属性的 JavaScript 对象。apply 属性会被 webpack compiler 调用，
                    并且 compiler 对象可在整个编译生命周期访问。<br /><br />
                    
                    <Code code={`
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
}`} />       compiler hook 的 tap 方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个常量，以便它可以在所有 hook 中复用。
                </div>

                <p className="item-title"><span className="textShadow">二、用法</span></p>
                <div className="article-desc">
                    由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。<br /><br />
                    <Code code={`
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装

const config = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;`} />
                
                </div>
            </div>
        )
    }
}