import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyLet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现instanceof</span></p>
                <div className="article-desc">
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
}`} />
                </div>
            </div>
        )
    }
}