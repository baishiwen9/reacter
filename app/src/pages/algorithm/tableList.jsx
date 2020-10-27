

import React, { Component } from 'react';
import Code from '../comp/Code';

export default class TableList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className='article-title'><span className="textShadow">列表</span></p>
                <p className="item-title">1. 定义</p>
                <div className="quote">
                    列表是一组有序的数据，每个列表的数据项称为元素。<br />
                    不包含任何元素的列表称为空列表。<br />
                    常用的列表：待办事项列表，购物清单，十佳榜单等<br />
                </div>

                <p className="item-title">2. 属性&方法定义</p>
                <div className="quote">
                    listSize: 属性，列表的元素个数<br />
                    pos: 属性，列表的当前位置<br />
                    length: 属性，返回列表中的元素的个数<br />
                    clear： 方法，清空列表<br />
                    toString: 方法，返回列表字符串形式<br />
                    getElement: 方法，返回当前位置的元素<br />
                    insert: 方法，在现有的位置后插入元素<br />
                    append: 方法，在列表的末尾添加元素<br />
                    remove: 方法，在列表中删除元素<br />
                    front: 方法，将列表的当前位置移动到第一个位置<br />
                    end: 方法，将列表的当前位置移动到最后一个位置<br />
                    prev: 方法，将当前位置后移一位<br />
                    next: 方法，将当前位置前移一位<br />
                    hasNext: 方法，判断是否有下一位<br />
                    hasPrev: 方法，判断是否有上一位<br />
                    currPos: 方法，返回列表的当前位置<br />
                    moveTo: 方法，将当前位置移动到指定的位置<br />
                    contains: 方法，判断给定的元素是否在列表中
                </div>
                
                <p className="item-title">3. 实现列表类</p>
                <div className="quote">
                    <Code code={`
function TableList() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个数组用来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext;
    this.hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(item) {
    this.dataStore[this.listSize++] = item;
}

function find(item) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == item) {
            return i;
        }
    }
    return -1;
}

function remove(item) {
    var index = this.find(item);
    if (index > -1) {
        this.dataStore.splice(index, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(item, afterEle) {
    var index = this.find(afterEle);
    if (index > -1) {
        this.dataStore.splice(index + 1, 0, item);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    // this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    --this.pos;
}

function next() {
    if (this.pos < thios.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function hasNext() {
    return this.pos < this.listSize;
}

function hasPrev() {
    return this.pos > 0;
}

`} />
                </div>
                <p className="item-title">4. 使用</p>
                <div className="quote">
                    <Code code={`
var list = new TableList();
`} />
                </div>
            </div>
        )
    }
}