import React, { Component } from 'react';
import Code from './../../comp/Code';

export default class MyClass extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">Class</span>
                </p>
                <div className="article-desc">
                    <h2>1. 对class类的简介和使用说明</h2>
                    <div className="quote">
                        class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。<br /><br />
                        类的数据类型是函数，类本身就指向构造函数。<br /><br />
                        使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。<br /><br />
                        构造函数的prototype属性，在 ES6 的“class类”上面继续存在。<br /><br />
                        类的所有方法都定义在类的prototype属性上面。类的实例上面调用方法，其实就是调用原型上的方法。<br /><br />
                        由于类的方法定义在prototype对象上，所以类的新方法可以添加在prototype对象上。Object.assign方法可以方便地一次向类添加多个方法。<br /><br />
                        类的内部所有定义的方法，都是不可枚举的（non-enumerable）。这一点与 ES5 的行为不一致。<br />
                    </div>
                    <Code code={`
class Hello {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sayHello() {
        console.log('--- hello ---');
    }
}
// 使用
const hello = new Hello(1, 2);
typeof Hello; // function

Hello === Hello.prototype.constructor; // true
Object.keys(Hello.prototype); // []
Object.assign(Hello.prototype, {
    add() {},
    toString() {},
});`} />    
                    <h2>2. constructor方法</h2>
                    <div className="quote">
                        constructor方法是类的默认方法，通过new命令生成实例的时候，自动调用contructor方法。一个类必须有contructor方法，如果没有显示定义，一个空的contructor方法会被添加。<br /><br />
                        constructor方法默认返回实例对象（this）。也可以返回另一个对象。<br /><br />
                        类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
                    </div>

                    <h2>3. 实例</h2>
                    <div className="quote">
                        使用new命令生成类的实例，如果忘记加上new，像函数那样调用Class，将会报错。<br /><br />
                        与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。<br /><br />
                        与 ES5 一样，类的所有实例共享一个原型对象。<br /><br />
                        可以通过实例的__proto__属性为“类”添加方法。(不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。)
                    </div>
                    <Code code={`
class Hello {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
}

const h1 = new Hello(1,2);
const h2 = new Hello(2,3);

h1.hasOwnProperty(x); // true
h1.hasOwnProperty(add); // false
h1.__proto__.hasOwnProperty('add');  // true
h1.__proto__ === h2.__proto__; // true

h1.__proto__.getValue = function() {return this.x * this.y;}
h1.getValue(); // 2
h2.getValue(); // 6`} />
                </div>

                <h2>4. 注意点</h2>
                <div className="quote">
                    1. 严格模式: 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。<br /><br />
                    2. 不存在提升: 类不存在变量提升（hoist），这一点与 ES5 完全不同。(这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。)<br /><br />
                </div>

                <h2>5. 静态方法</h2>
                <div className="quote">
                    类相当于实例的原型，所有在类中定义的方法，都会被实例继承。<br /><br />
                    如果在一个方法前加static关键字，表示该方法不会被实例继承，而是直接通过类来调用，这种方法称为静态方法。<br /><br />
                    如果静态方法包含this关键字，这个this指的是类，而不是实例。<br /><br />
                    静态方法可以和非静态方法重名。<br /><br />
                    父类的静态方法可以被子类继承。<br /><br />
                    静态方法也可以从super对象上调用。
                </div>
                <Code code={`
class Hello {
    static sayHello() {
        console.log('hello world');
        const value = this.getValue();
        console.log(value);
    }
    sayHello() {
        console.log('say hello');
    }

    getValue() {
        return 123;
    }
    static getValue() {
        return 456;
    }
    static getName() {
        return 'Hello';
    }
}

const h1 = new Hello();
h1.getName(); // 报错，实例没有getName方法
Hello.getName(); // 'Hello', 静态方法只能由类调用
Hello.sayHello(); // hello world , 456`} />
            </div>
        )
    }
}