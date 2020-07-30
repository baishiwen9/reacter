import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyApply extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现apply</span></p>
                <div className="article-desc">
                    <Code code={`
Function.prototype.newApply = function(thisArg, args) {
    // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    const fn = Symbol('fn');
    // 若没有传入this, 默认绑定window对象
    thisArg = thisArg || window;
    // this指向调用call的对象,即我们要改变this指向的函数
    thisArg[fn] = this;
    // 执行当前函数（此处说明一下：虽然apply()接收的是一个数组，但在调用原函数时，依然要展开参数数组。可以对照原生apply()，原函数接收到展开的参数数组）
    const result = thisArg[fn](...args);
    // 删除我们声明的fn属性
    delete thisArg[fn];
    // 返回函数执行结果              
    return result;            
}

//测试
const obj = {
	name: 'hello world'
};

function foo() {
	console.log(this.name);
}

foo.newApply(obj, [])     // hello world

`} />
                </div>
            </div>
        )
    }
}