//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class MyQuote extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">js弱引用和强引用</span>
                </p>
                <p className="item-title"><span className="textShadow">一、弱引用</span></p>
                <div className="article-desc">
                    参考文章： <a href="https://juejin.im/post/6854573215549751310" target="_blank">https://juejin.im/post/6854573215549751310</a><br/>
                    一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。<br />
                    在JS中，WeakMap 和 WeakSet 给我们提供了弱引用的能力。
                </div>

                <p className="item-title"><span className="textShadow">二、强引用</span></p>
                <div className="article-desc">
                    如果我们持有对一个对象的引用，那么这个对象就不会被垃圾回收。这里的引用，指的是强引用。<br />
                </div>
                
            </div>
        )
    }
}