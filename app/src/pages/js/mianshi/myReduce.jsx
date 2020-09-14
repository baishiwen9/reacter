import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyReduce extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现数组reduce方法</span></p>
                <div className="quote">
                初始值不传时的特殊处理：会默认使用数组中的第一个元素<br />
                函数的返回结果会作为下一次循环的prev<br />
                回调函数一共接受四个参数: 1. prev：上一次调用回调时返回的值; 2. 正在处理的元素; 3. 正在处理的元素的索引; 4. 正在遍历的集合对象
                </div>
                <Code code={`
Array.prototype.myReduce = function(fn, prev) {
    for (let i = 0; i < this.length; i++) {
        if (typeof prev === 'undefined') {
            prev = fn(this[i],this[i+1], i+1, this);
            ++i;
        } else {
            prev = fn(prev, this[i], i, this); 
        }
    }
    return prev;
}

`} />
               
            </div>
        )
    }
}