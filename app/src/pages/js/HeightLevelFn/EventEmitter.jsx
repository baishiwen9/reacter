import React, { Component } from 'react';
import Code from './../../comp/Code';
// import './../../comp/common/style.css';




export default class EventEmitterFn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">自定义--发布订阅模式</span>
                </p>


                <p className="item-title">
                    <span className="textShadow">代码</span>
                </p>

                <Code code={`
/**
 * 实现一个简单版的发布订阅模式的emit
 */

class EventEmitter {
    constructor() {
        this.events = {};
    }
    //订阅事件
    //绑定事件，可以绑定多个同类型的事件，用数组保存cb，按照绑定的先后顺序依次执行
    on(type, cb) {
        if (!this.events[type]) {
            this.events[type] = [cb];
        } else {
            this.events[type].push(cb);
        }
    }
    //解除订阅
    //解绑事件
    off(type, cb) {
        if (!this.events[type]) {
            return;
        }
        this.events[type] = this.events[type].filter(item => {
            return item !== cb;
        });
    }

    //单次订阅
    //绑定单次事件
    one(type, cb) {
        function fn() {
            cb && cb();
            this.off(type, fn);
        }
        this.on(type, fn);
    }

    //发布
    //触发事件
    emit(type, ...params) {
        this.events[type] && this.events[type].map(fn => fn.apply(this, params));
    }
}

export default EventEmitter;
                `} />
            </div>
        )
    }
}