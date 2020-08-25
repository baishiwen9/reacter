import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyBind extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现bind</span></p>
                <div className="article-desc">
                    MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind<br />
                    <Code code={`
/**
 *bind() 方法创建一个新的函数，在 bind() 被调用时，
 *	这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
 *	语法: function.bind(thisArg, arg1, arg2, ...)
 *
 *
 */
 
 /**
 *要注意的点
 *	1. bind()除了this还接收其他参数，bind()返回的函数也接收参数，这两部分的参数都要传给返回的函数
 *	2. new会改变this指向：如果bind绑定后的函数被new了，那么this指向会发生改变，指向当前函数的实例
 *	3. 没有保留原函数在原型链上的属性和方法
 */
 
 Function.prototype.newBind = function(context, ...args) {
     var self = this
     // new优先级
     var _bind = function () {
         //判断this是不是self的实例，意思是this是不是new出来的
         self.apply(this instanceof self ? this : context, args.concat(Array.from(arguments)));
     }
     // 继承原型上的属性和方法
     _bind.prototype = Object.create(self.prototype);
     return _bind;
 }
 
 //测试
 const obj = { name: 'hello world' };
 function foo() {
     console.log(this.name);
 }
 
 foo.newBind(obj)();    //hello world`} />
                </div>
            </div>
        )
    }
}