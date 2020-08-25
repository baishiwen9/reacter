import React, { Component } from 'react';
import Code from './../../../comp/Code';


export default class ClearFloat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">清浮动</span></p>
                
                <p className="item-title"><span className="textShadow">一、浮动</span></p>
                <div className="article-desc">
                    <span className="mark">float被设计出来的目的是为了实现文字环绕图片的效果。</span><br /><br />
                    浮动的定义为浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框脱离文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。<br /><br />

                    <span className="mark">浮动的特点：</span><br />
                    1. 浮动的元素会脱离正常的文档流；<br />
                    2. 浮动的元素会向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止；<br />
                    3. 一个浮动的内联元素（比如span img标签）不需要设置display：block就可以设置宽度;<br />
                    4. 块级元素设置为浮动后，宽度将不再独占一行，而是收紧为内部元素的宽度。<br /><br />

                    <span className="mark">浮动的缺点：</span><br />
                    1. 父容器高度塌陷<br />
                </div>


                <p className="item-title"><span className="textShadow">二、清浮动</span></p>
                <div className="article-desc">
                    1. 给父元素给指定的高度值（扩展性不好）<br /><br />
                    2. 添加一个空的块级元素设置clear: both;来清浮动：<br />
                        缺点： 增加了无意义的冗余的标签<br />
                        必须是一个块级元素，设置样式clear: both;<br /><br />
                    3. 父元素使用伪元素:after来清浮动<br /><br />
                    4. 给父元素使用overflow: hidden;来清浮动<br />
                        原理： 让父元素触发BFC，由于BFC的高度包含浮动元素的高度，所以父元素高度不会塌陷。<br /><br />
                    5. br标签：设置br标签的clear属性为all即可。<br />

                    <Code code={`
//给父元素指定高度
.parent{
    width: 100px;
    height: 100px;
}
.son{
    width: 100%;
    float: left;
}

//父元素添加一个空的块级标签
.parent{
    width: 100px;
}
.son{
    width: 100%;
    float: left;
}
.clearBox{
    clear: both;
}

<div class="parent">
    <div class="son"></div>
    <div class="clearBox"></div>
</div>

//父元素设置伪元素
.parent{
    width: 100px;
}
.parent::after{
    content: '';
    display: block;
    clear: both;
    height: 0;
    line-height: 0;
    visibility:hidden;//允许浏览器渲染它，但是不显示出来
}

//父元素使用overflow: hidden;
.parent{
    width: 100px;
    overflow: hidden;
}

//br标签设置clear属性
<div class="parent">
    <div class="son"></div>
    <br clear="all" />
</div>`} />
                </div>
                <p className="item-title"><span className="textShadow">三、清浮动总结</span></p>
                <div className="article-desc">
                    清浮动一般可以分为两类，一类是使用clear属性，另一类是触发BFC<br /><br />

                    1. clear属性：<br />
                    clear 属性规定元素盒子的边不能和浮动元素相邻。该属性只能影响使用清除的元素本身，不能影响其他元素。
                    换而言之，如果已经存在浮动元素的话，那么该元素就不会像原本元素一样受其影响了。 第一种方式里我们的填补元素(我自己的称呼)，就是起这种作用。<br /><br />

                    2. BFC(block formatting contexts)块级格式化上下文<br />
                    BFC是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
                    由于BFC的高度包含浮动元素的高度，所以父元素高度不会塌陷。
                </div>

            </div>
        )
    }
}