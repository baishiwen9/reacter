import React, { Component } from 'react';
import Code from '../../../comp/Code';

export default class Meta extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">meta标签简介</span></p>
                <div className="article-desc">
                    <h3>1. meta标签简述</h3>
                    <div className="quote">
                        meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。<br />
                        META标签分两大部分：HTTP标题信息(http-equiv)和页面描述信息(name)。
                    </div>

                    <h3>2. http-equiv</h3>
                    <div className="quote">
                        类似于HTTP的头部协议，它回应给浏览器一些有用的信息，以帮助正确和精确地显示网页内容。<br /><br />
                        ● 设置页面编码 charset: UTF-8是世界性通用编码，也完美的支持中文编码<br />
                        ● 设置页面刷新时间 refresh: 让网页多长时间自动刷新，或者多长时间后让网页自动链接到其他网页，单位：秒, 不添加URL就本地刷新<br />
                        ● 设置网页缓存时间 expires: 设置网页在缓存时间过期时间，一旦网页过期，就需要在服务器上重新加载。必须使用GMT的时间格式（格林尼治标准时间），或者直接设为0，数字表示多少时间后过期。<br />
                        ● 禁止页面缓存 pragma（cach模式）: 禁止浏览器从本地的缓存中调阅页面的内容。网页不保存在缓存中，每次访问都刷新页面，访问者无法脱机浏览。<br />
                        ● Set-Cookie (cookie设定): 浏览器访问某个页面时会将它存在缓存中，下次再次访问时就可从缓存中读取，以提高速度。当你希望访问者每次都刷新你广告的图标，或每次都刷新你的计数器，就要禁用缓存了。通常HTML文件没有必要禁用缓存，对于ASP等页面，就可以使用禁用缓存，因为每次看到的页面都是在服务器动态生成的，缓存就失去意义。如果网页过期，那么存盘的cookie将被删除。注意：必须使用GMT的时间格式。 <br />
                        ● Window-target (显示窗口的设定): 强制页面在当前窗口以独立页面显示。这个属性是用来防止别人在框架里调用你的页面。<br />
                        ● X-UA-Compatible: 这是个是IE8的专用标记,用来指定IE8浏览器去模拟某个特定版本的IE浏览器的渲染方式（比如人见人烦的IE6），以此来解决部分兼容问题
                    </div>
                    <Code code={`
// 设置charset：
<meta charset="UTF-8">

// 设置refresh
<meta http-equiv="refresh" content="3;url=https://www.baidu.com">

// 设置expires
<meta http-equiv=expires content=Thu,15 Apr  2020  20:00:00  GMT>

// 设置pragma
<meta http-equiv="pragma" content="no-cach">

// 设置set-cookie
<meta http-equiv="Set-Cookie" Content="cookievalue=xxx; expires=Wednesday,21-Oct-98 16:14:21 GMT; path= " />

// 设置window-target
// 可选值有： 
// _blank： 在新窗口中打开被链接的文档
// _self： 默认。在相同的框架中打开被链接的文档
// _top： 在整个窗口中打开被链接的文档
// _parent： 在父框架集中打开被链接文档
// framname： 在指定框架中打开被链接的文档
<meta http-equiv="widow-target" content="_top" />

// 设置X-UA-Compatible
< meta http-equiv = "X-UA-Compatible" content = "IE=EmulateIE7" />
`} />

                    <h3>3. name</h3>
                    <div className="quote">
                        name是描述网页的，对应于content（网页内容），以便于搜索引擎机器人查找、分类（目前几乎所有的搜索引擎都使用网上机器人自动查找meta值来给网页分类）。<br /><br />
                        name的value值（name=）指定所提供信息的类型。有些值是已经定义好的。例如description(说明)、keyword(关键字)、refresh(刷新)等。还可以指定其他任意值，如：creationdate(创建日期) 、document ID(文档编号)和level(等级)等。name的content指定实际内容。如：如果指定level(等级)为value(值)，则Content可能是beginner(初级)、intermediate(中级)、advanced(高级)。<br /><br />

                        ● Keywords (关键字): 为搜索引擎提供的关键字列表, 各关键词间用英文逗号“,”隔开。META的通常用处是指定搜索引擎用来提高搜索质量的关键词。当数个META元素提供文档语言从属信息时，搜索引擎会使用lang特性来过滤并通过用户的语言优先参照来显示搜索结果。<br />
                        ● Description (简介): Description用来告诉搜索引擎你的网站主要内容。<br />
                        ● Author (作者): 标注网页的作者或制作组, Content可以是：你或你的制作组的名字,或Email<br />
                        ● Copyright (版权): 标注版权<br />
                        ● viewport(移动端的窗口): viewport指的是设备的屏幕上用来显示网页的区域。viewport标记，用于指定用户是否可以缩放Web页面，并对相关的选项进行设定。width 和height 指令分别指定视区的逻辑宽度和高度。它们的值可以是以像素为单位的数字，也可以是一个特殊的标记符号。如device-width即表示，视区宽度应为设备的屏幕宽度。类似的，device-height即表示设备的屏幕高度。initial-scale用于设置Web页面的初始缩放比例。默认的初始缩放比例值因智能手机浏览器的不同而有所差异，通常情况下，设备会在浏览器中呈现出整个Web页面。设为1.0则显示未经缩放的Web页面。maximum-scale和minimum-scale用于设置用户对于Web页面缩放比例的限制。值的范围为0.25~10.0之间。 user-scalable指定用户是否可以缩放视区，即缩放Web页面的视图。值为yes时允许用户进行缩放，值为no时不允许缩放。
                        <br />
                        ● format-detection: 在iPhone 手机上默认值是（电话号码显示为拨号的超链接），可将telephone=no，则手机号码不被显示为拨号链接
                    </div>
                    <Code code={`
// 设置Keywords
<meta name=kyewords lang=en content=关键字,关键字,关键字>

// 摄者Description
meta name=description content=你网页的简述>

// 设置Author
<meta name=author content=xxx,123456789@qq.com>

// 设置Copyright
<meta name=copyright content=本页版权归个人所有。All Rights Reserved>

// 设置viewport
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">

// 设置format-detection
<meta name="format-detection" content="telephone=no" />
`} />
                </div>
            </div>
        )
    }
}