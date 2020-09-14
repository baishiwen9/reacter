import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyJsonp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现JSONP</span></p>
                <div className="quote">
                    创建script标签<br />
                    设置script标签的src属性，以问号传递参数，设置好回调函数callback名称<br />
                    插入到html文本中<br />
                    调用回调函数，res参数就是获取的数据
                </div>
                <Code code={`
let script = document.createElement('script');
script.src = 'http://www.xxx.com/useinfo?callback=callback';
document.body.appendChild(script);
function callback(res) {
    console.log(res);
}
`} />
               
            </div>
        )
    }
}