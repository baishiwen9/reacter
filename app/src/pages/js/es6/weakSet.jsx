import React, { Component } from 'react';
import Code from './../../comp/Code';




export default class MyWeakSet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">WeakSet</span>
                </p>

                <p className="item-title"><span className="textShadow">一、WeakSet</span></p>
                <div className="article-desc">
                    <span className="mark">WeakSet的概念及特性：</span><br />
                    WeakSet 和 Set相似，也是不重合的值的集合。<br />
                    WeakSet与Set的区别是： <br /><br />
                    1. WeakSet的成员只能是对象，不能是其他类型的值。<br />
                    2. WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，如果说其他对象都不在引用该对象，那么垃圾回收机制会自动回收该对象所占的内存，不考虑该对象还存在WeakSet中。<br /><br />
                    WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。<br /><br />
                    3. WeakSet不可遍历： 由于WeakSet里的成员是弱引用，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。<br /><br />
                </div> 

                <p className="item-title"><span className="textShadow">二、WeakSet语法及使用</span></p>
                <div className="article-desc">
                    WeakSet是一个构造函数，通过使用new创建WeakSet数据结构。<br /><br />
                    作为构造函数，WeakSet接受一个数组或者类数组（数组的成员只能是对象）为参数，该数组的每一项会自动成为WeakSet的成员。<br />
                    <Code code={`
var ws = new WeakSet();
var ws1 = new WeakSet([{}]);`} />

                    <span className="mark">WeakSet实例方法：</span><br />
                    --- WeakSet.prototype.add(value): 向WeakSet实例中添加一个新成员<br /><br />
                    --- WeakSet.prototype.delete(value): 删除WeakSet实例中指定的一个成员<br /><br />
                    --- WeakSet.prototype.has(value): 返回一个布尔值，表示某个值是否在WeakSet实例中<br /><br />
                    <Code code={`
var ws = new WeakSet();
var obj = {};
ws.add(obj);
ws.has(obj); // true
ws.delete(obj);
ws.has(obj); // false`} />
                    <span className="mark">WeakSet 没有size属性，没有forEach方法，没有办法遍历它的成员。</span><br />
                    WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。<br />
                </div>
            </div>
        )
    }
}