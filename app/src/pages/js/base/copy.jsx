//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class CopyMode extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">浅拷贝 & 深拷贝</span>
                </p>
                <p className="item-title">
                    <span className="textShadow">一、浅拷贝</span>
                </p>
                <div className="quote">
                    实现浅拷贝的方法🤔<br />
                    1. 使用for...in循环<br />
                    2. 使用Object.assign<br />
                    3. 直接使用=赋值<br />
                </div>
                <div className="quote">
                    <span className="mark">1. 使用for...in循环</span><br />
                    <Code code={`
// 只复制第一层的浅拷贝
function copy(obj1) {
    var obj2 = Array.isArray(obj1) ? [] : {};
    for (let key in obj1) {
        obj2[key] = obj1[key];
    }
    return obj2;
}
var obj1 = {
    a: 1,
    b: {
        c: 2
    }
}
var obj2 = copy(obj1);
obj2.a = 3;
obj1.a; // 3

obj2.b.c = 4;
obj1.b.c; //4
`} /><br /><br />
                    <span className="mark">2. 使用Object.assign</span><br />
                    <Code code={`
const obj1 = {a: {b: 1},c: 2};
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
obj2.a.b; // 2

obj1.c = 888;
obj2.c; // 2
`} /><br /><br />
                    <span className="mark">3.直接使用=赋值</span><br />
                    <Code code={`
const obj1 = {a: {b: 1},c: 2};
const obj2 = obj1;

obj1.c = 333;
obj2.c; //333

obj1.a.b = 444;
obj2.a.b; //444
`} />
                </div>

                <p className="item-title">
                    <span className="textShadow">二、深拷贝</span>
                </p>
                <div className="quote">
                    实现深拷贝的方法🤔<br />
                    1. 使用循环+递归<br />
                    2. 使用JSON方法<br />
                    3. 使用Reflect法<br />
                    4. 数组使用slice和concat<br />
                </div>
                <div className="quote">
                    <span className="mark">1. 使用循环+递归</span><br />
                    <Code code={`
function deepCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (Object.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    deepCopy(obj[key]);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
    }
    return newObj;
}`} /><br /><br />
                    <span className="mark">2. 使用JSON方法</span><br />
                    使用JSON.stringify的缺点是：对象中的属性值为undefined和方法的属性会丢失。<br />
                    <Code code={`
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
var obj = {
    a: 1,
    b: null,
    c: undefined,
    d: function() {
        console.log(1111);
    }
}
var obj1 = deepCopy(obj);
obj1 = {
    a: 1,
    b: null
}
`} /><br /><br />
                </div>
            </div>
        )
    }
}