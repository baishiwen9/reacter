import React, { Component } from 'react';
import Code from './../../comp/Code';
// import './../../comp/common/style.css';


export default class MyClone extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title">
                    <span className="textShadow">实现浅拷贝 & 深拷贝</span>
                </p>

                <p className="item-title">1. 实现浅拷贝</p>
                <div className="quote">
                只拷贝对象或数组的第一层内容
                </div>
                <Code code={`
function shellClone(target) {
    if (typeof target === 'object' && target != null) {
        const res = Array.isArray(target) ? [] : {};
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                res[key] = target[key];
            }
        }
        return res;
    } else {
        return target;
    }
}`} />
                <p className="item-title">2. 实现深拷贝</p>
                <div className="quote">层层拷贝对象或数组的每一层内容</div>
                <Code code={`
function deepClone(target) {
    if (target === null) {
        return target;
    }
    if (typeof target !== 'object') {
        return target;
    }
    let res = Array.isArray(target) ? [] : {};
    for (let key in target) {
        if (target.hasOwnProperty(key) && typeof target[key] !== 'object') {
            res[key] = target[key];
        } else {
            res[key] = deepClone(target[key]);
        }
    }
    return res;
}`} />
            </div>
        )
    }
}