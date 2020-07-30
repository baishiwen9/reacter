import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyCall extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现call</span></p>
                <div className="article-desc">
                    <Code code={`
Function.prototype.newCall = function(context, ...args) {
	//防止原有的属性被覆盖,生成唯一的变量名
    const fn = Symbol('fn');
    context = context || window;
    //将this保存到要调用call的对象
    context[fn] = this;
    // 执行当前函数
    const result = context[fn](...args);
    //删除fn属性
    delete context[fn];
    return result;
}

//测试
const obj = {
	name: 'hello world'
}
function foo() {
	console.log(this.name);
}
foo.newCall(obj)     // hello world`} />
                </div>
            </div>
        )
    }
}