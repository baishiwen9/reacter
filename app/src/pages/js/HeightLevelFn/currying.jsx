//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class Currying extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">函数柯力化</span>
                </p>

                <h3>1. 概念</h3>
                <div className="quote">
                柯里化，Currying，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
                </div>
                <Code code={`
// 普通函数
function add(x, y) {
    return x + y;
}
add(1, 2); // 3

// 函数柯力化
function curryingAdd(x) {
    return function(y) {
        return x + y;
    }
}
curryingAdd(1)(2); // 3
`} />
                <h3>2. 函数柯力化的好处</h3>
                <div className="quote">
                    1. 参数的复用<br />
                    2. 延迟执行<br />
                    3. 实现bind
                </div>
                <Code code={`
// 参数的复用
var a = curringAdd(1);
a(2);
a(3);

// 延迟执行
curringAdd(1)(2);

// 实现bind
Function.prototype.myBind = function(content) {
    const self = this;
    const args = Array.prototype.slice.call(arguments, 1);
    return function() {
        return self.apply(content, args);
    }
}`} />
            </div>
        )
    }
}