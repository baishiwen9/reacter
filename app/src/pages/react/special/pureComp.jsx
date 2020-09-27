import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class PureComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">纯组件</span>
                </p>
                <p className="item-title">
                    一、纯函数定义及构成原则
                </p>
                
                <div className="quote">
                    概念： 简单来说，就是一个函数的返回结果只依赖于它的参数，并且在执行过程中没有副作用，我们就把这个函数叫做纯函数。
                    <br /><br />
                    纯函数的构成四大原则为：<br />
                    1. 给定相同的输入，它总是返回相同的输出；<br />
                    2. 过程没有副作用（side effect）；<br />
                    3. 没有额外的状态依赖。<br /><br />

                    <span className="mark">计算机科学设计原则之一：KISS（Keep It Simple, Stupid）<br /></span>
                    纯函数在简洁性和傻瓜化方面做到了极致。
                    <br /><br />

                    纯函数也是函数式编程的基础，它完全独立于外部状态，这样就就避免了因为共享外部状态而导致的bug。<br />
                    纯函数非常方便的进行方法级别的测试以及重构，可以让程序具有良好的扩展性及适应性。

                    <Code code={`
var arr = [1,2,3,4,5,6];
var a = arr.slice(0,2); //[1, 2]
var b = arr.slice(0,2); //[1, 2]

var c = arr.splice(0, 2); //[1, 2]
var d = arr.splice(0, 2); //[3, 4]

//数组的slice方法是纯函数，splice不是纯函数，splice会产生副作用。

function getCircleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

//getCircleArea: 计算圆的面积方法，函数不依赖外部任何变量，
只依赖半径的入参，在执行过程中也不会有任何副作用产生。`} />
                </div>
            </div>
        )
    }
}