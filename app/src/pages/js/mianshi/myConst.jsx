import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyLet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现let</span></p>
                <div className="article-desc">
                    <Code code={`
/**
 * 用es5实现const的功能
 * @param {*} prop 属性名
 * @param {*} value 属性值
 * 不能够完全实现和const一致的功能，只能通过以下的方式模拟const的功能
 * 将自定义const实现成一个方法，然后将该属性挂在window对象下，
 * 通过Object.defineProperty方法对属性进行拦截处理，从而达到效果
 */
var _const = function(prop, value) {
    window[prop] = value;
    Object.defineProperty(window, prop, {
        // 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
        configurable: false,
        // 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
        enumerable: false,
        get: function() {
            return value;
        },
        set: function() {
            throw new TypeError('Assignment to constant variable.');
        },
    });
}

_const('a', 10);
console.log(a); // 10
a = 10; // Uncaught TypeError: Assignment to constant variable.


/**
 * 用es6中的Proxy来对对象进行拦截处理
 */
var _const = new Proxy({}, {
    get: function(target, prop) {
        return target[prop];
    },
    set: function(target, prop, value) {
        if (!target[prop]) {
            target[prop] = value;
        } else {
            throw new TypeError('Assignment to constant variable.');
        }
    }
});

_const.age = 18; 
_const.age = 18; // Uncaught TypeError: Assignment to constant variable.
_const.age = 1; // Uncaught TypeError: Assignment to constant variable.
console.log(_const.age);  // 18
`} />
                </div>
            </div>
        )
    }
}