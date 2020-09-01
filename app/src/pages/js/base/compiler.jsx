//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class CompilerNote extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">编译原理</span>
                </p>
                <p className="item-title">一、分词/词法分析（Tokenizing/Lexing）</p>
                <div className="quote">
                    在词法分析阶段，会将由字符组成的字符串分解成有意义的代码块，这些代码块被称为词法单元（token）。<br />
                    var a = 2; 这段程序会被分解成为词法单元：var、a、=、2、;。
                </div>

                <p className="item-title">二、解析/语法分析（Parsing)</p>
                <div className="quote">
                    语法分析过程是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（AST）。<br />
                    var a = 2 生成的抽象语法树如下：(生成AST的网址：<a href="https://astexplorer.net/" target="_blank">https://astexplorer.net/</a>)<br />
                    <Code code={`
{
    "type": "Program",
    "start": 0,
    "end": 10,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 9,
            "id": {
              "type": "Identifier",
              "start": 4,
              "end": 5,
              "name": "a"
            },
            "init": {
              "type": "Literal",
              "start": 8,
              "end": 9,
              "value": 2,
              "raw": "2"
            }
          }
        ],
        "kind": "var"
      }
    ],
    "sourceType": "module"
  }`} />
                </div>

                <p className="item-title">三、代码生成</p>
                <div className="quote">
                    将AST转换为可执行的代码的过程被称为代码生成。<br />
                    js代码大部分情况下编译发生在代码执行前的几微秒钟。
                </div>

                <p className="item-title">四、过程</p>
                <div className="quote">
                    1. 引擎： 从头到尾负责整个js程序的编译及执行过程<br />
                    2. 编译器：负责语法分析及代码生成工作<br />
                    3. 作用域：负责收集并维护所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。<br /><br />

                    var a = 2; 编译器处理过程：<br />
                    第一步：遇到var a，编译器会询问当前作用域中是否已经有一个该名称的变量，如果是，编译器会忽略该声明，继续进行编译；否则它会在当前作用域的集合中声明一个新的变量，并命名为a；<br /><br />
                    第二步：接下来编译器会为引擎生成运行时的代码，这些代码被用来处理a = 2的赋值操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫做a的变量，如果有就使用这个变量，否则会继续查找。<br /><br />
                </div>
            </div>
        )
    }
}