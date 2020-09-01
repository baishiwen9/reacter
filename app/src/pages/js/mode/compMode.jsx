import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class CompMode extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article-desc">
                <p className="article-title"><span className="textShadow">组件设计原则</span></p>
                <div className="quote">
                    一个组件的复杂度，主要来源就是自身的状态；即组件自身需要维护多少个不依赖于外部输入的状态。<br />
                    组件开发过程中，将数据和UI进行解耦是最重要的工作。<br /><br />

                    想要开发一个更加完善的组件，需要符合以下原则：<br />
                    1. 单一职责：只实现一个职责，并且只有一个改变状态的理由。<br />
                    2. 通用性：组件开发要服务于业务，为了更好地复用，又要从业务中抽离。<br />
                    3. 封装：优秀的组件应该隐藏内部细节和实现意义，并通过props来控制行为和输出。<br />
                    4. 组合：具有多个功能的组件，应该转换成多个小组件。<br />
                    5. 可测试<br />
                    6. 富有意义：有意义的函数、变量命名，可以让代码具有良好的可读性。<br />
                </div>
            </div>
        )
    }
}