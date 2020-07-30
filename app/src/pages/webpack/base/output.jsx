import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class WebpackOutput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">output配置</span></p>
                <p className="item-title"><span className="textShadow">一、用法</span></p>
                <div className="article-desc">
                    配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个入口起点，但只指定一个输出配置。<br /><br />
                    在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括以下两点：<br />
                    1、filename 用于输出文件的文件名。<br />
                    2、目标输出目录 path 的绝对路径。<br /><br />

                    <Code code={`
// webpack.config.js
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'demo.js',
    }
}`} />       
                </div>

                <p className="item-title"><span className="textShadow">二、 多个入口起点的output</span></p>
                <div className="article-desc">
                    如果配置创建了多个单独的 "chunk"，则应该使用占位符来确保每个文件具有唯一的名称。<br /><br />
                    <Code code={`
//webpack.confing.js
module.exports = {
    entry: {
        main: './src/index.js',
        home: './src/pages/home/index.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    }

}`} />
                </div>
            </div>
        )
    }
}