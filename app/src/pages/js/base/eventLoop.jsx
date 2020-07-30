import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class EventLoop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">event Loop</span></p>
                <div className="article-desc">
                    参考文档： https://juejin.im/post/5b63b4cb6fb9a04fb4017f5a<br />
                    http://www.ruanyifeng.com/blog/2014/10/event-loop.html<br />
                    https://juejin.im/post/59e85eebf265da430d571f89
                </div>
                <div className="article-desc">
                    <Code code={`
console.log('start')
new Promise((resolve, reject) => {
  console.log('promise3')
    setTimeout(() => {
        resolve('111')
        resolve('222')
        reject()
    }, 1000)
})
.then((data1) => {
    console.log('res1', data1)
}, (data2) => {
    console.log('res2', data2)
})
.then((data3) => {
    console.log('re3', data3)
})
console.log('end')

// 输出结果依次是
start

promise3

end

res1  111

res2 这个不会执行

res3 undefined`} />
                    promise中有多个resolve（reject）方法的时候，只执行第一个，因为执行第一个后状态已经发生改变了（状态凝固），所以后面的resolve（reject）都不会执行，也不会被覆盖。
                </div>
            </div>
        )
    }
}