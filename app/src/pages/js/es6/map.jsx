import React, { Component } from 'react';
import Code from './../../comp/Code';




export default class MyMap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">Map</span>
                </p>

                <p className="item-title"><span className="textShadow">一、Map概念及特性</span></p>
                <div className="article-desc">
                    0. Map是一个构造函数，通过new命令生成Map的实例。<br /><br />
                    1. Map结构类似于Object，也是键值对的集合，但是键的范围不限于字符串，各种类型的值都可以做为键。<br /><br />
                    2. Map结构提供的是一种“值-值”的对应，也是一种更完善的hash结构实现。<br /><br />
                    3. Map结构的参数：任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。<br /><br />
                    4. 可以使用Set 对象和 Map 对象，当作Map构造函数的参数，生成了新的 Map 对象。<br /><br />
                    5. 如果对同一个键多次赋值，后面的值将覆盖前面的值。<br /><br />
                    6. 读取一个未知的键，则返回undefined。<br /><br />
                    7. 只有对同一个对象的引用，Map 结构才将其视为同一个键。<br /><br />
                    8. 同样的值的两个实例，在 Map 结构中被视为两个键。<br /><br />
                    9. Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。<br /><br />
                    10. Map解决了同名属性碰撞（clash）的问题。<br /><br />
                    11. Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。<br /><br />
                    12. undefined和null也是两个不同的键。<br /><br />
                    13. 虽然NaN不严格相等于自身，但 Map 将其视为同一个键。<br /><br />
                    <Code code={`
var map = new Map();
var obj = {a: 1};
// 使用对象作为键
map.set(obj, 'hello');
map.get(obj); // 'hello'

var map1 = new Map([
    [name: 'xixi'],
    [age: 18],
]);

map1.size; // 2
map1.get('name'); // 'xixi'
map1.get('age'); // 18
map1.has('name'); // true

// map结构接收数组为参数的时候，其实执行的是如下操作：
[[name: 'xixi'], [age: 18]].forEach([key, value]) => map1.set(key, value);

//具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以当作参数
var set = new Set([[a: 1], [b: 2]]);
var m = new Map(set);
m.get('a'); // 1
m.get('b'); // 2

//同一个键多次赋值，后面的会覆盖前面的
m.set('aa', 12);
m.set('aa', 34);
m.get('aa'); // 34

// 获取不存在的键，返回undefined
m.get('helloworld'); // undefined

// 对同一个对象的引用，Map视为同一个键，因此set的数组和get的数组键名是两个引用
m.set([1], 111);
m.get([1]); // undefined

var arr = [1, 2];
m.set(arr, 'arr');
m.get(arr); // 'arr'

// -0 === 0
m.set(-0, 'zero');
m.get(0); // 'zero'

m.set(undefined, 'i am undefined');
m.get(undefined); // 'i am undefined'

m.set(null, 'i am null');
m.get(null); // 'i am null'

m.set(NaN, 'i am NaN');
m.get(NaN); // 'i am NaN'
m.set(NaN, '2222');
m.get(NaN); // '2222'
`} />
                </div>

                <p className="item-title"><span className="textShadow">二、Map实例的属性和方法</span></p>
                <div className="article-desc">
                    1. size属性： size属性返回Map结构的成员总数<br /><br />
                    2. 操作方法：<br />
                    --- Map.prototype.set(key, value): 该方法设置键名为key，值为value，返回这个Map结构；如果键名存在则覆盖，否则新建。<br /><br />
                    --- Map.prototype.get(key): 该方法读取键名为key的值，如果找不到key，则返回undefined。<br /><br />
                    --- Map.prototype.has(key): has方法返回一个布尔值，表示key是否在当前的Map结构中。<br /><br />
                    --- Map.prototype.delete(key): delete方法为删除键key，删除成功返回true， 否则返回false。<br /><br />
                    --- Map.prototype.clear(): 清除所有成员，没有返回值。

                    <Code code={`
var m = new Map();
var obj = {a: 1};
m.set(obj, 111);
m.size; // 1
m.get(obj); // 111
m.has(obj); // true
m.delete(obj); // true
m.size; // 0 
m.set(obj, 111);
m.clear(); 
m.size; // 0                   
`} />
                    3. 遍历方法：<br />
                    --- Map.prototype.keys(): 返回键名的遍历器<br /><br />
                    --- Map.prototype.values(): 返回键值的遍历器<br /><br />
                    --- Map.prototype.entries(): 返回所有成员的遍历器<br /><br />
                    --- Map.prototype.forEach(): 遍历Map所有成员,forEach方法还可以接受第二个参数，用来绑定this。<br />

                    Map 的遍历顺序就是插入顺序。
                    <Code code={`
var map = new Map([
    [name: 'xixi'],
    [age: 18],
]);
for(let key of map.keys()) {
    console.log(key); // name age
}

for(let value of map.values()) {
    console.log(value); // 'xixi' 18
}

for(let [key, value] of map.entries()) {
    console.log(key, value); 
}
// 'name' 'xixi'
// 'age' 18

map.forEach((value, key, _map) => {
    console.log(value, key);
})
// 'name' 'xixi'
// 'age' 18`} />
                </div>

                <p className="item-title"><span className="textShadow">三、Map与其他数据结构互相转换</span></p>
                <div className="article-desc">
                    1. Map转数组：使用扩展运算符<br />
                    <Code code={`
var map = new Map([
    ['name', 'xixi'],
    ['age', 18]
]);
var arr = [...map]; //[['name', 'xixi'], ['age', 18]] `} />
                    2. 数组转Map：数组作为Map的入参<br />
                    <Code code={`
var arr = [['name', 'xixi'], ['age', 18]];
var map = new Map(arr);`} />
                    3. Map转为对象：如果所有 Map 的键都是字符串，它可以无损地转为对象<br />
                    <Code code={`
var map = new Map();
map.set('yes', true);
map.set('no', false);

function mapToObj(map) {
    const obj = Object.create(null);
    for(let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

var obj = mapToObj(map);
{yes: true, no: false}`} />
                    4. 对象转Map: 可以使用对象的Object.entries()方法<br />
                    <Code code={`
var obj = {a: 1, b: 2};
var map = new Map(Object.entries(obj));

// 或者自己实现一个转换函数
function obj2Map(obj) {
    const map = new Map();
    for(let key of Object.keys(obj)) {
        map.set(key, obj[key]);
    }
    return map;
}
`} />           
                    5. Map转JSON：分为两种情况：Map的键名都为字符串型 和 Map的键名有非字符串型<br/>
                    <Code code={`
//Map的键名都为字符串型: 先将Map转为Object，然后再转为JSON
let map = new Map().set('yes', true).set('no', false);;
function map2JSON(map) {
    return JSON.stringify(mapToObj(map));
} 
map2JSON(map); // '{"yes": true, "no": false}'

// Map的键名有非字符串型
let map = new Map().set(true, 7).set({foo: 3}, ['abc']);
function map2ArrayJSON(map) {
    return JSON.stringify([...map])
}
map2ArrayJSON(myMap); // '[[true, 7], [{"foo": 3}, ["abc"]]]'
`} />
                    6. JSON转Map：分为两种情况，所有键名都是字符串 和 整个JSON就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。<br/>
                    <Code code={`
//所有键名都是字符串
function jsonToStrMap(jsonStr) {
    return obj2Map(JSON.parse(jsonStr));
}
jsonToStrMap('{"yes": true, "no": false}')

// 第二种情况
function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}
jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
`} />
                </div>
            </div>
        )
    }
}