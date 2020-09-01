//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class ThrottleAndDebounce extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">节流和防抖</span>
                </p>

                <h3>1. 节流</h3>
                <div className="quote">
                    基本思想： 某些代码不可以在没有间断的情况下连续重复执行。<br />
                    第一次调用函数创建一个定时器，在指定的时间间隔后执行代码；<br />
                    第二次调用该函数的时候，它会清除前一次的定时器并创建一个新的。<br /><br />

                    目的：按照设置的时间间隔执行。只要代码是周期性执行的，都应该使用节流。
                </div>

                <Code code={`
function throttle(fn, wait) {
    let timeid;
    if (timeid) {
        clearTimeout(timeid);
    }
    const self = this;
    timeid = setTimeout(function() {
        fn.apply(self, arguments);
    }, wait);
}

function throttle(fn, wait) {
    let timeid;
    return function() {
        if (timeid) {
            clearTimeout(timeid);
        }
        const self = this;
        timeid = setTimeout(function() {
            fn.apply(self, arguments);
        }, wait);
    }
}
`} />
                <h3>2. 防抖</h3>
                <div className="quote">
                    指连续触发事件但是在n秒中只执行一次函数
                </div>
                <Code code={`
function debounce(fn, wait) {
    let timeid;
    if (!timeid) {
        timeid = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    }
}

function debounce(fn, wait) {
    let timeid;
    return function() {
        if (!timeid) {
            timeid = setTimeout(() => {
                fn.apply(this, arguments);
            }, wait);
        }
    }
}`} />
            </div>
        )
    }
}