import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyNew extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现new</span></p>
                <div className="quote">
                    new的定义：new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。
                </div>
                javascript高级程序设计中对new命令符操作过程的解释:
                <div className="quote">
                    1. 创建一个新对象；var obj = {}; <br />
                    2. 将构造函数的作用域赋值给新对象（因此this就指向了这个新对象）； obj.__proto__ = Fn.prototype;<br />
                    3. 执行构造函数中的代码（为这个新对象添加属性）；Fn.call(obj, '其他参数');<br />
                    4. 返回该新对象。return obj; || return {};
                </div>
                通过new命令后，实例与构造函数的关系：<a target="_blank" href="https://juejin.im/post/6844904079747989517">参考文档</a>
                <div className="quote">
                    1. new操作符实例化了一个对象；<br />
                    2. 这个对象可以访问构造函数的属性；<br />
                    3. 这个对象可以访问构造函数原型上的属性； <br />
                    4. 对象的__proto__属性指向了构造函数的原型；
                </div>
                    <Code code={`
/*
* 实现思路
*	1. 创建新对象并继承原型
*	2. 执行构造函数并绑定this
*	3. 返回新对象
*/

function myNew() {
	//获取构造函数
	const Func = Array.from(arguments).shift();
	//创建一个新对象，并继承原型
	const obj = Object.create(Func.prototype);
	//执行构造函数，并将this指向新建的对象
	const result = Func.apply(obj, Array.from(arguments).slice(1));
	//构造函数的执行结果如果为对象就直接返回该对象
	if (result instanceof Object) {
		return result;
	}
	//否则返回空对象
	return {};
}

function myNew1() {
    let obj = {};
    let Fn = [].shift.apply(arguments);
    obj.__proto__ = Fn.prototype;
    let res = Fn.apply(obj, [].slice.apply(arguments));
    return typeof res === 'object' ? res : obj;
}
`} />

                <div className="quote">
                    步骤1：创建一个Func的实例对象（实例.__proto__ = 类.prototype）<br />
                    步骤2：把Func 当做普通函数执行，并改变this指向<br />
                    步骤3：分析函数的返回值
                </div>
                <Code code={`
function myNew(Func, ...args) {
    let obj = {};
    obj.__proto__ = Func.prototype;
    let res = Func.call(obj, ...args);// 把Func当做普通函数执行，并改变this指向
    if (typeof res === 'object' || typeof res === 'function') {
        return res;
    }
    return obj;

}`} />
            </div>
        )
    }
}