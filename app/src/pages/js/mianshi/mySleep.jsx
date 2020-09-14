import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MySleep extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现sleep</span></p>
                <div className="quote">
                某个时间过后，就去执行某个函数，基于Promise封装异步任务
                </div>
                <Code code={`
function step(fn ,wait) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn();
            resolve();
        }, wait);
    })
}

async function sleep() {
    await step(() => console.log('--- step1 ---'), 1000);
    await step(() => console.log('--- step2 ---'), 1000);
    await step(() => console.log('--- step3 ---'), 1000);
    await step(() => console.log('--- step4 ---'), 1000);
}

sleep();
`} />
               
            </div>
        )
    }
}