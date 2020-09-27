
import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class Currying extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">CSS 性能优化</span></p>
                <h3>1. css 动画性能优化</h3>
                <div className="quote">
                    参考文档： <a href="http://www.cainiaoxueyuan.com/zhizuo/8484.html" target="_blank">链接1</a><br />
                    参考文档： <a href="http://sy-tang.github.io/2014/05/14/CSS%20animations%20and%20transitions%20performance-%20looking%20inside%20the%20browser/" target="_blank">链接2</a><br />
                </div>
            </div>
        )
    }
}