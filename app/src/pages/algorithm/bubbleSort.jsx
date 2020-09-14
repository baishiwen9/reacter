// https://juejin.im/post/5c82176b6fb9a049e064221b

import React, { Component } from 'react';
import Code from '../comp/Code';
import bubblesortIcon from '../../img/bubblesort';

export default class BubbleSort extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">冒泡排序bubblesort</span></p>
                <p className="item-title">1. 思路</p>
                <div className="quote">
                    参考：<a href="https://www.juejin.im/post/6844903496932655112" target="_blank">冒泡排序</a><br />
                    第一次循环，开始比较当前元素与下一个元素的大小，如果比下一个元素小或者相等，则不需要交换两个元素的值；若比下一个元素大的话，则交换两个元素的值。然后，遍历整个数组，第一次遍历完之后，相同操作遍历第二遍。
                </div>
                <img src={bubblesortIcon} alt='' />

                <p className="item-title">2. 代码实现</p>
                <Code code={`
function bubbleSort(arr) {
    var isSwap = false;
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                isSwap = true;
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if (!isSwap) {
            return; //如果arr已经是一个排好序的数组，所以就不必进行循环
        }
    }
}`} />
                <p className="item-title">3. 性能</p>
                <div className="quote">
                    时间复杂度：平均时间复杂度是O(n^2),在最佳状态时，时间复杂度会缩小到O(n);<br />
                    空间复杂度：由于辅助空间为常数，所以空间复杂度是O(1);
                </div>
            </div>
        )
    }
}