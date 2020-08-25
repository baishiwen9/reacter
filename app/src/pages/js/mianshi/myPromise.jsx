

import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyPromise extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现promise</span></p>
                <div className="article-desc">
					参考文档： <br />
					https://juejin.im/post/5e3b9ae26fb9a07ca714a5cc<br />
					https://juejin.im/post/6856213486633304078<br />
					<a target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247484225&idx=1&sn=b1d26191a41b9a3961f6798d1218fd79&chksm=fe00b96bc977307d2eab27dbd25bf6d27194d7fcdd9d9515822639b0206ad6ca1f946a0de7a9&token=1408690735&lang=zh_CN#rd">promise面试题汇总</a>

					<h3><span className="textShadow">实现promise的整体流程</span></h3>
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

					<h3><span className="textShadow">1、定义整体结构</span></h3>
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
					<h3><span className="textShadow">2、实现promise构造函数</span></h3>
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
					<h3><span className="textShadow">3、实现then</span></h3>
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

					<h3><span className="textShadow">4、实现catch方法</span></h3>
					catch方法的作用和then的第二个回调函数一样，可以借助then方法实现。<br />
					<Code code={`
catch(onRejected) {
	return this.then(null, onRejected);
}`} />

					<h3><span className="textShadow">5、实现Promise.resolve</span></h3>
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

					<h3><span className="textShadow">6、实现Promise.reject</span></h3>
					<Code code={`
static reject(reason) {
	return new Promise((resolve, reject) => {
		reject(reason);
	});
}`} />

					<h3><span className="textShadow">7、实现Promise.all</span></h3>
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
					<h3><span className="textShadow">8、实现Promise.race</span></h3>
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


                    {/* <Code code={`
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
	constructor(executor) {
		this._state = PENDING;   //promise状态值
		this._resolveQueue = [];
		this._rejectQueue = [];

		let _resolve = (value) => {
			if (this._state !== PENDING) {
				return;
			}
			this._state = FULFILLED;

			while (this._resolveQueue.length) {
				const callback = this._resolveQueue.shift();
				callback(value);
			}
		}

		let _reject = (value) => {
			if (this._state !== PENDING) {
				return;
			}
			this._state = REJECTED;

			while (this._rejectQueue.length) {
				const callback = this._rejectQueue.shift();
				callback(value);
			}
		}
	} */}

	{/* /*
		@实现then方法的思考：
		显然.then()需要返回一个Promise，这样才能找到then方法，所以我们会把then方法的返回值包装成Promise。
		.then()的回调需要拿到上一个.then()的返回值
		.then()的回调需要顺序执行。我们要等待当前Promise状态变更后，再执行下一个then收集的回调，这就要求我们对then的返回值分类讨论
	*/ }

	{/* then(resolveFn, rejectFn) {
		//返回一个新的promise对象
		return new MyPromise((resolve, reject) => {
			const fulfilledFn = value => {
				try {
					let x = resolveFn(value);
					x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
				} catch (err) {
					reject(err);
				}
			};
			this._resolveQueue.push(fulfilledFn);

			cosnt rejectedFn = value => {
				try {
					let x = rejectFn(value);
					x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
				} catch (err) {
					reject(err);
				}
			};
			this._rejectQueue.push(rejectedFn);
		})
	}
}`} /> */}
                </div>
            </div>
        )
    }
}