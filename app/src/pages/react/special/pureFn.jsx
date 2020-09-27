import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Special extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">纯函数</span>
                </p>
                <p className="item-title">一、纯函数定义及构成原则</p>
                
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

                <p className="item-title">二、纯函数的好处</p>
                <div className="quote">
                    1. 使用纯函数的主要好处是方便测试，可以直接测试，给定入参，输出值；如果传入相同的参数，它们将始终产生相同的结果;<br />
                    2. 纯函数使得代码的维护和重构会更加容易（可以放心地重构一个纯函数，不必担心没注意到的副作用搞乱了整个应用而导致终调试地狱）；<br />
                    3. 正确的使用纯函数可以产生高质量的代码，也是一种更加干净的编码方式；<br />
                    4. 可移植性、可复用性高；<br />
                </div>

                <p className="item-title">三、纯函数在react中的使用</p>
            </div>
        )
    }
}