import React, { Component } from 'react';
import Code from './../../comp/Code';




export default class MySymbol extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">Symbol</span>
                </p>
                <p className="item-title">
                    <span className="textShadow">一、Symbol要解决的问题</span>
                </p>
                <div className="article-desc">
                    ES5 的对象属性名都是字符串，这容易造成属性名的冲突。Symbol就是这样一种机制，能保证每个属性的名字都是独一无二的，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。<br /><br />
                    <span className="mark">ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</span>
                </div>

                <p className="item-title">
                    <span className="textShadow">二、生成Symbol</span>
                </p>
                <div className="article-desc">
                    Symbol 值通过Symbol函数生成。<br />
                    <Code code={`
const s = Symbol();
typeof s; // 'symbol'`} /><br />
                    <span className="mark">
                    注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
                    </span><br /><br />
                    Symbol可以接受一个字符串类型的值作为入参，用来描述生成的Symbol实例，主要是为了在控制台或者转为字符串时好区分。<br />
                    <Code code={`
const s1 = Symbol('hello');
const s2 = Symbol('world');

console.log(s1); // Symbol('hello')
console.log(s2); // Symbol('world')

s1.toString(); //"Symbol('hello')"
s2.toString(); //"Symbol('world')"`} /><br />
                    如果Symbol的入参是一个对象，就会调用该对象的toString方法，将toString的返回值转为字符串作为Symbol的入参，然后生成一个Symbol值。<br />
                    <Code code={`
var obj = {
    toString() {
        return 'abc';
    }
}
const s1 = Symbol(obj);
console.log(s1); // Symbol('abc')`} /><br />

                    使用Symbol的一些注意事项：<br />
                    <span className="text-placeholder" />1. 两个没有入参的Symbol生成的实例不想等；<br />
                    <span className="text-placeholder" />2. 两个有相同入参的Symbol生成的实例不想等；<br />
                    <span className="text-placeholder" />3. Symbol生成的实例不能与其他类型进行运算，否则会报错；<br />
                    <span className="text-placeholder" />4. Symbol生成的实例可以显式的转成字符串，通过调用：toString；<br />
                    <span className="text-placeholder" />5. Symbol生成的实例可以转为布尔值。<br />
                    <Code code={`
const s1 = Symbol();
const s2 = Symbol();

s1 === s2; // false

const s3 = Symbol('aaa');
const s4 = Symbol('bbb');

s3 === s4 // false

s1 + 'hello' + s2; //报错
s1.toString(); // 'Symbol()'
Boolean(s1); //true`} />
                </div>

                <p className="item-title">
                    <span className="textShadow">三、Symbol.prototype.description</span>
                </p>
                <div className="article-desc">
                    在创建Symbol的时候可以添加一个描述，这个属性可以通过实例的description属性来获取：
                    <br />
                    <Code code={`
const s1 = Symbol('hello');
s1.description; // 'hello'`} />
                </div>

                <p className="item-title">
                    <span className="textShadow">四、作为属性名的Symbol</span>
                </p>
                <div className="article-desc">
                    由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。<br />
                    这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。<br /><br />
                    <span className="mark">注意，Symbol 值作为对象属性名时，不能用点运算符。</span><br />
                    原因是： 因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。<br />
                    <Code code={`
const s1 = Symbol('ss');
var obj = {
    [s1]: 'sss',
};
obj[s1]; // 'sss'`} />
                </div>

                <p className="item-title">
                    <span className="textShadow">五、属性名的遍历</span>
                </p>
                <div className="article-desc">
                    Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。<br />
                    但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。<br />
                    <Code code={`
const a = Symbol('a');
const b = Symbol('b');

var obj = {};
obj[a] = 'hello';
obj[b] = 'wrold';

const symbolKeys = Object.getOwnPropertySymbols(obj);
console.log(symbolKeys); // [Symbol('a'), Symbol('b')]`} /><br />
                    作用： 由于以 Symbol 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。<br /><br />
                </div>
                <p className="item-title">
                    <span className="textShadow">六、Symbol.for()，Symbol.keyFor()</span>
                </p>
                <div className="article-desc">
                    <span className="mark">1. Symbol.for()</span><br/><br/>
                    我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。<br /><br />
                    <Code code={`
let s1 = Symbol.for('aaa');
let s2 = Symbol.for('aaa');

s1 === s2; // true

let s3 = Symbol('aaa');
let s4 = Symbol('aaa');

s3 === s4; // false`} /><br/>
                    Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
                    <br/><br/>
                    <span className="mark">2. Symbol.keyFor()</span><br/><br/>
                    Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。<br/>
                    <Code code={`
let s1 = Symbol.for('aaa');
Symbol.keyFor(s1); // 'aaa'

let s2 = Symbol('bbb');
Symbol.keyFor(s2); // undefined`} /><br />
                    <span className="mark">注意，Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。</span>
                </div>


            </div>
        )
    }
}