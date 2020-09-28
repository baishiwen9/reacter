

import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class WorkPrinciple extends Component {
    constructor(props) {
        super(props);
    }
    render() {            
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">浏览器工作原理</span></p>
                <div className="quote">
                    参考文档： https://juejin.im/post/6875249496859770894<br />
                </div>
            </div>
        )
    }
}