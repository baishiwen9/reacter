import React, { Component } from 'react';
import Code from './../../comp/Code';

export default class Base extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">react基础</span></p>
                <p className="item-title">1. 虚拟DOM</p>
                <div className="quote">
                    1. 虚拟DOM: Virtual DOM 可以理解为一个简单的JS对象，并且最少包含标签名( tag)、属性(attrs)和子元素对象( children)三个属性。<br /><br />
                    2. 虚拟DOM的优势：<br />
                        a. 具备跨平台的优势-由于 Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node 等。<br />
                        b. 提升渲染性能-Virtual DOM的优势不在于单次的操作，而是在大量、频繁的数据更新下，能够对视图进行合理、高效的更新。<br />
                        c. 是一个js对象，存储在内存中。
                </div>

                <p className="item-title">2. 虚拟DOM为什么会提高性能</p>
                <div className="quote">
                虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。<br/><br />
                用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。
                </div>

                <p className="item-title">3. react diff原理</p>
                <div className="quote">
                    a. 把树形结构按照层级分解，只比较同级元素。<br />
                    b. 给列表结构的每个单元添加唯一的 key 属性，方便比较。<br />
                    c. React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）。<br />
                    d. 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制。<br />
                    e. 选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。
                </div>
                <p className="item-title">4. JSX</p>
                <div className="quote">
                    1. jsx的本质是什么？它和js之间到底是什么关系？<br /><br />
                    jsx是js的一种语法扩展，它和模板语法很接近，但是他充分具备js的能力。<br />
                    jsx会被编译为React.createElement()，React.createElement()将返回一个叫做“React Element”的js对象。<br />
                    jsx等价于一次React.createElement()调用。<br />
                    jsx语法糖允许前端开发者使用熟悉的类html标签语法来创建虚拟DOM，可降低学习成本，提升开发效率和体验。<br /><br />
                    jsx到真实dom的流程：<br /><br />
                    编写jsx ==》 jsx代码 ==》Babel ==》 编译 ==》 React.createElement调用 ==》 ReactElement调用 ==》虚拟DOM ==》ReactDOM.render() ==》真实DOM<br /><br />
                    目前jsx代码大多数是由@babel/preset-react转译而成。<br />
                    babel: <a target="_blank" href="https://www.babeljs.cn/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiBQhPAPgCgopgAHWRFdbfAI1edIRADNkfgB6auUqceSLmQHgIJIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.3&externalPlugins=">在线编译jsx</a>
                </div>
            </div>
        )
    }
}