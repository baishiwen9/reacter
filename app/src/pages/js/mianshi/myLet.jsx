import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyLet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现let</span></p>
                <div className="article-desc">
                    <Code code={`
//let写法，let具有块级作用域

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);  // Uncaught ReferenceError: i is not defined

//用es5中的var模拟实现let功能：使用自执行函数的函数作用域模拟块级作用域
(function() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
})();
console.log(i);  // Uncaught ReferenceError: i is not defined


//es5中的var没有块级作用域
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // 5`} />
                </div>
            </div>
        )
    }
}