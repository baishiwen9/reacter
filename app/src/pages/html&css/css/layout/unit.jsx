import React, { Component } from 'react';
import Code from './../../../comp/Code';

export default class Unit extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">CSS中的单位</span></p>
                <div className="article-desc">
                    响应式布局参看文档： https://juejin.im/post/6844903935568789517<br />
                    https://juejin.im/post/6844903796280131591

                </div>

                <p className="item-title"><span className="textShadow">一、基本概念</span></p>
                <div className="article-desc">
                    1. 像素<br />
                    <span className="text-placeholder"/>基本原色素及其灰度的基本编码。像素是指由图像的小方格组成的，这些小方块都有一个明确的位置和被分配的色彩数值，小方格颜色和位置就决定该图像所呈现出来的样子。<br /><br />

                    2. 物理像素<br />
                    <span className="text-placeholder"/>它是显示器（电脑、手机屏幕）最小的物理显示单位，物理像素指的是显示器上最小的点。物理像素的大小取决于屏幕。是一个无法改变的属性。单位为pt。
                    <br /><br />
                    <span className="mark">设备像素 = 物理像素</span><br /><br />

                    3. 设备独立像素<br />
                    <span className="text-placeholder"/>设备独立像素（又称设备无关像素 Device Independent Pixels 、密度独立性 Density Independent或设备独立像素，简称DIP或DP）是一种物理测量单位，基于计算机控制的坐标系统和抽象像素（虚拟像素），由底层系统的程序使用，转换为物理像素的应用。<br /><br />
                    设备独立像素 = CSS 像素 = 逻辑像素<br /><br />

                    4. 设备像素比<br />
                    <span className="text-placeholder"/>DPR（Device Pixel Ratio） 设备像素比，这个与我们通常说的视网膜屏（多倍屏，Retina屏）有关。<br /><br />
                    <span className="mark">设备像素比描述的是未缩放状态下，物理像素和设备独立像素的初始比例关系。</span><br /><br />
                    计算公式：DPR = 物理像素 / 设备独立像素<br /><br />
                    

                    5. Retina屏幕<br />
                    <span className="text-placeholder"/>视网膜（Retina）屏幕是苹果公司"发明"的一个营销术语。 苹果公司将 dpr 大于 1 的屏幕称为视网膜屏幕。在视网膜屏幕中，以 dpr = 2 为例，把 4(2x2) 个像素当 1 个像素使用，这样让屏幕看起来更精致，但是元素的大小本身却不会改变。<br /><br />
                    
                    举例：iPhone6/7/8为例<br />
                    打开 Chrome 开发者工具可以看到，iPhone6/7/8为375 * 667，表示的是设备独立像素（DIP），也可以理解为 CSS 像素，也称为逻辑像素<br /><br />
                    iPhone7的物理像素为： 1334 * 750 <br /><br />
                    iPhone7的设备像素比： DPR = 750 / 375 = 2 或者是 1334 / 667 = 2
                </div>

                <p className="item-title"><span className="textShadow">二、单位</span></p>
                <div className="article-desc">
                    1. px<br />
                        默认情况下像素px是相对于屏幕分辨率而言，比如说我们的屏幕分辨率是1440 X 900，说的就是像素1440px X 900px；<br /><br />

                    2. em<br />
                    em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。<br /><br />
                    
                    em的特点：<br />
                    
                    a. em的值并不是固定的；<br />
                    b. em会继承父级元素的字体大小；<br />
                    c. 任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。<br /><br />

                    3. rem<br />
                    rem 是CSS3的一个相对单位（root em，根em）<br />
                    使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素<br />
                    只要html的font-size大小不变，1rem所代表的font-size大小就不会变，rem只取决于html的font-size<br /><br />

                    rem解决了哪些问题？<br /><br />
                    移动设备的宽度是各种各样的，每个设备的dpr也不同，换句话说就是不同设备每一行的物理像素数不同，能显示的css的px数也不同。<br />
                    rem的大小是相对于html的font-size的，如果html的font-size根据不同设备的宽度做动态计算，问题就会得到解决。<br /><br />

                    页面都是根据UI设计稿来做的，我们假设UI设计稿的宽度是750px，唯一不变就是就屏幕宽度，html的font-size（rem）只取决于设备宽度<br /><br />

                    <div className="code-desc">
                    document.documentElement.style.fontSize = 100 * ( document.documentElement.clientWidth / 750) + 'px'
                    </div>

                    html的font-size：document.documentElement.style.fontSize<br />
                    设备的宽度：document.documentElement.clientWidth<br />
                    750：UI设计稿的宽度<br />
                    为了方便计算我们将font-size x 100<br /><br />

                    我们可以利用上述原理，通过js动态计算根元素的font-size，这样不管设备的宽度怎么变化，都可以兼容所有设备。<br />
                    <Code code={`
var desginWidth = 750;
var docEl = document.documentElement;
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

var recalc = function() {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / desginWidth) + 'px'
}

window.addEventListener(resizeEvt, recalc, false)
window.addEventListener('pageshow', recalc, false)
document.addEventListener('DOMContentLoaded', recalc, false)
`} />

                </div>
            </div>
        )
    }
}