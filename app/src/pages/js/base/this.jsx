import React, { Component } from 'react';
import Code from './../../comp/Code';
import './../../comp/common/style.css';




export default class ThisComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">javaScript中this解读</span>
                </p>

                <p className="item-title">
                    <span className="textShadow">为什么使用this</span>
                </p>

                <div className="article-desc">
                    this提供了一种更加优雅的方式来隐式“传递”一个对象的引用，因此可以将API设计的更加简洁并且易于复用。
                </div>

                <p className="item-title">
                    <span className="textShadow">this绑定</span>
                </p>

                <div className="article-desc">
                    <span className="mark">this是在运行时候进行绑定的，并不是在编写时绑定的，它的上下文取决于函数调用时的各种条件。</span>this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
                    <br /><br />
                    当一个函数被调用时，会创建一个活动记录（有时候会称为执行上下文）。<br />
                    这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式，传入的参数等信息，this就是这个记录中的一个属性，会在函数执行的过程中用到。
                </div>

                <div>
                    <p className="item-title">
                        <span className="textShadow">调用位置</span>
                    </p>

                    <div className="article-desc">
                        <span className="mark">调用位置就是函数在代码中被调用的位置（不是申明的位置）</span>
                        <br /><br />
                        寻找调用位置就是寻找“函数被调用的位置”，最重要的就是分析调用栈，我们关心的调用位置就是在当前正在执行的函数的前一个调用中。
                    </div>
                </div>
                <Code code={`
function a() {
    //当前的调用栈是： a
    //当前调用位置是全局作用域
    console.log('---a---', this); //所以此时this为window
    b(); // b的调用位置
}

function b() {
    //当前的调用栈是：a --> b
    //当前的调用位置是在a中
    console.log('---b---', this); //所以此时this为window
    c(); // c的调用位置
}

function c() {
    //当前的调用栈是：a --> b --> c
    //当前的调用位置是在b中
    console.log('---c---', this); //所以此时this为window
}

a(); //a的调用位置
                `} />


                <div>
                    <p className="item-title">
                        <span className="textShadow">this的绑定规则</span>
                    </p>

                    <p className="item-title">
                        <span className="textShadow"><span className="mark">1. 默认绑定</span></span>
                    </p>

                    <div className="article-desc">
                        最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。
                    </div>
                </div>
                <Code code={`
var text = 'hello world';
function a() {
    console.log('---a---', this, this.text);
    //this为window
    //this.text: 'hello world'
}

a();
//在上面的代码中函数调用时应用了this的默认绑定，因此this会指向全局对象
                `} />
                <div className="article-desc">
                    分析上述代码：<br />
                    函数a的调用位置：a是直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法使用其他的规则。
                </div>

                <div className="article-desc">
                    <span className="mark">如果使用了严格模式，则不能将全局对象用于默认绑定，因此this会绑定到undefined。</span><br/>
                    虽然this的绑定规则完全取决于调用位置，但是只有a()运行在非严格模式下，默认绑定才能绑定到全局对象上。
                </div>
                <Code code={`
var text = 'hello';
function a() {
    'use strict';
    console.log('---a---', this, this.text);
    //此时，this为undefined
    //使用严格模式会影响this的绑定
}
a(); //报错`} />
               <div className="article-desc">
                    <span className="mark">如果在严格模式下调用a方法，则不会影响this的默认绑定：</span><br/>
                </div> 
                <Code code={`
var text = 'hello';
function a() {
    console.log('---a---', this, this.text);
    //this为window
    //this.text为hello，在严格模式下运行不会影响this的绑定
}
(function(){
    "use strict";
    a(); 
})()`}/>

                    <p className="item-title">
                        <span className="textShadow"><span className="mark">2. 隐式绑定</span></span>
                    </p>
                    <div className="article-desc">
                        调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。
                    </div>
                    <Code code={`
var text = 'hello';
function a() {
    console.log('---a---', this, this.text);
}
var obj = {
    text: 'world',
    a: a,
};
obj.a(); //此时this指向obj，this.text为world
`} />
                <div className="article-desc">
                    上述代码中，a的调用位置会使用obj上下文来引用函数，因此可以说函数被调用的时候obj对象“拥有”或者“包含”函数的引用。
                    <br /><br />
                    函数a在被调用的时候，前面确实加上了对obj的引用。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象上。
                    <br /><br />
                    <span className="mark">
                        对象属性引用链中只有上一层或者说最后一层在调用位置中起作用。
                    </span>
                </div>
                <Code code={`
var text = 'hello';
function a() {
    console.log('---a---', this, this.text);
}

var obj1 = {
    text: 'world',
    b: {
        text: '你好',
        a: a
    }
};

obj1.b.a();
//this为obj1.b
//this.text为'你好'
//多层级的对象嵌套时只有当前的上面的一层起作用`} />

                <div className="article-desc">
                    <span className="mark">隐式绑定存在的问题：隐式丢失</span>
                    <br /><br />
                    在某些情况下，隐式绑定会出现丢失的情况，也就是说它会应用默认绑定，从而把this绑定到全局对象或者undefined上（取决于是否为严格模式）。
                </div>
                <Code code={`
var text = 'hello';

function a() {
    console.log('---a---', this, this.text);
}

var obj = {
    text: 'world',
    a: a,
}

var b = obj.a;

b();
//this为window
//this.text为hello`} /> 
                <div className="article-desc">
                    虽然b是obj.a的一个引用，实际上，b引用的是a函数本身，因此此时的b()其实是一个不带任何修饰的函数调用，因此使用了默认绑定规则。                    
                </div>
                <div className="article-desc">
                    另外一种情况就是在传入回调函数的时候：
                    <Code code={`
var text = 'hello';
function a() {
    console.log('---a---', this, this.text);
}

function doFn(fn) {
    fn(); //调用位置
}

var obj = {
    text: 'world',
    a: a,
};

doFn(obj.a);
//this 为window
//this.text为world`} />
                这是因为在doFn(obj.a)调用的时候obj.a其实就是一种隐式赋值，和上述例子一样。
                </div>


                <p className="item-title">
                    <span className="textShadow"><span className="mark">3. 显式绑定</span></span>
                </p>

                <div className="article-desc">
                    通过使用call和apply来实现显式绑定。
                    <Code code={`
var text = 'hello';

function a() {
    console.log('---a---', this, this.text);
}

var obj = {
    text: 'world',
    a: a,
}

var b = obj.a;

b.call(obj);
//this为obj
//this.text为world `} />
                </div>
                
                <p className="item-title">
                    <span className="textShadow"><span className="mark">4. new绑定</span></span>
                </p>

                <div className="article-desc">
                    在js中，构造函数只是一些使用new操作符被调用的函数。<br /><br />

                    <span className="mark">使用new时执行的操作：</span><br />
                    1. 创建一个全新的对象；<br />
                    2. 这个新对象会被执行[[Prototype]]连接；<br />
                    3. 这个新对象会绑定到函数调用的this；<br />
                    4. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。

                </div>
                <Code code={`
function a(text) {
    this.text = text;
}
var bar = new a('hello');

console.log(bar.text);
//hello`} />
            <div className="article-desc">在使用new来调用a方法时，我们会构建一个新对象并把它绑定到a调用的this上。</div>
            <div className="line" />
            <p className="item-title">
                <span className="textShadow">规则的优先级</span>
            </p>
            <div className="article-desc">
                依次是new，显式绑定，隐式绑定，默认绑定
            </div>

            <p className="item-title">
                <span className="textShadow">判断this</span>
            </p>
            <div className="article-desc">
                1. 函数是否在new中调用，如果是的话this绑定的是新创建的对象；<br />
                2. 函数是否通过call、apply显式绑定，如果是的话this绑定的是指定的对象；<br />
                3. 函数是否在某个上下文对象中调用（隐式绑定），如果是this绑定的是那个上下文对象；<br />
                4. 如果以上3条都不符合的时候，使用默认绑定。如果在严格模式下就绑定到undefined上，否则绑定到全局对象。
            </div>


            <p className="item-title">
                <span className="textShadow">绑定this的例外情况</span>
            </p>
            <div className="article-desc">
                1. 被忽略的this：
                <Code code={`
function foo() {
    console.log(this.a);
}
var a = 2;
foo.call(null); // 2
foo.call(undefined); //2`} />
                如果把null，undefined作为this的绑定对象传入call，apply或者bind，这些值会在调用的时候忽略，实际应用是默认绑定规则。
                <br />
                <br />
                2. 间接引用<br />
                在间接引用时也会使用默认绑定规则， 间接引用最容易在赋值时发生：
                <Code code={`
function foo() {
    console.log(this.a);
}
var a = 2;
var o = {a: 3, foo: foo};
var p = {a: 4};

o.foo(); // 3, 隐式绑定
(p.foo = o.foo)(); // 2
p.foo(); // 4`} />
                p.foo = o.foo的返回值是目标函数的引用，因此调用位置是foo()而不是p.foo或者o.foo, 所以使用的是默认绑定。<br />
                调用p.foo()时使用的是隐式绑定。
            </div>

            <p className="item-title">
                <span className="textShadow">箭头函数的this</span>
            </p>

            <div className="article-desc">
                箭头函数并不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定this，具体来说，箭头函数会继承外层函数调用的this绑定。
                <Code code={`
var a = 1;
var b = 2;

var c = function() {
	console.log('test-1:',this.a);
	console.log('test-2:', a);
	console.log('test-3:', this.b);
	console.log('test-4:', b);
	console.log('test-this-1:', this);

	var a = 11;
	var b = 22;

	return () => {
		console.log('test-5:', this.a);
		console.log('test-6:', a);
		console.log('test-7:', this.b);
		console.log('test-8:', b);
		console.log('test-this-2:', this);
	}
}

var d = c();
d();
`} />
                <br />上述代码执行的时候没有对c方法进行this的绑定（显式， 隐式，new），所以会进行默认绑定，this为window。
                <br />输出的结果为：<br />
                <Code code={`
// test-1: 1 ==> this进行了默认绑定，this为window
// test-2: undefined ==> c函数里的a进行了变量提升，赋值为undefined
// test-3: 2 ==> this进行了默认绑定，this为window
// test-4: undefined  ==> c函数里的a进行了变量提升，赋值为undefined
// test-this-1: window ==> this进行了默认绑定，this为window

//箭头函数执行结果

// test-5: 1 ==> 箭头函数中的this获取的是当前词法作用域中的this，因此为window
// test-6: 11 ==> 根据作用域链向上查找，箭头函数中没有变量a, 向上一级查找
// test-7: 2 ==> 箭头函数中的this获取的是当前词法作用域中的this，因此为window
// test-8: 22 ==> 根据作用域链向上查找，箭头函数中没有变量b, 向上一级查找
// test-this-2: window ==> 箭头函数中的this获取的是当前词法作用域中的this，因此为window`} />

            <br /><br/>
            如果调用方式换为如下：
            <Code code={`
var d = c();
var obj = {
    a: 'aaa',
    b: 'bbb',
    d: d,
};
obj.d();`} />
            在调用c方法的时候也是进行了this的默认绑定，所以this为window，结果和上面的一致。
            箭头函数中的this也是为window，因此当前词法作用域的this为window。<br /><br/>
            如果调用方式换为如下：
            <Code code={`
var d = c();
var obj = {
    a: 'aaa',
    b: 'bbb',
    d: function() {
        d();
    },
};
obj.d();`} />输出结果和上面一致。
                <br /><br/>
                如果调用方式换为如下：
                <Code code={`
var obj = {
    a: 'aaa',
    b: 'bbb',
    c: c,
};
var d = obj.c();
d();
d.call(null);`} />
                此时在调用c方法的时候进行了this的隐式绑定，因此this指向obj。箭头函数的this也会指向obj。
                输出的结果为：
                <Code code={`
// test-1: aaa ==> this进行了隐式绑定，this为obj
// test-2: undefined ==> c函数里的a进行了变量提升，赋值为undefined
// test-3: bbb ==> this进行了隐式绑定，this为obj
// test-4: undefined  ==> c函数里的a进行了变量提升，赋值为undefined
// test-this-1: obj ==> this进行了默认绑定，this为obj

//箭头函数执行结果

// test-5: aaa ==> 箭头函数中的this获取的是当前词法作用域中的this，因此为obj
// test-6: 11 ==> 根据作用域链向上查找，箭头函数中没有变量a, 向上一级查找
// test-7: bbb ==> 箭头函数中的this获取的是当前词法作用域中的this，因此为obj
// test-8: 22 ==> 根据作用域链向上查找，箭头函数中没有变量b, 向上一级查找
// test-this-2: obj ==> 箭头函数中的this获取的是当前词法作用域中的this，因此为obj`} />
                <br />
                上述代码中使用d.call(null)来视图修改this，但是箭头函数是不绑定this的，所以此操作是无效的。
                <br /><br/>
                参考资料：《你不知道的JavaScript-上卷》
            </div>

                <div className="article-desc">
                    以下方法调用后，分别输出什么？<br />
                    <Code code={`
// 方法一
function Foo() { 
    console.log(1);
    return this;
}
// 方法二
Foo.getName = function() {
    console.log(2);
    return this;
}
// 方法三
var getName = function() {
    console.log(3);
}
// 方法四
function getName() {
    console.log(4);
}

Foo.getName(); // 2, this = Foo
getName(); // 3
Foo().getName(); // 1 this = window  3
getName(); // 3
new Foo.getName(); // 2 this为Foo.getName示例
Foo.getName().getName(); // 2 this = Foo 2
`} ></Code>
                    分别输出的结果是：<br />
                    Foo.getName() : 调用方法二，输入2， 此时this为Foo对象，因为this进行了显式绑定<br /><br />
                    getName(): 调用方法三，首先因为进行了函数申明提升（优先级高），后面方法三getName又进行了变量提升，导致getName被方法三覆盖， 所以输出3<br /><br />
                    Foo().getName()： 首先执行方法一Foo(), 输出1， 返回的this为window， 所以在调用window.getName(),即调用方法三，输出3<br /><br />
                    getName(): 调用方法三，首先因为进行了函数申明提升（优先级高），后面方法三getName又进行了变量提升，导致getName被方法三覆盖， 所以输出3<br /><br />
                    new Foo.getName(): 调用方法二，输出2， 返回的this为Foo.getName的实例<br /><br />
                    Foo.getName().getName()：首先调用方法二，输出2， 返回的this为Foo，所以再次调用Foo.getName()输出2<br /><br />
                </div>

            </div>
        )
    }
}