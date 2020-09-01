import React, { Component } from 'react';
import Code from '../../../comp/Code';

export default class H5Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">h5新特性</span></p>
                <div className="quote">
                    参考文档： https://juejin.im/post/6844903878857588750<br />
                    https://juejin.im/post/6844903919710126087<br />
                </div>

                <p className="item-title">一、h5新增语义化标签</p>
                <div className="quote">
                    列举一些具有代表性和经常用的标签：<br /><br />
                    1. header: 标记定义一个页面或一个区域的头部<br />
                    2. nav: 标记定义导航链接<br />
                    3. section: 标记定义一个区域<br />
                    4. aside: 标记定义页面内容部分的侧边栏<br />
                    5. article: 标记定义一篇文章<br />
                    6. footer: 标记定义一个页面或一个区域的底部<br />
                </div>

                <p className="item-title">二、语义化的作用</p>
                <div className="quote">
                    1. 为了在没有css的情况下，页面也能呈现出很好地内容结构、代码结构；<br /><br />
                    2. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；<br /><br />
                    3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；<br /><br />
                    4. 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。<br />
                </div>

                <p className="item-title">三、html书写规范</p>
                <div className="quote">
                    1. 尽可能少的使用无语义的标签div和span；<br /><br />
                    2. 在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；<br /><br />
                    3. 不要使用纯样式标签，如：b、font、u等，改用css设置<br /><br />
                    4. 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；<br /><br />
                    5. 表单域要用fieldset标签包起来，并用legend标签说明表单的用途；<br /><br />
                    6. 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来.<br /><br />
                </div>

                <p className="item-title">四、input新增的type 和 属性</p>
                <div className="quote">
                    <span className="mark">新增的type如下：</span><br/><br/>

                    email<br />
                    url<br />
                    number<br />
                    range<br />
                    Date picker<br />
                    Date —— 选取日、月、年<br />
                    Month —— 选取月、年<br />
                    Week —— 选取周和年<br />
                    Time —— 选取时间（小时和分钟）<br />
                    Datetime —— 选取时间、日、月、年（UTC 时间）<br />
                    Datetime-local —— 选取时间、日、月、年（本地时间）<br /><br/>

                    <span className="mark">新增的属性如下：</span><br/><br/>
                    autocomplete： 自动完成，适用于form标签，以及以下类型的input标签：text, search, url, telephone, email, password, datepickers, range, color。<br/><br/>
                    autofocus：自动地获得焦点<br /><br />
                    multiple：可选择多个值，适用于input中type为email和file用法<br /><br />
                    placeholder：提示文字，适用于input中type为：text, search, url, telephone, email, password<br /><br />
                    required：规定不能为空，适用于以下类型的input标签：text, search, url, telephone, email, password, date pickers, number, checkbox, radio, file<br/>
                </div>
            </div>
        )
    }
}