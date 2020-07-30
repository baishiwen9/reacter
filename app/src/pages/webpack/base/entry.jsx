import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class WebpackEntry extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">entry配置</span></p>
                <p className="item-title"><span className="textShadow">一、 单个入口---简单配置</span></p>
                <div className="article-desc">
                    entry 的写法有三种 分别是:字符串/数组/对象; 其中 字符串 和数组是 对象的一种简写形式.<br /><br />
                    用法： entye: string | Array(string)<br /><br />
                    <Code code={`
// webpack.config.js
module.exports = {
    entry: './src/index.js', // 是下面的简写
    entry: {
        main: './src/index.js'
    }
}`} />       
                </div>

                <p className="item-title"><span className="textShadow">二、 对象语法</span></p>
                <div className="article-desc">
                    用法： entry: [entryChunkName: string]: string | Array(string)<br /><br />
                    <Code code={`
//webpack.confing.js
module.exports = {
    entry: {
        main: './src/index.js',
        home: './src/pages/home/index.js',
    }
}`} />
                </div>

                <p className="item-title"><span className="textShadow">三、 多页面应用程序</span></p>
                <div className="article-desc">
                    <Code code={`
// webpack.config.js
module.exports = {
    entry: {
        page1: './src/pages/index.js',
        page2: './src/pages/home.js',
        page3: './src/pages/my.js',
    }
}`} />
                </div>

                <p className="item-title"><span className="textShadow">四、 entry---数组</span></p>
                <div className="article-desc">
                    <Code code={`
// webpack.config.js
module.exports = {
    entry: ['./src/index.js', './src/pages/home.js'],
}`} />
                </div>
            </div>
        )
    }
}