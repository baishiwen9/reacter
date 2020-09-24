//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class Prototype extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">原型 & 原型链</span>
                </p>
                <h3>相关面试题</h3>
                <Code code={`
function Foo() {
    Foo.a = function() {
        console.log(1);
    }
    this.a = function() {
        console.log(2);
    }
}

Foo.prototype.a = function () {
    console.log(3);
}

Foo.a = function() {
    console.log(4);
}    

// 1. 正常调用
Foo.a(); // 4
let obj = new Foo();
obj.a(); // 2
Foo.a(); // 1

// 2. Foo中返回{}
function Foo() {
    Foo.a = function() {
        console.log(1);
    }
    this.a = function() {
        console.log(2);
    }
    return {};
}

Foo.a(); // 4
let obj = new Foo(); // {}
obj.a(); // Error报错
Foo.a(); // 1


// 3. Foo中返回[]
function Foo() {
    Foo.a = function() {
        console.log(1);
    }
    this.a = function() {
        console.log(2);
    }
    return [];
}
Foo.a(); // 4
let obj = new Foo(); // []
obj.a(); // Error报错
Foo.a(); // 1

// 原型链关系
obj.__proto__ === Foo.prototype;
Foo.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
`} />
            </div>
        )
    }
}