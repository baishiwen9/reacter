import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyCache extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">实现一个有缓存功能的函数</span></p>
                <div className="article-desc">
                    实现一个缓存函数，如果要计算的参数之前已经计算过，那就拿缓存的值，如果没有重新计算。
                    <Code code={`
function add() {
    const args = Array.from(arguments);
    return args.reduce((preV, curV) => {
        return preV + curV;
    });
}
function memorize(fn) {
    let cache = {};
    return function() {
        console.time('---计算耗时---');
        const args = Array.from(arguments);
        const key = JSON.stringify(args);
        if (!cache[key]) {
            const res = fn.apply(null, args);
            cache[key] = res;
            console.timeEnd('---计算耗时---');
            return res;
        } else {
            console.timeEnd('---计算耗时---');
            return cache[key];
        }
    }
}

const adder = memorize(add);
adder(1,2,3);


//用Map实现
function memorize(fn) {
    let cache = new Map();
    return function() {
        console.time('---计算耗时---');
        const args = Array.from(arguments);
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            const res = fn.apply(null, args);
            cache.set(key, res);
            console.timeEnd('---计算耗时---');
            return res;
        } else {
            console.timeEnd('---计算耗时---');
            return cache.get(key);
        }
    }
}
`} />
                </div>
            </div>
        )
    }
}