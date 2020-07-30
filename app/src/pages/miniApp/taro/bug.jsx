import React, { Component } from 'react';
import Code from '../../comp/Code';

export default class Taro extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p className="article-title"><span className="textShadow">Taro</span></p>
                <div className="article-desc">
                    taro开发小程序过程中的一些坑：<br />
                    1. 要跳转的路由中不能有中划线<br /><br />
                    2. 一个文件中只能有一个class<br /><br />
                    3. 在微信小程序中this代表组件实例，在taro中this.$scope代表组件实例<br /><br />
                    <Code code={`
componentDidMount() {
    const query = Taro.createSelectorQuery().in(this.$scope);
    query.select('#list-card').boundingClientRect((res) => {
    console.log('res: ', res);
    }).exec()
}`} />
                </div>
            </div>
        )
    }
}