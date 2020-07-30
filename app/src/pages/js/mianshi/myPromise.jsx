

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
                    <Code code={`
/*
	参考文档： https://juejin.im/post/5e3b9ae26fb9a07ca714a5cc
*/
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
	}

	/*
		@实现then方法的思考：
		显然.then()需要返回一个Promise，这样才能找到then方法，所以我们会把then方法的返回值包装成Promise。
		.then()的回调需要拿到上一个.then()的返回值
		.then()的回调需要顺序执行。我们要等待当前Promise状态变更后，再执行下一个then收集的回调，这就要求我们对then的返回值分类讨论
	*/

	then(resolveFn, rejectFn) {
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
}`} />
                </div>
            </div>
        )
    }
}