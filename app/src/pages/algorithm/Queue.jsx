

import React, { Component } from 'react';
import Code from '../comp/Code';

export default class TableList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">队列</span></p>
                <p className="item-title">1. 定义</p>
                <div className="quote">
                    队列是一种列表，队列只能在队尾插入元素，在在队首删除元素。<br />
                    队列是一种先进先出（FIFO， first-in-first-out）的数据结构。<br />
                    向队列中插入新的元素叫做入队，删除操作叫做出队。入队操作在队尾插入新元素，出队操作删除队首元素。<br />
                </div>
                
                <p className="item-title">2. 实现栈</p>
                <div className="quote">
                    <Code code={`
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;         // 向队尾添加元素
    this.dequeue = dequeue;         // 删除队首元素
    this.front = front;             // 获取队首元素
    this.back = back;               // 获取队尾元素
    this.empty = empty;             // 判断队列是否为空
}

function enqueue(item) {
    this.dataStore.push(item);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    return false;
}

`} />
                </div>
                <p className="item-title">3. 使用</p>
                <div className="quote">

                </div>
            </div>
        )
    }
}