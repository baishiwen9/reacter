

import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyPromise extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现promise</span></p>
                
				<div className="quote">
					参考文档： <br />
					https://juejin.im/post/5e3b9ae26fb9a07ca714a5cc<br />
					https://juejin.im/post/6856213486633304078<br />
					https://juejin.im/post/6850037281206566919<br />
					<a target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247484225&idx=1&sn=b1d26191a41b9a3961f6798d1218fd79&chksm=fe00b96bc977307d2eab27dbd25bf6d27194d7fcdd9d9515822639b0206ad6ca1f946a0de7a9&token=1408690735&lang=zh_CN#rd">promise面试题汇总</a>
					<br />
					<a target="_blank" href="https://promisesaplus.com/">Promise/A+ 规范</a><br /><br />
				</div>

				<h3>promise简介</h3>
				<div className="quote">
					1、Promise出现的原因以及为我们解决了什么问题<br />
					在传统的异步编程中，如果异步之间存在依赖关系，就需要通过层层嵌套回调的方式满足这种依赖，如果嵌套层数过多，可读性和可以维护性都会变得很差，产生所谓的“回调地狱”，而 Promise 将嵌套调用改为链式调用，增加了可阅读性和可维护性。也就是说，Promise 解决的是异步编码风格的问题。
				</div>
					
				<h3>实现promise的整体流程</h3>
				<div className="quote">
					1、定义整体结构<br />
					2、实现promise构造函数<br />
					3、实现then方法<br />
					4、实现catch方法<br />
					5、实现Promise.resolve<br />
					6、实现Promise.reject<br />
					7、实现Promise.all<br />
					8、实现Promise.race<br />
				</div>

				<h3>Promise 的基本特征</h3>
				<div className="quote">
					1. promise 有三个状态：pending，fulfilled，or rejected；「规范 Promise/A+ 2.1」<br />
					2. new promise时， 需要传递一个executor()执行器，执行器立即执行；<br />
					3. executor接受两个参数，分别是resolve和reject；<br />
					4. promise  的默认状态是 pending；<br />
					5. promise 有一个value保存成功状态的值，可以是undefined/thenable/promise；「规范 Promise/A+ 1.3」<br />
					6. promise 有一个reason保存失败状态的值；「规范 Promise/A+ 1.5」<br />
					7. promise 只能从pending到rejected, 或者从pending到fulfilled，状态一旦确认，就不会再改变；<br />
					8. promise 必须有一个then方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected；「规范 Promise/A+ 2.2」<br />
					9. 如果调用 then 时，promise 已经成功，则执行onFulfilled，参数是promise的value；<br />
					10. 如果调用 then 时，promise 已经失败，那么执行onRejected, 参数是promise的reason；<br />
					11. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调onRejected；<br /><br />

					1. then 的参数 onFulfilled 和 onRejected 可以缺省，如果 onFulfilled 或者 onRejected不是函数，将其忽略，且依旧可以在下面的 then 中获取到之前返回的值；「规范 Promise/A+ 2.2.1、2.2.1.1、2.2.1.2」<br />
					2. promise 可以 then 多次，每次执行完 promise.then 方法后返回的都是一个“新的promise"；「规范 Promise/A+ 2.2.7」<br />
					3. 如果 then 的返回值 x 是一个普通值，那么就会把这个结果作为参数，传递给下一个 then 的成功的回调中；<br />
					4. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.2.7.2」<br />
					5. 如果 then 的返回值 x 是一个 promise，那么会等这个 promise 执行完，promise 如果成功，就走下一个 then 的成功；如果失败，就走下一个 then 的失败；如果抛出异常，就走下一个 then 的失败；「规范 Promise/A+ 2.2.7.3、2.2.7.4」<br />
					6. 如果 then 的返回值 x 和 promise 是同一个引用对象，造成循环引用，则抛出异常，把异常传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.3.1」<br />
					7. 如果 then 的返回值 x 是一个 promise，且 x 同时调用 resolve 函数和 reject 函数，则第一次调用优先，其他所有调用被忽略；「规范 Promise/A+ 2.3.3.3.3」

				</div>

				<h3>1、定义整体结构</h3>
				<Code code={`
// 三种状态					
const Pending = 'PENDING';
const Resolved = 'RESOLVED';
const Rejected = 'REJECTED';

// 是一个Promise的整体结构
class Promise {
	constructor(executor) {
		this.staus = Pending;
	}
	// Promise原型对象的then方法，指定成功、失败的回调，返回一个新的promise对象
	then(onResolved, onRejected) {

	}
	// Promise原型对象的catch方法，指定一个失败的回调函数，返回一个新的promise对象
	catch(onRejected) {

	}
    // finally 表示不是最终的意思，而是无论如何都会执行的意思。
    // 如果返回一个 promise 会等待这个 promise 也执行完毕。如果返回的是成功的 promise，会采用上一次的结果；如果返回的是失败的 promise，会用这个失败的结果，传到 catch 中。

	finally(callback) {

	}

	// Promise的resolve方法，返回一个指定结果的promise对象
	static resolve(value) {

	}
	// Promise的reject方法，返回一个指定reason的失败状态的promise对象
	static reject(value) {

	}
	// Promise的all方法，返回一个promise对象，只有当所有promise都成功的时候才返回
	static all(value) {

	}
	// Promise的race方法，返回一个promise对象，状态由第一个完成的promise决定
	static race(value) {

	}
}`} />
				<h3>2、实现promise构造函数</h3>
				promise构造函数接受一个函数，而且这个函数会立即被执行，该函数有两个入参，分别是成功的回调和失败的回调<br />
				<Code code={`
class Promise {
	constructor(executor) {
		this.staus = Pending;
		this.value = undefined;
		this.season = undefined;
		this.callbacks = [];

		let resolveFn = function(value) {
			if (this.status === Pending) {
				this.status = Resolved;
				this.value = value;

				if (this.callbacks.length > 0) {
					this.callbacks.forEach(item => {
						item.resolve(value);
					})
				}
			}
		}

		let rejectedFn = function(reason) {
			if (this.status === Pending) {
				this.reason = reason;
				this.status = Resolved;

				if (this.callbacks.length > 0) {
					this.callbacks.forEach(item => {
						item.reject(reason);
					})
				}
			}
		}

		try {
			// 立即执行
			executor(resolveFn, rejectedFn);
		} catch (e) {
			// 如果执行器保存则使用try catch捕获错误信息后让rejectedFn执行
			rejectedFn(e);
		}
	}

}`} />
				<h3>3、实现then</h3>
				<Code code={`
// then方法执行完成后返回一个新的promise对象
then(onResolved, onRejected) {
	const self = this;
	// then传入的参数如果不是函数的话，会发生值的穿透，即参数不为函数的then是无效的，不会执行，将会保存上一个value
	onResolved = typeof onResolved === 'function' ? onResolved : value => value;
	onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};

	return new Promise((resolve, reject) => {
		// 如果当前的状态为Pending时需要将回调保存起来，当状态发生改变的时候再执行
		if (this.status === Pending) {
			this.callbacks({
				resolve: () => { handle(onResolved) },
				reject: () => { handle(onRejected) },
			});
		}
		// 如果当前状态为Resolved，则不需要将回调保存起来，是异步执行
		if (this.status === Resolved) {
			setTimeout(() => {
				handle(onResolved);
			}, 0);
		}
		// 同Resolved状态
		if (this.status === Rejected) {
			setTimeout(() => {
				handle(onRejected);
			}, 0);
		}

		function handle(callback) {
			try {
				const result = callback(self.value);
				// then返回的不一定为promise对象
				if (result instanceof Promise) {
					// 如果回调函数返回的是promise对象，return的promise的结果就是这个promise的结果
					result.then(value => resolve(self.value), reason => reject(self.reason));
				} else {
					// 如果回调函数返回的不是promise对象，return的promise的状态是resolved，value是就是返回值
					resolve(result);
				}
			} catch (e) {
				// 如果执行onResolved的时候报错，则返回promise的状态为rejected
				reject(e);
			}
		}
	});
}
`} />

				<h3>4、实现catch方法</h3>
				catch方法的作用和then的第二个回调函数一样，可以借助then方法实现。<br />
				<Code code={`
catch(onRejected) {
	return this.then(null, onRejected);
}`} />

				<h3>5、实现Promise.resolve</h3>
				Promise.resolve方法可以接受三种值：非promise、成功状态的promise、失败状态的promise<br />
				例子：<br />
				<div className="code-desc">
					Promise.resolve(1);<br />
					Promise.resolve(Promise.resolve(1));<br />
					Promise.resolve(Promise.reject(1));<br />
				</div>
				<Code code={`
static resolve(value) {
	return new Promise((resolve, reject) => {
		if (value instanceof Promise) {
			value.then((value) => {
				resolve(value);
			}, (reason) => {
				reject(reason)
			});
		} else {
			resolve(value);
		}
	});
}`} />

				<h3>6、实现Promise.reject</h3>
				<Code code={`
static reject(reason) {
	return new Promise((resolve, reject) => {
		reject(reason);
	});
}`} />

				<h3>7、实现Promise.all</h3>
				Promise.all会返回一个promise，这个promise的状态由遍历每个promise产生的结果决定；<br />
				因此有两种情况： 第一是遍历到有一个promise是reject状态，则直接返回的promise为rejected；<br />
				第二是所有的的状态值都为resolved，则返回的状态为resolved，还要每个promise产生的值传递下去<br />
				传入Promise.all的数组中的项目不一定是promise对象，要把不是promise的包装成promise对象。
				<Code code={`
static all(promises) {
	const values = new Array(promises.length);
	var resolvedCount = 0;
	return new Promise((resolve, reject) => {
		// 遍历所有的promise，获取每个promise的结果
		promises.forEach((item, index) => {
			// 有些可能不是promise对象，都包装成promise
			Promise.resolve(item).then((value) => {
				values[index] = value;
				resolvedCount++;
				
				// 所有的成功执行完成
				if (resolvedCount === promises.length) {
					resolve(values);
				}
			}, reason => {
				// 只要有一个失败，return 的promise的状态就为rejected
				reject(reason);
			});
		})
	});
}`} />
				<h3>8、实现Promise.race</h3>
				Promise.race方法的状态是由第一个完成的promise来决定的。<br />
				<Code code={`
static race(promises) {
	return new Promise((resolve, reject) => {
		promises.forEach(item => {
			Promise.resolve(item).then(value => {
				resolve(value);
			}, reason => {
				reject(reason);
			});
		})
	});
}`} />

				<h3>9、实现实例的finally方法</h3>
				finally 表示不是最终的意思，而是无论如何都会执行的意思。<br />
				如果返回一个 promise 会等待这个 promise 也执行完毕。如果返回的是成功的 promise，会采用上一次的结果；如果返回的是失败的 promise，会用这个失败的结果，传到 catch 中。<br />
				<Code code={`
finally(callback) {
	return this.then(res => {
		return Promise.resolve(callback()).then(() => res);
	}, err => {
		return Promise.resolve(callback()).then(() => { throw err; });
	});
}					
`} />
				<h3>10、promise相关题目</h3>
				<Code code={`
async function async1() {
	console.log(1);
	await async2();
	console.log(2);
}

async function async2() {
	console.log(3);
}

console.log(4);

setTimeout(function() {
	console.log(5);
	Promise.resolve().then(function() {
		console.log(6);
	})
}, 0);

setTimeout(function() {
	console.log(7);
	Promise.resolve().then(function() {
		console.log(8);
	});
}, 0);

async1();

new Promise(function(resolve) {
	console.log(9);
	resolve();
}).then(function() {
	console.log(10);
});

console.log(11);

// 输出结果为： 4, 1, 3, 9, 11, 2, 10, 5,6,7,8(自己第一次做答案： 4 1 9 11 10 3 2 5 6 7 8)
将async1函数里的await去掉： 4, 1,3,2,9,11, 10, 5,6,7,8(自己第一次做答案： 4 1 3 2 9 11 10 5 6 7 8) `} />
            </div>
        )
    }
}