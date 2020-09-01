//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class DataType extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">数据类型</span>
                </p>
                <div className="">
                    思考🤔<br />
                    1. typeof null为什么为'object'？<br />
                    这是因为，不同的对象在底层都表示为二进制，在Js中二进制的前三位都为0的话会被判断为object类型，而null的二进制表示全为0，自然前三位也是0，所以执行typeof时候会返回object。<br /><br />
                    2. 让一个对象不可扩展？<br />
                    使用Object.preventExtensions方法可以让目标对象不可扩展，但是是可以修改原有的属性值。<br />
                    <Code code={`
var obj = {a: 1};
Object.preventExtensions(obj);

obj.b = 2;
obj.b; // undefined， 在严格模式下将会抛出TypeError错误

obj.a = 2;
obj.a; // 2

delete obj.a; //true
obj.a; // undefined`} /><br />

                    3. 让一个对象不可扩展，不可删除属性，可修改属性值？<br />
                    使用对象的Object.seal方法会创建一个密封对象，这个方法实际上是调用了对象的Object.preventExtensions方法，然后对现有属性标记为configurable: false.<br />
                    <Code code={`
var obj = {a: 1};
Object.seal(obj);

obj.b = 2;
obj.b; // undefined

obj.a = 2;
obj.a; // 2

delete obj.a; //false
obj.a; // 2`} />

                    4. 让一个对象不可扩展，不可删除属性，不可修改属性？<br />
                    使用对象的Object.freeze方法会创建一个冻结对象，这个方法实际上是先调用对象的Object.seal方法进行密封，然后把所有属性的标记为wirtable:false,这样就会无法修改值。<br />
                    <Code code={`
// 实现一个对象的深度冻结方法
function deepFreeze(obj) {
    Object.freeze(obj);
    for(let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
              deepFreeze(obj[key]);  
        }
    }
}`} />
                </div>
            </div>
        )
    }
}