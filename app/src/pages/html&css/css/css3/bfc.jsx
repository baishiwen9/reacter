import React, { Component } from 'react';
import Code from './../../../comp/Code';
import '../layout/common.scss';

export default class Margin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">BFC</span></p>
                
                <p className="item-title">一、BFC简介</p>
                <div className="quote">
                    参考文档： https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context<br /><br/>
                    https://blog.csdn.net/sinat_36422236/article/details/88763187<br /><br />
                   1. 定义<br />
                   BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。<br /><br />

                   2. Box<br />
                   Box 是 CSS 布局的对象和基本单位, 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context。<br /><br />

                   3. Formatting Context<br />
                   Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用.
                </div>

                <p className="item-title">二、BFC的布局规则</p>
                <div className="quote">
                    1. 内部的Box会在垂直方向，一个接一个放置；<br /><br />
                    2. Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box之间的margin会发生重叠；<br /><br />
                    3. 每个盒子的margin box的左边，与包含块border box的左边相接触，即使存在浮动也是如此；<br /><br />
                    4. BFC的区域不会与float box重叠；  <br /><br />
                    5. BFC就是页面上的一个隔离的独立容器，容器里的子元素不会影响外面的元素，反之亦是如此；  <br /><br />
                    6. 计算BFC的高度时，浮动也参与计算。  <br /><br />

                </div>
                    
                <p className="item-title">三、生成BFC</p>
                <div className="quote">
                    1. float的值不是none；<br /><br />
                    2. position的值不是static或者relative（绝对定位元素 (元素具有 position 为 absolute 或 fixed)）；<br /><br />
                    3. display的值是inline-block，inline-flex，table-cell，flex等；<br /><br />
                    4. overflow的值不是visible<br /><br />
                    
                </div>

                <p className="item-title">四、BFC用途</p>
                <div className="quote">
                    1. 利用BFC防止margin重叠；<br /><br />
                    //2. 利用BFC做自适应两栏布局；<br /><br />
                    3. 利用BFC清除浮动；<br /><br />

                    使用实例：<br /><br />
                    <p>1. 利用BFC防止margin重叠：左边是没有利用BFC，margin会重叠；右边使用了BFC</p>
                    <div className="layout-bfc">
                        <div className="demo-list left">
                            <div className="item top"></div>
                            <div className="item bottom"></div>
                        </div>

                        <div className="demo-list right">
                            <div className="item-wrap">
                                <div className="item top"></div>
                            </div>
                            <div className="item bottom"></div>
                        </div>
                    </div>
                    <br />
                    <p>3. 利用BFC清除浮动；: 上边不利用BFC（导致父元素高度塌陷），右边利用BFC</p>
                    <div className="layout-bfc-float">
                        <div className="float-list left">
                            <div className="item"></div>
                        </div>
                    </div>
                    <br /><br />
                    <div className="layout-bfc-float">
                        <div className="float-list right">
                            <div className="item left-col"></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}