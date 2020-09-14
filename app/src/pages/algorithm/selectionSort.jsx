

import React, { Component } from 'react';
import Code from '../comp/Code';

export default class SelectionSort extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">选择排序selectionSort</span></p>
                <p className="item-title">1. 思路</p>
                <div className="quote">
                    参考：<a href="https://www.juejin.im/post/6844903496932655112" target="_blank">选择排序</a><br />
                    第一遍，从数组中选出最小的，与第一个元素进行交换；第二遍，从第二个元素开始，找出最小的，与第二个元素进行交换；依次循环，完成排序
                </div>

                <p className="item-title">2. 代码实现</p>
                <Code code={`
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`} />
                <p className="item-title">3. 性能</p>
                <div className="quote">
                    时间复杂度：平均时间复杂度是O(n^2)，这是一个不稳定的算法，因为每次交换之后，它都改变了后续数组的顺序。<br />
                    空间复杂度：辅助空间是常数，空间复杂度为O(1);
                </div>
            </div>
        )
    }
}