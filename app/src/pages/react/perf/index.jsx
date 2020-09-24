import React, { Component } from 'react';
import Code from './../../comp/Code';
import './index.scss';
import { Button } from 'antd';

function getList() {
    const res = [];
    for (let i = 0; i < 1000; i++) {
        res.push({
            value: i,
            id: i,
        });
    }
    return res;
}

export default class Perf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: getList(),
            list2: getList(),
            list3: [
                {value: 'item-1'},
                {value: 'item-2'},
                {value: 'item-3'},
            ]
        }
    }

    addItemToList() {
        const { list1, list2 } = this.state;
        list1.splice(499, 0, {
            value: '我是新加的',
            id: 'add'+ (+new Date()),
        });
        list2.splice(499, 0, {
            value: '我是新加的',
            id: 'add' + (+new Date()),
        });
        this.setState({
            list1, list2
        })
    }

    addItem() {
        const {list3} = this.state;
        list3.unshift({
            value: 'item-' + (+new Date()),
        });
        this.setState({list3});
    }

    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">react性能优化</span>
                </p>
                <div className="quote">
                    影响网页性能最大的因素是浏览器的重绘（reflow）和重排（repaint），virtual Dom就是尽可能的减少浏览器的重绘和重排。< br />
                    可以优化的点：<br />
                    1. 简化state<br />
                    2. 列表中使用key<br />
                    3. 纯函数(PureComponent, React.memo)<br />
                    4. 使用shouldComponentUpdate
                </div>
                <p className="item-title">
                    <span className="textShadow">一、简化state</span>
                </p>
                <div>
                    在react项目中初始化的时候要经历一个：getInitialState获取每个实例的初始化状态的过程，如果我们的state是一个很大的对象，那么在初始化的时候会比较耗时。
                    在调用setState合并对象的时候也会比较耗时，所以，我们可以将不需要参与页面渲染的一些值抽离state，达到简化state的作用。
                    <Code code={`
//含有不参与页面渲染的state
this.state ={
    isAPP: true,
    isWx: false,
    isQQ: false,
    ...
}`} />
                    代码中的这些state其实都是不会参与页面的渲染，所以这些状态我可以不用放在state中。
                </div>
                <p className="item-title">
                    <span className="textShadow">二、渲染列表时加key</span>
                </p>
                <div className="">
                    在react项目中，在渲染一些列表的时候一定要加key这个属性，这样可以让react在最小范围内进行更新。
                    参考资料： https://segmentfault.com/a/1190000017152570
                    <br /><br />
                    <span className="mark">1. 为什么要使用key<br /></span>
                    官方定义：key可以在DOM中的某些元素被增加或删除的时候帮助react识别哪些元素发生了变化。<br />
                    react diff算法中是把key当做唯一id然后对比组件的value来确认是否要更新。<br /><br />
                    <span className="mark">2. 用index做key存在的问题<br /></span>
                    如果是受控组件：使用index做key，表面看着没有问题，实际上性能会受到很大的影响。
                    <Code code={`
const list = [
    {label: '111', id: 1},
    {label: '222', id: 2},
    {label: '333', id: 3},
];
//render里渲染出的组件
<ul>
{list.map((item, index) => <li key={index}>{item.label}</li>)}
</ul>

// ==> 对应的html结构为
<ul>
    <li key="0">111</li>
    <li key="1">222</li>
    <li key="2">333</li>
</ul>

//当list的顺序发生变化时：
const list = [
    {label: '222', id: 2},
    {label: '111', id: 1},
    {label: '333', id: 3}, 
];

//渲染出的html结构：
<ul>
    <li key="0">222</li>
    <li key="1">111</li>
    <li key="2">333</li>
</ul>
`} />
                在上述的代码中，key为0，1，2的三个li标签都发生了变化，所以在diff的时候都会重新渲染。<br />
                如果对上述代码做优化，设置唯一的key：
                <Code code={`
//原始结构
<ul>
    <li key="111">111</li>
    <li key="222">222</li>
    <li key="333">333</li>
</ul>

//修改位置
<ul>
    <li key="222">222</li>
    <li key="111">111</li>
    <li key="333">333</li>
</ul>`} />
                此时，子组件的值和key都没有发生变化，只是位置变化了，所以只需要进行移动就行，不需要重新渲染，性能会大大的提升。
                <br /><br />
                {/* 实例演示：左右都为长度为1000的list，左边用index做key，右边用唯一值做key.
                <div className="demo-1">
                    <Button onClick={() => this.addItemToList()}>中间添加一行数据</Button>
                    <div className="left">
                        <ul>
                            {
                                this.state.list1.map((item, index) => <li key={index}>{item.value}</li>)
                            }
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            {
                                this.state.list2.map((item, index) => <li key={item.id}>{item.value}</li>)
                            }
                        </ul>
                    </div>
                </div> */}
                    <br /><br />
                    在非受控组件中：使用index作为key会出问题，参考如下代码演示：<br /><br />
                    <div className="demo">
                        <Button type="primary" onClick={() => this.addItem()}>添加一行</Button>
                            <div className="left">
                                <span className="mark">用index作为key：<br /></span>
                                {
                                    this.state.list3.map((item, index) => (
                                        <div key={index}>
                                            <span>{item.value}:</span>
                                            <input />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="right">
                                <span className="mark">用唯一值作为key：<br /></span>
                                {
                                    this.state.list3.map((item, index) => (
                                        <div key={item.value}>
                                            <span>{item.value}:</span>
                                            <input />
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}