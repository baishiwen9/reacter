import React, { Component } from 'react';
import Code from './../../comp/Code';
// import './../../comp/common/style.css';




export default class BlockScope extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">块级作用域解析</span>
                </p>


                <p className="item-title">
                    <span className="textShadow">javaScript中的块作用域</span>
                </p>
                <div className="quote">
                    具有块作用域的代码块、属性有：<br />
                    1. with<br />
                    2. try/catch语句<br />
                    3. let<br />
                    4. const
                </div>

                <p className="item-title">
                    <span className="textShadow">一、with</span>
                </p>
                <div className="quote">
                    用with从对象中创建出来的作用域仅仅在with声明中有效：<br />
                    <Code code={`
with(window.location) {
    console.log(href);
    console.log(host);
    console.log(origin);
}
console.log(href); //报错`} />
                    在with作用域的外部是访问不到with内部的变量
                </div>

                <p className="item-title">
                    <span className="textShadow">二、try/catch</span>
                </p>
                <div className="quote">
                    在try/catch语句中的catch分句会创建一个块作用域，其中声明的变量只能在catch内部有效。
                    <br /><br />
                    <Code code={`
try {
    undefined(); //执行一个非法操作来强制制造一个异常
} catch (err) {
    console.log(err);
}
console.log(err); //报错`} />
                </div>
                <p className="item-title">
                    <span className="textShadow">三、let</span>
                </p>
                <div className="quote">
                    let关键字可以将变量绑定到所在的任意作用域中。换句话说就是，let为其声明的变量隐式的劫持了所在的快作用域。
                    用let将变量加在一个已经存在的块作用域上的行为是隐式的。
                    <br /><br />
                    使用let进行的声明不会在块级作用域中进行提升。声明的代码被运行之前，声明并不“存在”。
                </div>

                <p className="item-title">
                    <span className="textShadow">四、const</span>
                </p>
                <div className="quote">
                    在es6中除了let外，还引入了const，同样可以用来创建块作用域变量，但是用const声明的变量的值是一个常量。
                    声明之后任何试图修改值的操作都会引起错误。
                </div>
            </div>
        )
    }
}