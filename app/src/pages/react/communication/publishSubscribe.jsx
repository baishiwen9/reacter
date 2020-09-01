import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class CommunicationPublishSubscribe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">react组件间的通信---发布订阅模式</span>
                </p>
                <div>
                    在跨多个组件之间通信如果用props来传递的话，会显得很繁琐，很冗余，中间组件不需要props也被迫要进行传递。
                    <br /><br />
                    使用流程： 在子组件中进行订阅，在父组件中进行发布通知让子组件进行更新。

                    <Code code={`
/**
 * 实现一个简单的发布订阅
 */
export default class EventEmitter {
    constructor () {
        this.events = {};
    }

    on (type, cb) {
        if (!this.events[type]) {
            this.events[type] = [cb];
        } else {
            this.events[type].push(cb);
        }
    }

    off (type, cb) {
        if (!this.events[type]) {
            return;
        } else {
            this.events[type] = this.events[type].filter(fn => fn !== cb);
        }
    }

    emit (type, ...args) {
        if (this.events[type]) {
            this.events[type].map(fn => fn.apply(this, args));
        }
    }
}

//子组件
const eventEmitter = new EventEmitter();

class ChildComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 1,
        }
    }

    componentDidMount() {
        eventEmitter.on('update-state', () => {
            this.setState({
                data: this.state.data + 1
            })
        })
    }
    render() {
        return <div>{this.state.data}</div>
    }
}

//父组件
const eventEmitter = new EventEmitter();

class FatherComp extends Component {
    clickBtn = () => {
        eventEmitter.emit('update-state')
    }
    render() {
        return <button onClick={this.clickBtn}>click</button>
    }
}
`} />
                </div>
            </div>
        )
    }
}