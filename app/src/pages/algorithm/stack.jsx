

import React, { Component } from 'react';
import Code from '../comp/Code';

export default class TableList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">栈</span></p>
                <p className="item-title">1. 定义</p>
                <div className="quote">
                    数据只能在栈顶添加或者删除，所以这样的操作很快，而且很容易实现。<br />
                    栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。<br />
                    栈是一种后入先出的数据结构（LIFO，last-in-first-out）<br />
                </div>
                
                <p className="item-title">2. 实现栈</p>
                <div className="quote">
                    <Code code={`
function Stack() {
    this.dataStore = [];
    this.top = 0;         // 栈顶位置
    this.push = push;     // 入栈方法
    this.pop = pop;       // 出栈方法
    this.peek = peek;     // 返回栈顶元素，不删除
    this.clear = clear;   // 清除栈内所有元素
    this.length = length; // 记录栈内元素个数
}

function push(item) {
    this.dataStore[this.top++] = item;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}
function length() {
    return this.top;
}
function clear() {
    this.dataStore = [];
    this.top = 0;
}

`} />
                </div>
                <p className="item-title">3. 使用</p>
                <div className="quote">
                    1. 数制间的相互转换<br /><br />
                    利用栈将一个数字从一种数制转换成另一种数制。<br />
                    算法思路：<br />
                    a. 最高位为 n%b， 将此位压入栈<br />
                    b. 使用 n/b代替n<br />
                    c. 重复步骤a和b，直到n等于0，且没有余数<br />
                    d. 持续将栈内元素弹出，直到栈为空， 依次将这些元素排列，就得到了转换后的字符串形式<br />
                    <Code code={`
// 只针对基数为2-9的情况
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0) {
        var res = '';
        while(s.length() > 0) {
            res += s.pop();
        }
        return res;
    }
}
`} /><br />
                    2. 回文<br /><br />
                    <Code code={`
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var res = '';
    while(s.length() > 0) {
        res += s.pop();
    }
    if (word === res) {
        return true;
    } else {
        return false;
    }
}`} />
                </div>
            </div>
        )
    }
}