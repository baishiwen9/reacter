import React, { Component } from 'react';
import Code from '../comp/Code';

export default class mianshi extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">常见算法题</span></p>
                <p className="item-title">1. </p>
                <div className="quote">
                    合并有序数组元素，合并后保持有序，时间复杂度要求O(n) 
                    例如：给定的两个数组为[1, 5]和[2, 5, 6, 8]，函数返回[1, 2, 5, 5, 6, 8]。
                </div>
            </div>
        )
    }
}