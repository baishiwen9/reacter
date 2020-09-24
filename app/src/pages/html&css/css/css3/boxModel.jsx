import React, { Component } from 'react';
import Code from '../../../comp/Code';
import BoxModelIcon1 from './../../../../img/boxModel1.jpg';
import BoxModelIcon2 from './../../../../img/boxModel2.jpg';

export default class BoxModel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">盒模型</span></p>
                <div className="quote">
                    参考文档： <a href="https://blog.csdn.net/qiwoo_weekly/article/details/104285617" target="_blank">https://blog.csdn.net/qiwoo_weekly/article/details/104285617</a><br />
                    盒子模型（Box Modle）可以用来对元素进行布局，包括内边距，边框，外边距，和实际内容这几个部分。<br />
                    盒子模型分为两种 第一种是W3c标准的盒子模型（标准盒模型） 、第二种IE标准的盒子模型（怪异盒模型）<br />
                </div>

                <p className="item-title">一、两者的区别</p>
                <div className="quote">
                    <span className="mark">1. 标准盒模型</span><br />
                    标准盒模型中width指的是内容区域content的宽度；height指的是内容区域content的高度。<br /><br />
                    标准盒模型下盒子的大小  = content + border + padding + margin<br /><br />
                    <img className="middle-img" alt="" src={BoxModelIcon1} /><br />

                    <span className="mark">2. 怪异盒模型</span><br />
                    怪异盒模型中的width指的是内容、边框、内边距总的宽度（content + border + padding）;<br />
                    height指的是内容、边框、内边距总的高度<br /><br />
                    怪异盒模型下盒子的大小=width（content + border + padding） + margin<br />
                    <img className="middle-img" alt="" src={BoxModelIcon2} />
                </div>

                <p className="item-title">二、选择盒模型</p>
                <div className="quote">
                    如果是定义了完整的doctype的标准文档类型，无论是哪种模型情况，最终都会触发标准模式。<br /><br />
                    我们可以通过属性box-sizing来设置盒子模型的解析模式:<br /><br />
                    可以为box-sizing赋三个值：<br />

                        <span className="text-placeholder" />content-box： 默认值，border和padding不算到width范围内，可以理解为是W3c的标准模型(default)<br />

                        <span className="text-placeholder" />border-box：border和padding划归到width范围内，可以理解为是IE的怪异盒模型<br />

                        <span className="text-placeholder" />padding-box：将padding算入width范围<br />
                </div>
            </div>
        )
    }
}