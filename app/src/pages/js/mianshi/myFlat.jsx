import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyFlat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现数组扁平化Flat</span></p>
                <div className="quote">
					1. 循环数组里的每一个元素<br />
					2. 判断该元素是否为数组<br />
					3. 是数组的话，继续循环遍历这个元素——数组<br />
					4. 不是数组的话，把元素添加到新的数组中
				</div>
                <Code code={`
// es5
Array.prototype.myFlat = function() {
    const _this = this;
    let res = [];
    let cycle = function(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                cycle(item);
            } else {
                res.push(item);
            }
        })
    }
    cycle(_this);
    return res;
}

// reduce
function myFlat(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
    }, []);
}
`} />
            </div>
        )
    }
}