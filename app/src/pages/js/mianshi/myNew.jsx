import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyNew extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现new</span></p>
                <div className="article-desc">
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
`} />
                </div>
            </div>
        )
    }
}