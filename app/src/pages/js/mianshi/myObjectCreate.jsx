import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyObjectCreate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现Object.create方法</span></p>
                <div className="article-desc">
                    <Code code={`
/*
* 实现思路
*	1. Object.create()会创建一个新对象并把它关联到我们指定的对象，
        这样我们就可以充分发挥[[prototype]]机制的威力。
*	2. Object.create(null)会创建一个拥有空[[prototype]]链接的对象，
        这个对象无法进行委托，由于这个对象没有原型链，所以instanceof操作符无法进行判断，因此总是返回false。
*/

function myCreate(target) {
    function F() {}
    F.prototype = target;
    return new F();
}
`} />
                </div>
                <p className="item-title"><span className="textShadow">Object.create</span></p>
                <div className="article-desc">
                    用法： Object.create(proto,[propertiesObject])<br/>
                    proto: 新创建对象的原型对象<br/>
                    propertiesObject:可选。要添加到新对象的可枚举（新添加的属性是其自身的属性，而不是其原型链上的属性）的属性。<br/>
                    Object.create(null)返回一个纯粹的空对象，没有Object原型链上的属性和方法。<br/>
                    <Code code={`
var obj = {a: 1};
var newObj = Object.create(obj, {
    b: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 2
    },
    c: {
        configurable: false,
        writable: false,
        enumerable: false,
        value: 3
    }
})`} />
                </div>
            </div>
        )
    }
}