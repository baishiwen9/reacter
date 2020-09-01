//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class DiffArrowFn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">箭头函数和普通函数之间的区别</span>
                </p>
                <div className="quote">
                    1. 箭头函数是匿名函数，不能作为构造函数，不能使用new<br />
                    2. 箭头函数不绑定arguments，取而代之的用rest参数...解决<br />
                    3. 箭头函数不绑定this，会自动捕获其所在上下文的this值，作为自己的this值<br />
                    4. 箭头函数没有原型属性
                </div>
                    <Code code={`
let Aaa = () => {
    console.log('hello world');
}
new Aaa(); // 报错，Aaa is not a constructor

let b = () => {
    console.log(arguments);
}
// 报错，arguments is not defined

let a = () => {
    return 1;
}
console.log(a.prototype); // undefined
`} />
            </div>
        )
    }
}