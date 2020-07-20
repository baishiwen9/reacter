import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class CommunicationProps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">react组件间的通信---props</span>
                </p>
                <div className="article-desc">
                    在react项目开发中使用props进行父子组件间数据通信是十分常见的，也是最简单的通信方法。
                    <br /><br />
                    <Code code={`
class ChildComp extends Component {
    constructor(props) {

    }
    render() {
        const { text, clickCB } = this.props;
        return (
            <div onClick={() => clickCB()}>
                {text}
            </div>
        )
    }
}

class FatherComp extends Component {
    constructor(props) {

    }
    childClick() {
        console.log('child clicked!!!');
    }
    render() {
        return (
            <div>
                <ChildComp 
                    text="hello world"
                    clickCB={this.childClick}
                />
            </div>
        )
    }
}

`}  />
                <br /><br />
                在父组件中将要传递给子组件的数据以属性的形式传给子组件，子组件可以通过this.props来获取。
                </div>
            </div>
        )
    }
}