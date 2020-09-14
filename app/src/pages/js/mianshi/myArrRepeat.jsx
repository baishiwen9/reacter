import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class MyArrRepeat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">实现数组去重</span></p>
                <Code code={`
// 数组最后一项元素替换掉当前元素，并删除最后一个元素
`} />
               
            </div>
        )
    }
}