import React, { Component } from 'react';
import Code from './../../comp/Code';

export default class MyAsyncAwait extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">async/await</span>
                </p>
                <div className="article-desc">
                    <h2>1. async/await简介</h2>
                    <div className="quote">
                        async是Generator函数的语法糖。<br /><br />
                        async函数自带执行器，async函数的执行和普通函数一样，只要一行。<br /><br />
                        更好的语义：async和await，比起星号和yield，语义更清楚。async表示函数里有异步操作，await表示紧跟在后面的表达式要等待结果。<br /><br />
                        更广的适用性：async函数的await命令后面，可以是Promise对象和原始类型的值（数值，字符串，布尔值，这时候会自动转成立即resolved的Promise对象）。<br /><br />
                        返回值是Promise：async函数的返回值是promise对象，可以使用then方法进行下一步操作。<br /><br />
                        async函数完全可以看做是多个异步操作，包装成一个promise对象， await命令就是内部then命令的语法糖。
                    </div>

                    <h2>2. 基本用法</h2>
                    <div className="quote">
                        async函数返回一个Promise对象，可以使用then方法添加回调函数，当函数执行的时候，一旦遇到await就先返回，等到异步操作完成，在接着执行函数体后面的语句。<br /><br />
                    </div>
                    <Code code={`
function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}
  
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
  
asyncPrint('hello world', 5000);`} />

                    <h2>3. 语法</h2>
                    <div className="quote">
                        1. async函数内部return语句返回的值，会成为then方法回调函数的参数。<br /><br />
                        2. async函数内部抛出错误，会导致返回的promise对象变为reject装填，抛出的错误对象会被catch方法回调函数接收到。<br /><br />
                        3. Promise对象的状态变化，async函数返回的Promise对象，必须等到内部所有的await命令后面的Promise对象执行完，才会发生状态的改变，除非遇到return语句或者抛出错误，也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
                    </div>

                    <Code code={`
async function fn() {
    return 'hello world';
}
fn().then(res => {
    console.log(res); // 'hello world'
});

// 出错
async function fn() {
    throw new Error('error');
}
fn().then(
    res => {},
    err => { console.log(err) } // error
);`} />
                    <h2>4. await命令</h2>
                    <div className="quote">
                        1. 正常情况下，await命令后面是一个Promise对象，返回该对象的结果，如果不是promise对象，就直接返回对应的值。<br /><br />
                        2. 另外一种情况，await命令后面是一个thenable对象（即定义了then方法的对象），那么await会将其等同于Promise对象。<br /><br />
                        3. await命令后面的Promise对象如果变为reject状态，则reject的参数会被catch方法回调函数接受到。<br /><br />
                        4. 任何一个await语句后面的Promise对象变为reject状态，那么整个async函数都会中断执行。<br /><br />
                    </div>
                    <Code code={`
async function fn() {
    // return 123;
    // 等同于
    return await 123;
}
fn().then(res => {
    console.log(res); // 123
})

class Sleep {
    constructor(timeout) {
        this.timeout = timeout;
    }
    then(resolve, reject) {
        const ts = +new Date();
        setTimeout(() => {
            resolve(+new Date() - ts);
        }, this.timeout);
    }
}

async function fn() {
    const sleep = await new Sleep(1000);
    console.log(sleep);
}
fn();
//===============
async function fn() {
    await Promise.reject('出错了');
}

fn().then(res => console.log(res)).catch(err => console.log(err)); //出错了 `} />

                    <h2>5. 使用注意点</h2>
                    <div className="quote">
                        1. await命令后面的promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch中。<br /><br />
                        2. 多个await命令后面的异步操作，如果不存在继发的关系，最好让它们同时触发。<br /><br />
                        3. await命令只能用在async函数中，如果用在普通函数中会报错。<br /><br />
                        4. async函数可以保留运行堆栈。
                    </div>
                </div>
            </div>
        )
    }
}