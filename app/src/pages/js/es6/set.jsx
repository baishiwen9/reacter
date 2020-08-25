import React, { Component } from 'react';
import Code from './../../comp/Code';




export default class MySet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">Set</span>
                </p>

                <p className="item-title"><span className="textShadow">一、Set是什么</span></p>
                <div className="article-desc">
                    <span className="mark">Set的概念及特性：</span><br />
                    Set是一种新的数据结构。类似于数组，但是每个项目是唯一的不可重复。<br />
                    Set是一个构造函数，用来生成Set数据结构。<br />
                    Set可以接受一个数组作为参数，用来初始化。<br />
                    向Set中加入值的时候不会发生类型转换，1和"1"是两个不同的值。<br />
                    Set内部判断两个值是否相等是用===来比较的。<br />
                    特例：Set认为NaN等于NaN，因此在Set中只能加入一个NaN。<br />
                    在Set中两个“空对象”是不相等的。<br />
                    Array.from()方法可以将Set结构转为数组。<br />

                    <Code code={`
const set = new Set([1,2,3]);
[...set]; // [1,2,3]
set.size; // 3

set.add(NaN);
set.add(NaN);
set.size; // 4
set.add({});
set.add({});
set.size; // 6
Array.from(set);  // [1,2,3, NaN, {}, {}]
`} />
                </div>

                <p className="item-title"><span className="textShadow">二、Set实例的属性及方法</span></p>
                <div className="article-desc">
                    <span className="mark">Set结构的实例属性：</span><br /><br />
                    --- Set.prototype.constructor: 构造函数，默认是Set函数<br /><br />
                    --- Set.prototype.size: 返回Set实例的成员的个数<br /><br />
                    --- Set.prototype.size: 返回Set实例的成员的个数<br /><br />

                    <span className="mark">Set结构的实例方法---操作方法</span><br /><br />
                    --- Set.prototype.add(value): 添加一个值，返回Set结构本身<br /><br />
                    --- Set.prototype.delete(value): 删除某个值，返回一个布尔值，表示删除是否成功<br /><br />
                    --- Set.prototype.has(value): 返回一个布尔值，表示该值是否为Set的成员<br /><br />
                    --- Set.prototype.clear(): 清除所有成员，没有返回值<br /><br />

                    <Code code={`
var set = new Set();
set.add(1);
set.size; // 1
set.delete(1);
set.size; // 0
set.add(1);
set.has(1); // true
set.clear();`} />

                    <span className="mark">Set结构的实例方法---遍历方法</span><br /><br />
                    --- Set.prototype.keys(): 返回键名的遍历器，返回一个键名组成的遍历器，含有next方法<br /><br />
                    --- Set.prototype.values(): 返回键值的遍历器，返回一个键值名组成的遍历器，含有next方法<br /><br />
                    --- Set.prototype.entries(): 返回键值对的遍历器，返回一个键值对组成的遍历器，含有next方法<br /><br />
                    --- Set.prototype.forEach(): 使用回调函数遍历每个成员(和数组的forEach方法类似), forEach方法还可以有第二个参数，表示绑定处理函数内部的this对象。<br /><br />
                    <span className="mark">Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。</span><br />
                    由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。<br />
                    <Code code={`
var set = new Set([1,2,3,4,5]);
var keys = set.keys();
keys.next(); // {value: 1, done: false}
......
for (let key of keys()) {
    console.log(key); // 1,2,3,4,5
}

var values = set.values();
values.next(); // {value: 1, done: false}
......
for (let value of values) {
    console.log(value); // 1,2,3,4,5
}

for(let item of set.entries()) {
    console.log(item); // [1,1] [2,2] [3,3] [4,4] [5,5]
}

// Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值.
// 回调函数的含义依次为： 键值、键名、集合本身
set.forEach((value, key, _set) {
    console.log(value, key);
});
// 1 1
// 2 2
// 3 3
// 4 4
// 5 5
`} />
                    <span className="mark">Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。<br/>
                    这意味着，可以省略values方法，直接用for...of循环遍历 Set。</span><br/>
                    <div className="code-desc">Set.prototype[Symbol.iterator] === Set.prototype.values</div>
                </div>

                <p className="item-title"><span className="textShadow">三、Set应用</span></p>
                <div className="article-desc">
                    1. 数组去重: <br />
                    <Code code={`
var set = new Set([1,2,3,2,1]);
var arr = [...set]; // 1,2,3`} />
                    2. 数组的map和filter可以间接使用Set结构: <br />
                    <Code code={`
var set = new Set([1,2,3].map(item => item * 2))
var set = new Set([1,2,3].filter(item => item > 1))`} />
                    3. 实现并集: <br/>
                    <Code code={`
var set1 = new Set([1,2,3]);
var set2 = new Set([4,5,6]);
var union = new Set([...set1, ...set2]);
// 包含1，2，3，4，5，6的set结构 set { 1, 2, 3, 4, 5, 6 }`} />
                    4. 实现交集：<br />
                    <Code code={`
var set1 = new Set([1,2,3,4]);
var set2 = new Set([2,3,5]);
var intersect = new Set([...set1].filter(item => set2.has(item)))
// intersect为包含2，3的set结构 set {2, 3}`} />
                    5. 实现差集：<br />
                    <Code code={`
var set1 = new Set([1,2,3]);
var set2 = new Set([4, 3, 2]);
//set1相对于set2的差集：
var diff = new Set([...set1].filter(item => !set2.has(item));
// set { 1 }`} />
                </div>
            </div>
        )
    }
}