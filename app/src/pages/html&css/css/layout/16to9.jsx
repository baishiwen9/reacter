import React, { Component } from 'react';
import Code from './../../../comp/Code';
import './common.scss';

export default class Layout16to9 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">宽度100%，长宽比为16:9</span></p>
                <div className="article-desc">
                    做响应式网页，如何让一个div的高和宽保持比例放大或是缩小？<br />
                    即给定可变宽度的元素，它将确保其高度以响应的方式保持成比例(即，其宽度与高度的比率保持恒定)。<br/><br/>
                    
                    参考文档： <a href="https://blog.csdn.net/qiwoo_weekly/article/details/104489511" target="_blank">https://blog.csdn.net/qiwoo_weekly/article/details/104489511</a><br/>
                    实例：实现2 ： 1<br/>
                    以下利用的原理是：padding-bottom，<span className="mark">垂直方向上的内外边距使用百分比做单位时，是基于包含块的宽度来计算的。</span><br /><br />
                    <span className="mark">利用padding-bottom和定位实现</span><br/>
                    <div className="layout-16to9">
                        <div className="demo"></div>
                    </div><br/>
                    <Code code={`
// html
<div className="layout-16to9">
    <div className="demo"></div>
</div>

// css
.layout-16to9{
    position: relative;
    background-color: #ccc;
    width: 10%;
    padding-bottom: 20%;
    .demo{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
}`} />
                </div>
                <div className="article-desc">
                    1. 如果元素的尺寸已知的话，计算好宽高写上去就行了。<br/><br/>

                    2. 如果元素尺寸未知，最简单的方法是用 JavaScript 实现，如果用 CSS 的话又要分为以下几种：<br/><br/>

                    a. 如果是可替换元素 img 或 video，可以将width/height其一设定尺寸，另一个设为auto，则可替换元素会根据其固有尺寸进行变化。<br/><br/>
                    b. 如果是普通的元素，我们可以通过padding-top/padding-bottom的方式来模拟固定宽高比，不过这种方式不灵活，只能够高度随着宽度变。CSS 工作组现在正在引入一种新的方案aspect-ratio，可以很方便地指定宽高比，不过暂时还没有浏览器实现。相信不久之后就会有浏览器逐渐实现了。<br/>
                </div>
            </div>
        )
    }
}