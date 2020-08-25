import React, { Component } from 'react';
import Code from './../../../comp/Code';


export default class Margin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">margin</span></p>
                
                <p className="item-title"><span className="textShadow">一、margin简介</span></p>
                <div className="article-desc">
                    参考文档： https://blog.csdn.net/qiwoo_weekly/article/details/104285617<br />
                    margin: 盒模型中盒子的外边距，有四个值：margin-top, margin-bottom, margin-left, margin-right;<br />
                    margin的值： 可以为正值，负值，百分比<br />
                    <span className="mark">margin值为百分比：此时margin的值是基于包含块的宽度来计算的。</span><br />
                </div>
                    
                <p className="item-title"><span className="textShadow">二、margin重叠</span></p>
                <div className="article-desc">
                    所谓外边距重叠：即在垂直方向上，两个外边距相遇的时候，会重叠成一个外边距，重叠后的外边距的值等于两者中较大的那个值。<br /><br />
                    外边距重叠有以下几种情况：<br />
                    <span className="text-placeholder" />1. 当两个元素垂直排列的时候，上面元素的下边距和下面元素的上边距会发生重叠；<br />
                    <span className="text-placeholder" />2. 对于嵌套的父子元素（例如只有一个子元素），如果父元素没有设置边框和内边距，那么他们的上下外边距都会发生重叠；<br />
                    <span className="text-placeholder" />3. 同一个元素的外边距也会发生重叠，如果存在一个空元素，该元素只有上下外边距，此时自身的上下外边距接触，发生重叠；<br />
                    <span className="text-placeholder" />4. 重叠后的外边距又接触其他元素的外边距，还会继续重叠。<br /><br />

                    为什么会有外边距重叠？<br />
                    外边距重叠是为了更好的排版而出现的。<br /><br />

                    什么样的元素会发生外边距重叠？<br />
                    只发生在常规文档流中块级盒子的垂直方向上。行内盒子，浮动盒子，绝对定位的盒子不会发生外边距重叠。<br /><br />

                </div>
            </div>
        )
    }
}