import React, { Component } from 'react';
import Code from './../../comp/Code';

export default class Base extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">hooks</span></p>
                <p className="item-title">1. 简介</p>
                <div className="quote">
                    Hooks是React 16.8新增的特性，它可以在不编写class的情况下使用state以及其他的React特性。<br />
                    Hook是一个特殊的函数，它可以钩入React的特性。<br /><br />

                    为什么使用Hooks？<br />
                    1. 在组件之间复用状态逻辑很难：可能要用到props或者hoc，但是无论是渲染属性，还是高阶组件，都会在原先的组件包裹一层父容器。<br /><br />
                    2. 复杂组件变得难以理解：组件常常在componentDidMount 和 componentDidUpdate中获取数据，但是，同一个componentDidMout中可能包含很多其他的逻辑，如设置事件监听，而之后需要在componentWillUnmount中清除。相互关联的代码需要对照修改的代码被进行了拆分，而完全不相关的代码却放在同一个方法中组合在一起，很容易产生问题。<br /><br />
                    3. 难以理解的class：this指向问题，父组件给子组件传递函数时，必须绑定this。<br /><br />
                
                    Hook规则：<br /><br />
                    1. 只能在函数内部的最外层调用HooK，不要在循环，条件判断或者子函数中调用。<br /><br />
                    2. 只在React函数中调用Hook，在React的函数组件中调用，在自定义Hook中调用其他Hook。
                </div>
                <p className="item-title">2. useState</p>
                <div className="quote">
                    useState会返回一个数组，一个state，一个更新state的函数。<br />
                    useState的更新函数不会把新的state和旧的state进行合并，而是直接替换。<br />
                    <Code code={`
// 保存状态的数组
let hookStates = [];
let hookIndex = 0;
function useState(initialState) {
    hoosStates[hookIndex] = hoosStates[hookIndex] || initialState;
    // 利用闭包维护函数调用位置
    let currentIndex = hookIndex;
    function setState(newState) {
        if (typeof newState === 'function') {
            newState = newState(hookState[hookIndex]);
        }
        hookStates[currentIndex] = newState;
        // 触发更新视图
        render();
    }
    return [hookState[hookIndex++], setState];
}
`} />
                </div>
                <p className="item-title">3. useEffect</p>
                <div className="quote">
                    useEffect给函数组件增加了操作副作用的能力。和class组件中的componentDidMount, componentDidUpdate和componentWillUnmount具有相同的用途，只不过被合并成了一个API。<br /><br />
                    与componentDidMount或componentDidUpdate不同，使用useEffect调用的effect不会阻塞浏览器更新视图。<br />
                    <Code code={`
let hookStates = [];
let hookIndex = 0;
function useEffect(callback, dependencies) {
    if (hookStates[hookIndex]) {
        let lastDependencies = hookStates[hookIndex];
        let same = dependencies.every((item, index) => item === lastDependencies[index]);
        if (same) {
            hookIndex++;
        } else {
            hookStates[hookIndex++] = dependencies;
            callback();
        }
    } else {
        hookStates[hookIndex++] = dependencies;
        callback();
    }
}`} />
                </div>
                <div className="quote">参考资料： https://juejin.im/post/6872223515580481544</div>
            </div>
        )
    }
}