import React, { Component } from 'react';
import Code from './../../comp/Code';
import lifeCycleIcon from '../../../img/life-cycle.jpg';
import Test from './Test';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        console.log('%c我是---constructor---', 'background: red; color: white;');
    }
    static getDerivedStateFromProps(props, states) {
        console.log('%c我是---getDerivedStateFromProps---', 'background: red; color: white;', props, states);
        return null;
    }
    // componentWillMount() {
    //     console.log('%c我是---componentWillMount---', 'background: red; color: white;');
    // }
    componentDidMount() {
        console.log('%c我是---componentDidMount---', 'background: red; color: white;');
    }

    update() {
        const {value} = this.state;
        this.setState({
            value: value + 1
        });
    }

    // componentWillUpdate() {
    //     console.log('%c我是---componentWillUpdate---', 'background: red; color: white;');
    // }

    shouldComponentUpdate() {
        console.log('%c我是---shouldComponentUpdate---', 'background: red; color: white;'); 
        return true;
    }
    componentDidUpdate() {
        console.log('%c我是---componentDidUpdate---', 'background: red; color: white;'); 
    }
    render() {
        console.log('%c我是---render---', 'background: red; color: white;');
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">生命周期</span></p>
                <div className="quote">
                    生命周期主要分为三个过程：<br />
                        <span className="text-placeholder"></span>挂载<br />
                        <span className="text-placeholder"></span>更新<br />
                        <span className="text-placeholder"></span>卸载<br />
                </div>
                <button onClick={() => this.update()}>点击更新---{this.state.value}</button>
                <Test value={this.state.value} />
                <img className="big-img" src={lifeCycleIcon} alt="" />
                <p className="item-title"><span className="textShadow">一、挂载</span></p>
                <div className="quote">
                    当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：<br />
                    constructor()<br /><br />
                    static getDerivedStateFromProps()<br /><br />
                    render()<br /><br />
                    componentDidMount()
                </div>

                <p className="item-title"><span className="textShadow">二、更新</span></p>
                <div className="quote">
                    当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下<br />
                    static getDerivedStateFromProps()<br /><br />
                    shouldComponentUpdate()<br /><br />
                    render()<br /><br />
                    getSnapshotBeforeUpdate()<br /><br />
                    componentDidUpdate()
                </div>

                <p className="item-title"><span className="textShadow">三、卸载</span></p>
                <div className="quote">
                    当组件从 DOM 中移除时会调用如下方法：<br />
                    componentWillUnmount()
                </div>

                <p className="item-title"><span className="textShadow">四、错误处理</span></p>
                <div className="quote">
                    当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：<br />
                    static getDerivedStateFromError()<br /><br />
                    componentDidCatch()
                </div>

                <p className="item-title"><span className="textShadow">五、新生命周期函数解析</span></p>
                <div className="quote">
                    <span className="mark">1. static getDerivedStateFromProps(props, state)</span><br /><br />
                    getDerivedStateFromProps是为了替代componentWillReceiveProps而存在的，主要功能是将传入的props映射到state中。<br />
                    getDerivedStateFromProps和componentWillReceiveProps两个的参数是不用的，getDerivedStateFromProps是一个静态函数，这个函数不能通过this访问到class的属性。<br />
                    <Code code={`
static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.type !== preState.type) {
        return {
            type: nextProps.type //更新state
        }
    }
    return null; //不更新state
}`} />
                    <span className="mark">2. getSnapshotBeforeUpdate(prevProps, prevState)</span>
                </div>
                <p className="item-title">props变化后会执行哪些生命周期</p>
                <div className="quote">
                    componentWillRecevieProps<br />
                    shouldcomponentUpdate<br />
                    componentWillUpdate<br />
                    render<br />
                    componentDidUpdate
                </div>

                <p className="item-title">react执行多次&执行一次的生命周期</p>
                <div className="quote">
                    执行多次的：<br />
                    componentWillReceiveProps<br />
                    shouldComponentUpate<br />
                    componentWillUpdate<br />
                    render<br />
                    componentDidUpdate<br /><br />
                    执行一次的：<br />
                    constructor<br />
                    componentWillMount<br />
                    componentDidMount<br />
                    componentWillUnmount
                </div>

                <div className="quote">
                    为什么要用getDerivedStateFromProps代替componentWillReceiveProps？<br />
                    
                </div>
            </div>
        )
    }
}