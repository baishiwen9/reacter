import React, { Component } from 'react';
import Code from './../../../comp/Code';


export default class SelectorNum extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">选择器及优先级</span></p>
                <div className="article-desc">
                    MDN优先级计算规则： https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity<br />
                    https://juejin.im/post/6844903709772611592<br /><br />

                    1. 优先级<br />
                    优先级就是分配给指定的CSS声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。<br /><br />
                    而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。<br /><br />
                    当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。<br /><br />

                    CSS选择器的优先级关系是:
                    <div className="quote">
                    内联 > ID选择器 > 类选择器 > 标签选择器。
                    </div>

                    《CSS REFACTORING》中计算优先级的算法：<br /><br />
                        优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：<br /><br />
                        <span className="text-placeholder" />如果存在内联样式，那么 A = 1, 否则 A = 0;<br /><br />
                        <span className="text-placeholder" />B 的值等于 ID选择器 出现的次数;<br /><br />
                        <span className="text-placeholder" />C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;<br /><br />
                        <span className="text-placeholder" />D 的值等于 标签选择器 和 伪元素 出现的总次数 。<br /><br />

                    实例：#nav-global > ul > li > a.nav-link <br />
                    <div className="quote">
                        没有内联样式，A = 0<br />
                        id选择器出现1次，B = 1 <br />
                        类选择器出现1次，属性选择器0次，伪类0次，C = 1 + 0 + 0 <br />
                        标签选择器出现3次，伪元素0次，D = 3 + 0 <br />
                        (A, B, C, D) === (0, 1, 1, 3)
                    </div>

                    <span className="mark">规则： 比较规则是: 从左往右依次进行比较 ，较大者胜出，如果相等，则继续往右移动一位进行比较 。如果4位全部相等，则后面的会覆盖前面的。</span><br /><br />
                    例外： !important，有了!important优先级会最高，如果是行内加!important则是无敌。
                </div>

                <p className="item-title"><span className="textShadow">一、有哪些选择器</span></p>
                <div className="article-desc">
                    <div className="quote">
                        1. id选择器<br />
                        2. class选择器<br />
                        3. 属性选择器<br />
                        4. 通配符选择器*<br />
                        5. 伪类选择器<br />
                        6. 伪元素选择器<br />
                        7. 后代选择器<br />
                        8. 子类选择器<br />
                        9. 兄弟选择器<br />
                    </div>
                </div>

                <p className="item-title"><span className="textShadow">二、单个选择器权重</span></p>
                <div className="article-desc">
                    <div className="quote">
                        1. 第一优先级：!important会覆盖页面内任何位置的元素样式<br />
                        2. 内联样式，如style="color: green"，权值为1000<br />
                        3. ID选择器，如#app，权值为0100<br />
                        4. 类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为0010<br />
                        5. 标签、伪元素选择器，如div::first-line，权值为0001<br />
                        6. 通配符、子类选择器、兄弟选择器，如*, >, +，权值为0000<br />
                        7. 继承的样式没有权值<br />
                    </div>

                    <div className="quote">
                        !important > 内联样式 > ID > 类、伪类、属性 > 标签、伪元素 > 通配符、子类、兄弟选择器
                    </div>
                </div>
            </div>
        )
    }
}