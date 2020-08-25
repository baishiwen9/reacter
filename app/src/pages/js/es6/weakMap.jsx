import React, { Component } from 'react';
import Code from './../../comp/Code';




export default class MyWeakMap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">WeakMap</span>
                </p>

                <p className="item-title"><span className="textShadow">一、WeakMap</span></p>
                <div className="article-desc">
                    <span className="mark">WeakMap的概念及特性：</span><br />
                    WeakMap 和 Map相似，也是用于生成键值对的集合。<br />
                    WeakMap与Map的区别是： <br /><br />

                    1. WeakMap只接受对象做键名（null除外），不接受其他类型的值作为键名；<br /><br />
                    2. WeakMap键名所指向的对象，不计入垃圾回收机制。<br /><br />
                    WeakMap它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。<br />
                    注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。<br />
                </div> 

                <p className="item-title"><span className="textShadow">二、WeakMap语法及用法</span></p>
                <div className="article-desc">
                    WeakMap没有遍历方法： keys(), values(), entries() 以及没有size属性。<br />
                    因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。<br />
                    WeakMap也没有clear方法。<br /><br />

                    WeakMap只支持的方法有： set, get, has, delete <br />

                </div>
            </div>
        )
    }
}