import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class AboutQueue extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现一个类：链式调用，执行事件，流程控制</span></p>
                <div className="article-desc">
                    问题描述： 设计一个类，实现以下能力：<br />
                    <Code code={`
new Queue('start the queue').task('a').restFirst(1).rest(3).task('b'); 

// 立即输出：start the queue
// 1秒后输出： do a
// 3秒后输入： do b`}/>
                
                <Code code={`
function Queue(str) {
    console.log(str);
    this.eventQueue = [];
    this.valueQueue = [];
}

Queue.prototype.getItem = function(type) {
    if (type === 'event') {
        return this.eventQueue.shift();
    } else {
        return this.valueQueue.shift();
    }
}

Queue.prototype.push = function(value, type) {
    if (type === 'event') {
        this.eventQueue.push(value);
    } else {
        this.valueQueue.push(value);
    }
}

Queue.prototype.task = function(value) {
    if (this.valueQueue.indexOf(value) == -1) {
        this.push(value, 'value');
    }
    const fn = this.getItem('event');
    fn && typeof fn === 'function' && fn(value);
    return this;
}

Queue.prototype.rest = function(time) {
    const fn = (value) => {
        setTimeout(() => {
            console.log('do ' + value);
        }, time * 1000);
    };
    this.push(fn, 'event');
    return this;
}

Queue.prototype.restFirst = function(time) {
    const fn = (value) => {
        setTimeout(() => {
            console.log('do ' + value);
        }, time * 1000);
    };
    this.push(fn, 'event');
    this.task(this.getItem('value'));
    return this;
}`} />
            </div>
            </div>
        )
    }
}