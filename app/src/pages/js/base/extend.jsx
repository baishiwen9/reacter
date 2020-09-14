import React, { Component } from 'react';
import Code from './../../comp/Code';


export default class ObjExtend extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">对象继承方法</span></p>
                <div className="quote">
                    对象的实例化方法主要有：<br />
                        <span className="text-placeholder"></span>原型继承<br />
                        <span className="text-placeholder"></span>构造函数继承<br />
                        <span className="text-placeholder"></span>组合式继承（原型继承 + 构造函数继承）<br />
                        <span className="text-placeholder"></span>寄生式组合继承<br />
                        参考文章： https://juejin.im/post/5e8b261ae51d4546c0382ab4
                </div>

                <p className="item-title">一、原型继承</p>
                <Code code={`
// 父类
function Person() {
    this.name = ['xixi'];
}
Person.prototype.getName = function() {
    return this.name;
}
// 子类
function Child() {}
// 子类通过原型继承父类
Child.prototype = new Person();
Child.prototype.constructor = Child;
// 实例化子类1
var child1 = new Child();
child1.name; // ['xixi'];
child1.getName(); //['xixi'];

// 实例化子类2
var child2 = new Child();
child2.name; // ['xixi'];
child2.getName(); //['xixi'];
//修改属性
child1.name[0] = 'xiaoming';
// 会影响其他子类的属性
child2.name; // ['xiaoming'];
`} />           
                <div className="quote">
                    <span className="mark">原型继承缺点：</span><br />
                    <span className="text-placeholder"></span>1. 某个实例修改父类中的引用类型的属性后会影响到其他的所有的子类<br />
                    <span className="text-placeholder"></span>2. 无法向父类传参
                </div>

                <p className="item-title">二、构造函数继承</p>
                <Code code={`
function Parent(name) {
    this.name = name;
}
Parent.prototype.age = 18;
Parent.prototype.getName = function() {
    return this.name;
}
// 子类
function Child(name) {
    //使用父类的构造函数实现继承
    Parent.call(this, name);
}

var child1 = new Child('xixi');
child1.name; //xixi
child1.age; //undefined
child1.getName(); // 报错

`} />
                <div className="quote">
                    <span className="mark">构造函数继承的缺点：</span><br />
                    1. 子类无法继承父类原型链上的属性和方法
                </div>

                <p className="item-title">三、组合式继承</p>
                <Code code={`
function Parent(name) {
    this.name = name;
}
Parent.prototype.age = 18;
Parent.prototype.getName = function() {
    return this.name;
}

//子类
function Child(name) {
    //使用父类的构造函数继承
    Parent.call(this, name);
}
// 使用父类的原型继承
Child.prototype = new Parent();

var child1 = new Child('xixi');
child1.name; //xixi
child1.age; //18
child1.getName(); //xixi
`} />
                <div className="quote">
                    <span className="mark">组合式继承的缺点：</span><br />
                    1. 每次创建子类实例的时候都执行了两次构造函数（new Parent() 和 Parent.call()）,这并不影响父类的继承，但是子类创建实例时，原型中会保存两份一样的属性和方法，这不是很优雅
                </div>

                <p className="item-title">四、寄生式组合继承</p>
                <Code code={`
function Parent(name) {
    this.name = name;
}
Parent.prototype.getName = function() {
    return this.name;
}
function Child(name) {
    Parent.call(this, name);
}

//但这种方式存在一个问题，由于子类原型和父类原型指向同一个对象，
//我们对子类原型的操作会影响到父类原型，例如给Child.prototype增加一个getName()方法，
//那么会导致Parent.prototype也增加或被覆盖一个getName()方法，为了解决这个问题，
//我们给Parent.prototype做一个浅拷贝

// Child.prototype = Parent.prototype;

//做浅拷贝
Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child;

var child = new Child('xiaoming');

child.name; //'xiaoming'
child.getName(); //'xiaoming'`} />
            </div>
        )
    }
}