import React, { Component } from 'react';
import Code from '../../../comp/Code';
import FlexImage from './../../../../img/flex-img.jpg';
import './layout.scss';

export default class FlexPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">flex布局</span></p>
                <p className="item-title"><span className="textShadow">一、flex简介</span></p>
                <div className="article-desc">
                    参考文档： http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html<br /><br />
                    Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。<br />
                    任何一个容器都可以指定为 Flex 布局。<br />
                    注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。<br />
                </div>

                <p className="item-title"><span className="textShadow">二、基本概念</span></p>
                <div className="article-desc">
                    1. 容器： 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。<br />
                    2. 项目： 它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。<br />
                    3. 轴： 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。<br />
                    4. 项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。<br />
                    <img className="big-img" alt="" src={FlexImage} />
                </div>

                <p className="item-title"><span className="textShadow">三、容器的属性</span></p>
                <div className="article-desc">
                    容器的属性：<br />
                    <span className="text-placeholder" />1. flex-direction<br/>
                    <span className="text-placeholder" />2. flex-wrap<br/>
                    <span className="text-placeholder" />3. flex-flow<br/>
                    <span className="text-placeholder" />4. justify-content<br/>
                    <span className="text-placeholder" />5. align-items<br/>
                    <span className="text-placeholder" />6. align-content<br/><br/>

                    每个属性的含义：<br/>
                    1. flex-direction：<br/>
                    属性决定主轴的方向（即项目的排列方向）。<br/><br/>
                    <Code code={`
.box {
    flex-direction: row | row-reverse | column | column-reverse;
}`} /><br/>
                    flex-direction有四个可能值：<br/>
                    <span className="text-placeholder" />1. row（默认值）：主轴为水平方向，起点在左端。<br/>
                    <span className="text-placeholder" />2. row-reverse：主轴为水平方向，起点在右端。<br/>
                    <span className="text-placeholder" />3. column：主轴为垂直方向，起点在上沿。<br/>
                    <span className="text-placeholder" />4. column-reverse：主轴为垂直方向，起点在下沿。<br/>

                    实例：<br/>
                    <div className="flex-wrap">
                        <span className="mark">flex-direction: row;</span>
                        <div className="flex-layout flex-layout-1">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">flex-direction: row-reverse;</span>
                        <div className="flex-layout flex-layout-2">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">flex-direction: column;</span>
                        <div className="flex-layout flex-layout-3">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">flex-direction: column-reverse;</span>
                        <div className="flex-layout flex-layout-4">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                    <br/><br/>
                    2. flex-wrap:<br/>
                    默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。<br/><br/>
                    <Code code={`
.box{
    flex-wrap: nowrap | wrap | wrap-reverse;
}`} />
                    flex-wrap有四个可能值：<br/>
                    <span className="text-placeholder" />1. nowrap（默认）：不换行。<br/>
                    <span className="text-placeholder" />2. wrap：换行，第一行在上方。<br/>
                    <span className="text-placeholder" />3. wrap-reverse：换行，第一行在下方。<br/>

                    实例：<br/>
                    <div className="flex-wrap">
                        <span className="mark">flex-wrap: nowrap;</span>
                        <div className="flex-layout flex-layout-wrap-1">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">flex-wrap: wrap;</span>
                        <div className="flex-layout flex-layout-wrap-2">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">flex-wrap: wrap-reverse;</span>
                        <div className="flex-layout flex-layout-wrap-3">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                    <br/><br/>
                    3. flex-flow:<br/>
                    flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。<br/><br/>
                    <Code code={`
.box {
    flex-flow: <flex-direction> || <flex-wrap>;
}`} />
<br/><br/>
                    4. justify-content:<br/>
                    justify-content属性定义了项目在主轴上的对齐方式。<br/><br/>
                    <Code code={`
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}`} />
                    justify-content有5个可能值：<br/>
                    <span className="text-placeholder" />1. flex-start（默认值）：左对齐<br/>
                    <span className="text-placeholder" />2. flex-end：右对齐<br/>
                    <span className="text-placeholder" />3. center： 居中<br/>
                    <span className="text-placeholder" />4. space-between：两端对齐，项目之间的间隔都相等。<br/>
                    <span className="text-placeholder" />5. space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。<br/>
                    实例：<br/>
                    <div className="flex-wrap">
                        <span className="mark">justify-content: flex-start;</span>
                        <div className="flex-layout flex-layout-justify-content-1">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">justify-content: flex-end;</span>
                        <div className="flex-layout flex-layout-justify-content-2">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">justify-content: center;</span>
                        <div className="flex-layout flex-layout-justify-content-3">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">justify-content: space-between;</span>
                        <div className="flex-layout flex-layout-justify-content-4">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">justify-content: space-around;</span>
                        <div className="flex-layout flex-layout-justify-content-5">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/><br/>
                    5. align-items:<br/>
                    align-items属性定义项目在交叉轴上如何对齐。<br/><br/>
                    <Code code={`
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}`} />
                    align-items有5个可能值：<br/>
                    <span className="text-placeholder" />1. flex-start：交叉轴的起点对齐。<br/>
                    <span className="text-placeholder" />2. flex-end：交叉轴的终点对齐。<br/>
                    <span className="text-placeholder" />3. center：交叉轴的中点对齐。<br/>
                    <span className="text-placeholder" />4. baseline: 项目的第一行文字的基线对齐。<br/>
                    <span className="text-placeholder" />5. stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。<br/>
                    实例：<br/>
                    <div className="flex-wrap">
                        <span className="mark">align-items: flex-start;</span>
                        <div className="flex-layout flex-layout-algin-items-1">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">align-items: flex-end;</span>
                        <div className="flex-layout flex-layout-algin-items-2">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">align-items: center;</span>
                        <div className="flex-layout flex-layout-algin-items-3">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">align-items: baseline;</span>
                        <div className="flex-layout flex-layout-algin-items-4">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>

                    <br/>
                    <div className="flex-wrap">
                        <span className="mark">align-items: stretch;</span>
                        <div className="flex-layout flex-layout-algin-items-5">
                            <div className="flex-item">1</div>
                            <div className="flex-item">2</div>
                            <div className="flex-item">3</div>
                        </div>
                    </div>
                </div>
                <p className="item-title"><span className="textShadow">四、项目的属性</span></p>
                <div className="article-desc">
                    以下6个属性设置在项目上:<br/>
                    <span className="text-placeholder" />1. order<br />
                    <span className="text-placeholder" />2. flex-grow<br />
                    <span className="text-placeholder" />3. flex-shrink<br />
                    <span className="text-placeholder" />4. flex-basis<br />
                    <span className="text-placeholder" />5. flex<br />
                    <span className="text-placeholder" />6. align-self<br /><br />

                    各属性的含义及用法：<br/>
                    <span className="mark1">1. order: 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</span><br /><br />
                    <span className="mark1">2. flex-grow: 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</span><br /><br />
                    <span className="mark1">3. flex-shrink: 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</span><br /><br />
                    <span className="mark1">4. flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</span><br /><br />
                    <span className="mark1">5. flex: flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。<span className="mark">两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</span></span><br /><br />
                    <span className="mark1">6. align-self: 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</span><br /><br />
                    <Code code={`
.item {
    order: 1;
}
.item {
    flex-grow: 0;
}
.item {
    flex-shrink: 1;
}
.item {
    flex-basis: auto;
}
.item {
    flex: auto; // 1 1 auto
    flex: none; // 0 0 auto
    flex: 1;    // 1 1 0%
    flex: 10;   // 10 1 0%
}
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`} />
                </div>
            </div>
        )
    }
}