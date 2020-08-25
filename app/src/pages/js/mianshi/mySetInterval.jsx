import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MySetInterval extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">用setTimeout实现setInterval</span></p>
                <div className="article-desc">
                    为什么要用setTimeout代替setInterval？ 参考文档： https://juejin.im/post/6844903825862557710<br />
                    <Code code={`
function mySetInterval(cb, time) {
    var thisFn = arguments.callee;
    var fn = function() {
        cb();
        thisFn.timeid = setTimeout(function() {
            if (thisFn.timeid) {
                clearTimeout(thisFn.timeid);
            }
            fn();
        }, time);
    }
    thisFn.timeid = setTimeout(function() {
        fn();
    }, time);
    return thisFn.timeid;
}

function myClearInterval() {
    clearTimeout(mySetInterval.timeid);
}`} />              
                </div>
            </div>
        )
    }
}