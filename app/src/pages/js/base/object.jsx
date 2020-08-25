//浅拷贝 & 深拷贝

import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class ObjectNote extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">Object</span>
                </p>
                <p className="item-title"><span className="textShadow">一、属性描述符</span></p>
                <div className="article-desc">
                    在创建对象时，对象的属性会使用对象属性描述符的默认值，我们可以通过使用Object.defineProperty方法来添加一个新属性或者修改一个已有属性并对特性进行设置。<br />

                    <Code code={`
var obj = {};
Object.defineProperty(obj, 'a', {
    value: 2,           // 对象obj属性a的值
    writable: true,     // 属性a可写，默认true
    configurable: true, // 属性a可配置（可以使用delete），默认true
    enumerable: true,   // 属性a可以枚举，默认true
})`} />
                    可以通过Object.getOwnPropertyDescriptor方法来获取对象属性的属性描述符：<br />
                    <Code code={`
Object.getOwnPropertyDescriptor(obj, 'a');
得到：
{
    value: 2,
    writable: true,
    configurable: true,
    enumerable: true,
}
`} />
                    各个属性的解读：<br/>
                    1. writable: 决定是否可以修改属性的值，如果为false，修改属性值会静默失败，在严格模式下会报TypeError错。<br/><br/>
                    2. configurable: 只要属性是可以配置的，就可以使用defineProperty方法来修改属性描述符，不管是不是严格模式，如果去修改一个configurage为false的描述符，都会报错，把configurable修改成false是单向的，无法撤销。<br/><br/>
                    3. enumerable: 该属性控制的是属性是否会出现在对象的属性枚举中，比如说for...in循环。
                </div>
                

                <p className="item-title"><span className="textShadow">二、不变性</span></p>
                <div className="article-desc">
                    有时候我们希望对象或者对象的属性是不可变的。<br/>
                    1. 禁止扩展：Object.preventExtensions(), 该方法可以让目标对象不可扩展，但是是可以修改原有的属性值<br/>
                    <Code code={`
var obj = {a: 1};
Object.preventExtensions(obj);

obj.b = 2;
obj.b; // undefined， 在严格模式下将会抛出TypeError错误

obj.a = 2;
obj.a; // 2

delete obj.a; //true
obj.a; // undefined`} /><br />
                    2. 密封：Object.seal(), 该方法可以让对象不可扩展，不可删除属性，但可以修改属性值<br />
                    该方法实际上是调用了Object.preventExtensions方法，然后把所有的属性标记为configurable：false实现<br />
                    <Code code={`
var obj = {a: 1};
Object.seal(obj);

obj.b = 2;
obj.b; // undefined

obj.a = 2;
obj.a; // 2

delete obj.a; //false
obj.a; // 2`} />
                    3. 冻结：Object.freeze(), 该方法可以让对象不可扩展，不可删除属性值，不可修改属性值<br />
                    该方法实际上是调用了Object.seal，然后把所有的属性标记为writable：false实现<br />
                    <Code code={`
var obj = {a: 1};
Object.freeze(obj);

obj.b = 2;
obj.b; // undefined

obj.a = 2;
obj.a; // 1

delete obj.a; //false
`} />
                    4. 深度冻结对象：让该对象的属性值也为对象的也调用Object.freeze方法，从而达到深度冻结对象。<br />
                    <Code code={`
// 实现一个对象的深度冻结方法
function deepFreeze(obj) {
    Object.freeze(obj);
    for(let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
              deepFreeze(obj[key]);  
        }
    }
}`} />
                </div>

                <p className="item-title"><span className="textShadow">三、存在性</span></p>
                <div className="article-desc">
                    如何区分一个对象的属性值为undefined是本来存储的就是undefined还是因为在对象中不存在该属性所以返回的undefined？<br /><br />
                    1. in 操作符： in会检查属性是否在对象及其原型链中<br />
                    2. hasOwnProperty方法： 该方法会检查属性是否存在当前的对象中，不会检查原型链<br />
                    <Code code={`
var obj = {a: 1}

"a" in obj; // true
"b" in obj; // false

obj.hasOwnProperty('a'); //true
obj.hasOwnProperty('b'); //false`} /><br/>
                    <span className="mark">对象的枚举</span><br/>
                    1. for...in： 在for...in循环中，只能枚举到enumerable为true的属性,包括原型链<br/>
                    2. propertyIsEnumerable(): 该方法会检查改定的属性名是否直接存在于对象中（而不是原型链上）并且满足enumerable为true <br/>
                    3. getOwnPropertyNames(): 返回一个数组，包含所有属性，无论它们是否可以枚举，只查找的是对象本身的属性<br/>
                    4. Object.keys(): 返回一个数组，包含所有可以枚举的属性，只查找的是对象本身的属性<br/>
                    <Code code={`
var obj = {a: 1};
Object.defineProperty(obj, 'b', {
    value: 2,
    configurable: true,
    writable: true,
    enumerable: false,
});

for(let key in obj) {
    console.log(key); // a
}
obj.propertyIsEnumerable('a'); //true
obj.propertyIsEnumerable('b'); //false

Object.getOwnpropertyNames(obj); // ['a', 'b']
Object.keys(obj); // ['a']`} /><br />
                    <span className="mark">遍历</span><br/>
                    for...in可以用来遍历属性，但是如何遍历属性的值呢？<br />
                    在数组中可以通过for...of来循环遍历值: <br />
                    <Code code={`
var arr = [1,2,3,4];
for(let value of arr) {
    console.log(value); // 1,2,3,4
}`} />
                    for...of循环首先会向北访问的对象请求一个迭代器对象，然后通过调用迭代器对象的next()方法来遍历所有返回值。<br />
                    数组有内置的@@iterator，因此for...of可以直接应用在数组上<br />
                    <Code code={`
var arr = [1,2,3,4];
var it = arr[Symbol.iterator]();

it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}
it.next(); // {value: 4, done: false}
it.next(); // {done: true}
`} />
                    按照数组的原理，给对象实现遍历的功能：<br />
                    <Code code={`
var obj = {a: 2, b: 3};
Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function() {
        var o = this;
        var index = 0;
        var key = Object.keys(obj);
        return {
            next: function() {
                return {
                    value: o[key[index++]],
                    done: (index > keys.length),
                }
            }
        }
    }
})

//手动遍历
var it = obj[Symbol.iterator]();
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}
it.next(); // {value: undefined, done: true}

//用for...of遍历
for (let v of obj) {
    console.log(v); // 2  3
}`}/>
                </div>

                
            </div>
        )
    }
}