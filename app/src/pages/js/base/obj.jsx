import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class ObjShili extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">对象实例化过程及方法</span></p>
                <div className="article-desc">
                    对象的实例化方法主要有：<br />
                        <span className="text-placeholder"></span>工厂模式<br />
                        <span className="text-placeholder"></span>构造函数模式<br />
                        <span className="text-placeholder"></span>原型链模式<br />
                        <span className="text-placeholder"></span>构造函数模式和原型链模式结合--混合模式<br />

                </div>
                <p className="item-title"><span className="textShadow">一、工厂模式</span></p>
                <div className="article-desc">
                    <Code code={`
function obj1(name,age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    obj.sayName = function() {
        return obj.name;
    }
    return obj;
}
var person1 = obj1('xixi', 18);
`} />
                </div>

                <p className="item-title"><span className="textShadow">二、构造函数模式</span></p>
                <div className="article-desc">
                    <Code code={`
function obj2(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        return name;
    }
}
var person2 = new obj2('xixi', 18);
`} />
                </div>

                <p className="item-title"><span className="textShadow">三、原型链模式</span></p>
                <div className="article-desc">
                    <Code code={`
function obj3() {}

obj3.prototype.name = 'xixi';
obj3.prototype.age = 18;
obj3.prototype.sayName = function() {
    return this.name;
}

var person3 = new obj3();
`} />
                </div>

                <p className="item-title"><span className="textShadow">四、混合模式</span></p>
                <div className="article-desc">
                    <Code code={`
function obj4(name, age) {
    this.name = name;
    this.age = age;
}

obj4.prototype.sayName = function() {
    return this.name;
}

var person4 = new obj4('xixi', 18);`} />
                </div>
                
            </div>
        )
    }
}