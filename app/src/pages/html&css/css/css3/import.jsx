import React, { Component } from 'react';
import Code from './../../../comp/Code';


export default class Import extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">@import</span></p>
                
                <p className="item-title">1. link标签与@import的区别</p>
                <div className="quote">
                    1. @import是 CSS 提供的语法规则，只有导入样式表的作用<br />
                    2. link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等<br />
                    3. 加载页面时，link引入的CSS被同时加载，@import引入的CSS将在页面加载完毕后加载<br />
                    4. link标签作为HTML元素，不存在兼容性问题，而@import是CSS2.1才有的语法，故老版本浏览器（IE5之前）不能识别<br />
                    5. 可以通过JS操作DOM，来插入link标签改变样式；由于DOM方法是基于文档的，无法使用@import方式插入样式<br />
                </div>
            </div>
        )
    }
}