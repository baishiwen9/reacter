import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyLet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现instanceof</span></p>
                <div className="quote">
					1. 取得实例对象的原型链；<br />
					2. 取得构造函数的原型；<br />
					3. 判断实例对象的原型链是否指向构造函数的原型；<br />
					4. 如果不是，取得实例对象的原型链的原型链，继续循环判断，只到实例对象的原型链指向null；
				</div>
				<Code code={`
// obj1 是不是 obj2的实例
function myInstanceof(obj1, obj2) {
	let left = obj1.__proto__;
	let right = obj2.prototype;
	while(true) {
		if (left === null) {
			return false;
		}
		if (left !== right) {
			left = left.__proto__;
		} else {
			return true;
		}
	}
}

function myInstanceof(obj1, obj2) {
	let left = obj1.__proto__;
	let right = obj2.prototype;
	if (left === null) {
		return false
	}
	if (left === right ) {
		return true;
	} else {
		// left = left.__proto__;
		myInstanceof(left, obj2);
	}
}
// 优化版
// Object.getPrototypeOf ( )：用来获取某个实例对象的原型
function myInstanceof(instanObj, classFn) {
	let prototype = classFn.prototype;
	let proto = instanObj.__proto;
	while(true) {
		if (proto === null) {
			return false;
		}
		if (proto === prototype) {
			return true;
		}
		proto = proto.__proto__;
	}
}
`} />
            </div>
        )
    }
}