// https://juejin.im/post/5c662e496fb9a049b82afb71


import React, { Component } from 'react';
import Code from '../comp/Code';

export default class QuickSort extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">快速排序quickSort</span></p>
                <p className="item-title">1. 思路</p>
                <div className="quote">
                    参考：<a href="https://www.juejin.im/post/6844903496932655112" target="_blank">快速排序</a><br />
                    首先，我们需要找到一个基数，然后将比基数小的值放在基数的左边，将比基数大的值放在基数的右边，之后进行递归那两组已经归类好的数组。
                </div>

                <p className="item-title">2. 代码实现</p>
                <Code code={`
function quickSort(arr) {
    var temp = arr[0];
    var left = [];
    var right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([temp], quickSort(right));
}`} />
                <p className="item-title">3. 性能</p>
                <div className="quote">
                    时间复杂度：平均时间复杂度O(nlogn)，只有在特殊情况下会是O(n^2)，不过这种情况非常少<br />
                    空间复杂度：辅助空间是logn，所以空间复杂度为O(logn)
                </div>
            </div>
        )
    }
}