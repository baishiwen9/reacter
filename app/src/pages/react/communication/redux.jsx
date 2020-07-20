import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class CommunicationRedux extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title">
                    <span className="textShadow">react组件间的通信---redux</span>
                </p>
                <div className="article-desc">
                    主流的通信方案有：<br />
                    1. 使用props<br />
                    2. 使用context<br />
                    3. 使用发布订阅模式<br />
                    4. 使用redux<br />
                </div>
            </div>
        )
    }
}