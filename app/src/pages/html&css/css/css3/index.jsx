import React, { Component } from 'react';
import Code from './../../../comp/Code';
import {Table} from 'antd';
import borderImageSliceIcon from './../../../../img/border-image-slice.jpg';

export default class CSS3Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const columns = [
            {
              title: '值及个数',
              dataIndex: 'value',
              key: 'value',
            },
            {
              title: '说明',
              dataIndex: 'desc',
              key: 'desc',
            },
        ];
        const dataSource = [
            {
              key: '1',
              value: '1个，例如border-raduis: 12px;',
              desc: '设置四个角的圆角半径都为12px',
            },
            {
                key: '2',
                value: '2个，例如border-raduis: 12px 10px;',
                desc: '设置左上角和右下角为12px，右上角和左下角10px',
            },
            {
                key: '3',
                value: '3个，例如border-raduis: 12px 10px 8px;',
                desc: '设置左上角为12px，右上角和左下角为10px, 右下角8px',
            },
            {
                key: '4',
                value: '4个，例如border-raduis: 12px 10px 8px 6px;',
                desc: '设置左上角为12px， 右上角为10，右下角为8，左下角为6px',
            },
          ];
        return (
            <div>
                <p className="article-title"><span className="textShadow">css3新特性</span></p>
                <div className="article-desc">
                    参考文档： https://juejin.im/post/6844904033870675981#heading-14<br /><br />
                    <span className="textShadow">1. 背景</span><br />
                    <div className="quote">
                        background-origin: border-box | padding-box | content-box<br />
                        background-clip: border-box | padding-box | content-box | text | (inherit | initial | unset)<br />
                        background-size: contain | cover | value <br />
                    </div>
                    background-origin: 背景图片对齐方式，border-box：以border的左上角对齐，padding-box：以padding的左上角对齐，content-box：以content左上角对齐。默认是padding-box。<br /><br />
                    background-clip: (<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip" target="_blank">官网</a>)背景图片（颜色）的延伸范围。border-box: 延伸到边框外沿；padding-box：背景延伸至内边距(padding)外沿,不会绘制到边框处；content-box：背景被裁剪至内容区(content box)外沿；text：背景被裁剪成文字的前景色。<br /><br />
                    background-size：设置背景图片大小。contain：缩放背景图片以完全装入背景区，可能背景区部分空白；cover：缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。<br /><br />
                    
                    <span className="textShadow">2. 边框</span><br />
                    <div className="quote">
                        border-radius: value， 设置边框为圆角，value为圆角边框的半径<br />
                        border-image:  none | image; 指定边框图片的地址(<a href="https://aotu.io/notes/2016/11/02/border-image/index.html" target="_blank">参考文档</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image" target="_blank">MDN</a>)
                    </div>

                    <span className="mark">border-radius属性：</span><br /><br />

                    <Table dataSource={dataSource} columns={columns} pagination={false} /><br />

                    每个圆角的半径其实是由水平半径和垂直半径组成: border-radius: 20px;表示每个角的水平和垂直半径都为20px。而border-radius: 20px/30px;表示每个角的水平半径为20px，垂直半径为30px。<br /><br />
                    border-radius是一个合成属性：
                    <div className="quote">
                        border-radius: 20px;表示：<br />
                        border-top-left-radius: 20px;<br />
                        border-top-right-radius: 20px;<br />
                        border-bottom-left-radius: 20px;<br />
                        border-bottom-left-radius: 20px;<br /><br />

                        border-radius: 20px/30px;表示：<br />
                        border-top-left-radius: 20px 30px;<br />
                        border-top-right-radius: 20px 30px;<br />
                        border-bottom-left-radius: 20px 30px;<br />
                        border-bottom-left-radius: 20px 30px;<br />
                    </div>

                    <span className="mark">border-image属性：</span><br /><br />
                    CSS属性允许在元素的边框上绘制图像。这使得绘制复杂的外观组件更加简单，也不用在某些情况下使用九宫格了。使用 border-image 时，其将会替换掉 border-style 属性所设置的边框样式。虽然规范要求使用 border-image 时边框样式必须存在，但一些浏览器可能没有实现这一点。<br /><br />
                    border-image是一个复合属性，由以下属性合成：

                    <div className="quote">
                        border-image-source: none | url | linear-gradient  表示：用于声明元素的边框图片（border-image）的资源 <br />
                        border-image-slice: 数值 | 百分比  表示：属性会将图片分割为9个区域：四个角，四个边（edges）以及中心区域。四条切片线，从它们各自的侧面设置给定距离，控制区域的大小。<br />
                        border-image-width: 数值 | 百分比  <br />
                        border-image-outset: length | number  表示：属性定义边框图像可超出边框盒的大小<br />
                        border-image-repeat: stretch | repeat | round | space  表示：定义图片如何填充边框。或为单个值，设置所有的边框；或为两个值，分别设置水平与垂直的边框。<br />
                    </div>

                    border-image-slice：<br />
                    <img className="middle-img" src={borderImageSliceIcon} alt="" /><br />
                    区域 1-4 为角区域（corner region）。 每一个都用一次来形成最终边界图像的角点。<br /><br />
                    区域 5-8 边区域（edge region）。在最终的边框图像中重复，缩放或修改它们以匹配元素的尺寸。<br /><br />
                    区域 9 为中心区域（ middle region）。它在默认情况下会被丢弃，但如果设置了关键字fill，则会将其用作背景图像。<br /><br />

                    用法：<br />
                    <div className="code-desc">
                        /* 所有的边 */<br />
                        border-image-slice: 30%; <br /><br />

                        /* 垂直方向 | 水平方向 */<br />
                        border-image-slice: 10% 30%;<br /><br />

                        /* 顶部 | 水平方向 | 底部 */<br />
                        border-image-slice: 30 30% 45;<br /><br />

                        /* 上 右 下 左 */<br />
                        border-image-slice: 7 12 14 5; <br /><br />

                        /* 使用fill（fill可以放在任意位置） */<br />
                        border-image-slice: 10% fill 7 12;<br />
                    </div>

                    border-image-outset:<br />
                    用法：<br />
                    <div className="code-desc">
                        /* border-image-outset: sides */<br />
                        border-image-outset: 30%;<br /><br />

                        /* border-image-outset:垂直 水平 */<br />
                        border-image-outset: 10% 30%;<br /><br />

                        /* border-image-outset: 顶 水平 底 */<br />
                        border-image-outset: 30px 30% 45px;<br /><br />

                        /* border-image-outset:顶 右 底 左  */<br />
                        border-image-outset: 7px 12px 14px 5px;<br /><br />

                        border-image-repeat: inherit;
                    </div>


                    <span className="textShadow">3. 阴影</span><br />
                    <div className="quote">
                        盒子阴影(box-shadow) | 文本阴影(text-shadow)
                    </div>
                    盒子阴影： box-shadow<br/>
                    <div className="code-desc">
                        /* x偏移量 | y偏移量 | 阴影颜色 */<br/>
                        box-shadow: 60px -16px teal;<br/><br/>

                        /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */<br/>
                        box-shadow: 10px 5px 5px black;<br/><br/>

                        /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */<br/>
                        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);<br/><br/>

                        /* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */<br/>
                        box-shadow: inset 5em 1em gold;<br/><br/>

                        /* 任意数量的阴影，以逗号分隔 */<br/>
                        box-shadow: 3px 3px red, -1em 0 0.4em olive;<br/><br/>

                        /* 全局关键字 */<br/>
                        box-shadow: inherit;<br/>
                        box-shadow: initial;<br/>
                        box-shadow: unset;<br/>
                    </div>

                    文本阴影： text-shadow<br/>
                    <div className="code-desc">
                        /* offset-x | offset-y | blur-radius | color */<br/>
                        text-shadow: 1px 1px 2px black; <br/><br/>

                        /* color | offset-x | offset-y | blur-radius */<br/>
                        text-shadow: #fc0 1px 0 10px; <br/><br/>

                        /* offset-x | offset-y | color */<br/>
                        text-shadow: 5px 5px #558abb;<br/><br/>

                        /* color | offset-x | offset-y */<br/>
                        text-shadow: white 2px 5px;<br/><br/>

                        /* offset-x | offset-y<br/>
                        /* Use defaults for color and blur-radius */<br/>
                        text-shadow: 5px 10px;<br/><br/>

                        /* Global values */<br/>
                        text-shadow: inherit;<br/>
                        text-shadow: initial;<br/>
                        text-shadow: unset;<br/>
                    </div>


                    <span className="textShadow">4. 选择器</span><br />
                    <div className="quote">
                        属性选择器：<br/><br/>
                        [attr]：选择包含attr属性的标签<br/>
                        [attr=value]：选择attr属性值为value的标签<br/>
                        [attr^=value]：选择attr属性值以value开头的标签<br/>
                        [attr*=value]：选择attr属性值包含value的标签<br/>                       [attr$=value]：选择attr属性值以value结尾的标签<br/><br/>

                        结构伪类选择器：<br/><br/>

                        E:first-child, 选择器用于选取属于其父元素的首个子元素的指定选择器<br/>
                        E:last-child, 选择器匹配属于其父元素的最后一个子元素的每个元素。<br/>
                        E:nth-child(n), 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型<br/>
                        E:nth-last-child(n), 选择器匹配属于其元素的第 N 个子元素的每个元素，不论元素的类型，从最后一个子元素开始计数。<br/>
                        E:first-of-type, 选择器匹配属于其父元素的特定类型的首个子元素的每个元素<br/>
                        E:last-of-type, 选择器匹配属于其父元素的特定类型的最后一个子元素的每个元素<br/>
                        E:nth-of-type(n), 选择器匹配同类型中的第n个同级兄弟元素<br/>
                        E:nth-last-of-type(n), 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素，从最后一个子元素开始计数。<br/>
                    </div>

                    使用例子：<br />
                    <Code code={`
// [attr]
[title]{ color: red; }

// [attr=value]
[title=demo] { color: red; }

// [attr^=value]
div[class^="test"]{ color: red; }

// [attr*=value]
div[class*="test"]{ color: red; }

// [attr$=value]
div[class$="test"]{ color: red; }

// E:first-child
ul li:first-child{ background-color:red; }

// E:last-child
ul li:last-child{ background-color:red; }

// E:nth-child(n)
ul li:nth-child(3){ background-color:red; }

// E:first-of-type
p:first-of-type { background:#ff0000;}

// E:last-of-type
p:last-of-type { background:#ff0000;}

// E:nth-of-type(n)
p:nth-of-type(2) { background:#ff0000; }

// E:nth-last-of-type(n)
p:nth-last-of-type(2) { background:#ff0000; }
`} />
                </div>
            </div>
        )
    }
}